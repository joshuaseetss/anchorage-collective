import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpeg'

export default function Home() {
  return (
    <div className="page home-page">
      {/* Event announcement bar */}
      <Link to="/anchored-men#upcoming-event" className="announce-bar">
        <span className="announce-dot" aria-hidden="true" />
        <span className="announce-badge">Upcoming Event</span>
        <span className="announce-text">
          Expectant, Aspiring &amp; New Dads Huddle &mdash; Sat, 26 Sep 2026, 10am&ndash;2pm
        </span>
        <span className="announce-cta">Sign Up <span aria-hidden="true">&rarr;</span></span>
      </Link>

      {/* Hero */}
      <section className="hero">
        <div className="container hero-content">
          <img src={logo} alt="Anchorage Collective" className="hero-logo" />
          <h1>Anchorage Collective</h1>
          <p className="tagline">We care for those who care</p>
          <div className="hero-actions">
            <Link to="/about" className="btn btn-primary">Learn More</Link>
            <Link to="/contact" className="btn btn-outline">Get in Touch</Link>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We provide tailored support for men, professionals, and the wider mental health community — because those who care for others deserve care too.
          </p>
          <div className="card-grid">
            <div className="card">
              <div className="card-icon">&#128104;</div>
              <h3>Anchored Men</h3>
              <p>Mental health support, psychoeducation workshops, and support circles for fathers and men navigating life&rsquo;s challenges.</p>
              <Link to="/anchored-men" className="card-link">Explore &rarr;</Link>
            </div>
            <div className="card">
              <div className="card-icon">&#9877;</div>
              <h3>Anchored Professionals</h3>
              <p>Support circles, leadership consultancy, and respite retreats for social workers and healthcare professionals.</p>
              <Link to="/anchored-professionals" className="card-link">Explore &rarr;</Link>
            </div>
            <div className="card">
              <div className="card-icon">&#128149;</div>
              <h3>Anchored Mental Health</h3>
              <p>Psychoeducation talks, preventive holistic health, and conversations on mental health in relationships.</p>
              <Link to="/anchored-mental-health" className="card-link">Explore &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-accent">
        <div className="container text-center">
          <h2>Ready to get started?</h2>
          <p>Reach out to learn more about our programmes or sign up for an upcoming workshop.</p>
          <Link to="/contact" className="btn btn-primary">Contact Us</Link>
        </div>
      </section>
    </div>
  )
}
