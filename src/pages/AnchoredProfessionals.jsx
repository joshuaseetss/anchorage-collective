import ServiceTable from '../components/ServiceTable'

const services = [
  {
    name: 'Support Circles for Social Workers',
    details: 'Peer-led circles offering emotional support and reflective practice for social workers.',
    signUpLink: '#',
  },
  {
    name: 'Support Circles for Healthcare Workers',
    details: 'A space for healthcare professionals to process, connect, and recharge.',
    signUpLink: '#',
  },
  {
    name: 'Leadership Consultancy',
    details: 'Bespoke consultancy to support compassionate, sustainable leadership in care settings.',
    signUpLink: '#',
  },
  {
    name: 'Respite Retreats',
    details: 'Structured retreats designed to help professionals rest, reflect, and reconnect.',
    signUpLink: '#',
  },
]

export default function AnchoredProfessionals() {
  return (
    <div className="page service-page">
      <section className="page-hero page-hero--professionals">
        <div className="container">
          <h1>Anchored Professionals</h1>
          <p className="page-subtitle">
            Because the people who care for others need care too.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container content-narrow">
          <h2>Our Services</h2>
          <p>
            Professionals in social work and healthcare carry immense emotional weight.
            We offer dedicated spaces and programmes to support their wellbeing and professional growth.
          </p>

          <div className="service-list">
            <div className="service-item">
              <h3>Support Circles for Social Workers</h3>
              <p>
                Peer-led support circles providing a confidential space for social workers
                to reflect, decompress, and feel supported by people who understand their work.
              </p>
            </div>

            <div className="service-item">
              <h3>Support Circles for Healthcare Workers</h3>
              <p>
                A dedicated space for healthcare professionals to process the emotional toll
                of their work and connect with others who share similar experiences.
              </p>
            </div>

            <div className="service-item">
              <h3>Leadership Consultancy</h3>
              <p>
                Bespoke consultancy designed to support compassionate, sustainable leadership
                within care organisations. We help leaders build cultures that prioritise wellbeing.
              </p>
            </div>

            <div className="service-item">
              <h3>Respite Retreats</h3>
              <p>
                Structured retreats offering professionals dedicated time and space to rest,
                reflect, and reconnect — away from the demands of their day-to-day work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="workshop-banner">
            <h2>Stay tuned for our upcoming workshops</h2>
            <p>We&rsquo;re always developing new programmes. Check back soon or get in touch to stay informed.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Sign Up</h2>
          <ServiceTable services={services} />
        </div>
      </section>
    </div>
  )
}
