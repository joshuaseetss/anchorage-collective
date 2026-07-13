import { useEffect, useState } from 'react'
import { useParams, NavLink, Link } from 'react-router-dom'
import { sanityClient, urlFor } from '../lib/sanity'

const categoryLabels = {
  men: 'Men',
  professionals: 'Professionals',
  'mental-health': 'Mental Health',
}

const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  category,
  excerpt,
  mainImage,
  publishedAt
}`

export default function Blog() {
  const { category } = useParams()
  const activeCategory = category && categoryLabels[category] ? category : null

  const [posts, setPosts] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    sanityClient.fetch(POSTS_QUERY)
      .then((data) => {
        if (!cancelled) setPosts(data)
      })
      .catch((err) => {
        if (!cancelled) setError(err)
      })
    return () => {
      cancelled = true
    }
  }, [])

  const visiblePosts = posts
    ? activeCategory
      ? posts.filter((post) => post.category === activeCategory)
      : posts
    : null

  return (
    <div className="page blog-page">
      <section className="page-hero">
        <div className="container">
          <h1>Blog</h1>
          <p className="page-subtitle">Insights, stories, and resources from Anchorage Collective.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <nav className="blog-tabs">
            <NavLink to="/blog" end className={({ isActive }) => isActive ? 'tab active' : 'tab'}>
              All
            </NavLink>
            {Object.entries(categoryLabels).map(([key, label]) => (
              <NavLink
                key={key}
                to={`/blog/${key}`}
                className={({ isActive }) => isActive ? 'tab active' : 'tab'}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {error ? (
            <p className="text-center">Couldn&rsquo;t load posts: {error.message}</p>
          ) : !visiblePosts ? (
            <p className="text-center">Loading posts&hellip;</p>
          ) : visiblePosts.length === 0 ? (
            <p className="text-center">No posts yet &mdash; check back soon.</p>
          ) : (
            <div className="blog-grid">
              {visiblePosts.map((post) => (
                <Link key={post.slug} to={`/blog/${post.category}/${post.slug}`} className="blog-card">
                  {post.mainImage && (
                    <img
                      className="blog-card-image"
                      src={urlFor(post.mainImage).width(640).height(360).fit('crop').url()}
                      alt=""
                    />
                  )}
                  <span className="blog-category">{categoryLabels[post.category]}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  {post.publishedAt && (
                    <span className="blog-date">
                      {new Date(post.publishedAt).toLocaleDateString(undefined, {
                        year: 'numeric', month: 'long', day: 'numeric',
                      })}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
