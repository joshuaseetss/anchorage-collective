import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>Page not found</h1>
          <p className="page-subtitle">
            We couldn’t find the page you’re looking for.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container content-narrow text-center">
          <p>The link may be incorrect, or the page may have moved.</p>
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  )
}