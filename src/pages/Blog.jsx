import { useParams, NavLink } from 'react-router-dom'

const blogPosts = {
  men: [
    { title: 'Why Fatherhood Support Matters', excerpt: 'Exploring the emotional landscape of new and expectant fathers, and why dedicated support can make all the difference.', date: 'Coming soon' },
    { title: 'Breaking the Silence: Men and Mental Health', excerpt: 'A look at why men often struggle to seek help and how we can create safer spaces for conversation.', date: 'Coming soon' },
  ],
  professionals: [
    { title: 'Compassion Fatigue in Social Work', excerpt: 'Understanding the signs of compassion fatigue and what organisations can do to support their teams.', date: 'Coming soon' },
    { title: 'The Case for Respite Retreats', excerpt: 'Why structured time away from work is essential for healthcare professionals — not a luxury, but a necessity.', date: 'Coming soon' },
  ],
  caregivers: [
    { title: 'Caring for the Carer', excerpt: 'When you spend all your energy supporting a loved one, who supports you? Practical tips for caregiver self-care.', date: 'Coming soon' },
    { title: 'Understanding Bipolar Disorder as a Caregiver', excerpt: 'A psychoeducational overview for family members and carers navigating bipolar disorder.', date: 'Coming soon' },
  ],
}

const categoryLabels = {
  men: 'Men',
  professionals: 'Professionals',
  caregivers: 'Caregivers',
}

export default function Blog() {
  const { category } = useParams()
  const activeCategory = category && blogPosts[category] ? category : null

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

          <div className="blog-grid">
            {activeCategory ? (
              blogPosts[activeCategory].map((post, i) => (
                <article key={i} className="blog-card">
                  <span className="blog-category">{categoryLabels[activeCategory]}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <span className="blog-date">{post.date}</span>
                </article>
              ))
            ) : (
              Object.entries(blogPosts).map(([cat, posts]) =>
                posts.map((post, i) => (
                  <article key={`${cat}-${i}`} className="blog-card">
                    <span className="blog-category">{categoryLabels[cat]}</span>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <span className="blog-date">{post.date}</span>
                  </article>
                ))
              )
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
