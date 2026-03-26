export default function About() {
  return (
    <div className="page about-page">
      <section className="page-hero">
        <div className="container">
          <h1>About Us</h1>
          <p className="page-subtitle">
            We believe that those who dedicate their lives to caring for others deserve
            meaningful support too.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container content-narrow">
          <h2>Our Mission</h2>
          <p>
            Anchorage Collective was founded on a simple but powerful belief: <strong>we care for those who care</strong>.
            Whether you&rsquo;re a father navigating new responsibilities, a social worker carrying the weight of others&rsquo;
            stories, or a caregiver supporting a loved one through mental illness — you deserve a safe harbour.
          </p>

          <h2>What We Do</h2>
          <p>
            We offer psychoeducation workshops, support circles, leadership consultancy, and respite retreats.
            Our programmes are evidence-informed, trauma-aware, and designed to meet people where they are.
          </p>

          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Compassion</h3>
              <p>We lead with empathy and meet every person with dignity and respect.</p>
            </div>
            <div className="value-item">
              <h3>Community</h3>
              <p>Healing happens in connection. We create spaces where people feel seen and heard.</p>
            </div>
            <div className="value-item">
              <h3>Courage</h3>
              <p>We encourage honest conversations about mental health, fatherhood, and caregiving.</p>
            </div>
            <div className="value-item">
              <h3>Integrity</h3>
              <p>Our work is grounded in evidence-based practice and ethical care.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
