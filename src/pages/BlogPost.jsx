import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { PortableText } from '@portabletext/react'
import { sanityClient, urlFor } from '../lib/sanity'
// import AuthorBio from '../components/AuthorBio'

const categoryLabels = {
  men: 'Men',
  professionals: 'Professionals',
  'mental-health': 'Mental Health',
}

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  category,
  excerpt,
  mainImage,
  body,
  publishedAt
}`

const portableTextComponents = {
  types: {
    image: ({ value }) => (
      <img className="blog-post-image" src={urlFor(value).width(900).url()} alt={value.alt || ''} />
    ),
  },
}

export default function BlogPost() {
  const { slug } = useParams()
  const [result, setResult] = useState({ slug: null, post: null, notFound: false, error: null })

  useEffect(() => {
    let cancelled = false
    sanityClient.fetch(POST_QUERY, { slug })
      .then((data) => {
        if (cancelled) return
        setResult({ slug, post: data || null, notFound: !data, error: null })
      })
      .catch((err) => {
        if (cancelled) return
        setResult({ slug, post: null, notFound: false, error: err })
      })
    return () => {
      cancelled = true
    }
  }, [slug])

  const loading = result.slug !== slug
  const post = loading ? null : result.post
  const notFound = !loading && result.notFound
  const error = !loading && result.error

  if (error) {
    return (
      <div className="page blog-page">
        <section className="section">
          <div className="container content-narrow text-center">
            <p>Couldn&rsquo;t load this post: {error.message}</p>
          </div>
        </section>
      </div>
    )
  }

  if (notFound) {
    return (
      <div className="page blog-page">
        <section className="section">
          <div className="container content-narrow text-center">
            <h1>Post not found</h1>
            <p><Link to="/blog">Back to Blog</Link></p>
          </div>
        </section>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="page blog-page">
        <section className="section">
          <div className="container text-center">
            <p>Loading&hellip;</p>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="page blog-page">
      <section className="page-hero">
        <div className="container content-narrow">
          <span className="blog-category">{categoryLabels[post.category]}</span>
          <h1>{post.title}</h1>
          {post.publishedAt && (
            <p className="page-subtitle blog-date">
              {new Date(post.publishedAt).toLocaleDateString(undefined, {
                year: 'numeric', month: 'long', day: 'numeric',
              })}
            </p>
          )}
        </div>
      </section>

      <section className="section">
        <div className="container content-narrow">
          {post.mainImage && (
            <img
              className="blog-post-image blog-post-hero-image"
              src={urlFor(post.mainImage).width(1200).url()}
              alt=""
            />
          )}
          {/* <AuthorBio /> */}
          <div className="blog-post-body">
            <PortableText value={post.body} components={portableTextComponents} />
          </div>
          <p><Link to="/blog">&larr; Back to Blog</Link></p>
        </div>
      </section>
    </div>
  )
}
