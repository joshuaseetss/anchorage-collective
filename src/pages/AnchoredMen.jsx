import ServiceTable from '../components/ServiceTable'

const services = [
  {
    name: 'Mental Health Support',
    details: 'One-to-one and group-based mental health support for men.',
    comingSoon: true,
  },
  {
    name: 'Support Circles for Young Fathers',
    details: 'A safe space for young fathers to connect, share experiences, and build resilience.',
    signUpLink: '#',
  },
  {
    name: 'Psychoeducation Workshops for Expectant Fathers',
    details: 'Workshops to prepare expectant fathers for the emotional journey of parenthood.',
    signUpLink: '#',
  },
  {
    name: 'Support for Men in Unsupported Pregnancies',
    details: 'Dedicated support for men navigating the complexities of unsupported pregnancies.',
    signUpLink: '#',
  },
]

export default function AnchoredMen() {
  return (
    <div className="page service-page">
      <section className="page-hero page-hero--men">
        <div className="container">
          <h1>Anchored Men</h1>
          <p className="page-subtitle">
            Supporting men through fatherhood, mental health challenges, and life transitions.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container content-narrow">
          <h2>Our Services</h2>
          <p>
            Anchorage Collective provides tailored programmes to support men at every stage.
            From psychoeducation workshops for expectant fathers to support circles for young dads,
            we create safe spaces for honest conversation and growth.
          </p>

          <div className="service-list">
            <div className="service-item">
              <h3>Mental Health Support <span className="badge badge-soon">Coming Soon</span></h3>
              <p>
                One-to-one and group-based mental health support designed specifically for men.
                We&rsquo;re developing this service to launch soon — stay tuned.
              </p>
            </div>

            <div className="service-item">
              <h3>Support Circles for Young Fathers</h3>
              <p>
                A safe, non-judgemental space for young fathers to connect with peers,
                share experiences, and develop confidence in their role as parents.
              </p>
            </div>

            <div className="service-item">
              <h3>Psychoeducation Workshops for Expectant Fathers</h3>
              <p>
                Evidence-informed workshops to help expectant fathers understand the emotional
                and psychological journey of becoming a parent.
              </p>
            </div>

            <div className="service-item">
              <h3>Support for Men in Unsupported Pregnancies</h3>
              <p>
                Compassionate support for men who are navigating the emotional complexities
                of unsupported pregnancies.
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
