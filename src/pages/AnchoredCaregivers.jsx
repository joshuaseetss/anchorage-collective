import ServiceTable from '../components/ServiceTable'

const services = [
  {
    name: 'Support for Caregivers of Individuals with Bipolar Disorder',
    details: 'Psychoeducation and peer support for those caring for someone living with bipolar disorder.',
    signUpLink: '#',
  },
  {
    name: 'Support for Caregivers of Individuals with Schizophrenia',
    details: 'Understanding, connection, and practical support for caregivers navigating schizophrenia.',
    signUpLink: '#',
  },
  {
    name: 'Support for Caregivers of Individuals with Eating Disorders',
    details: 'Guidance and peer support for those caring for someone with an eating disorder.',
    signUpLink: '#',
  },
]

export default function AnchoredCaregivers() {
  return (
    <div className="page service-page">
      <section className="page-hero page-hero--caregivers">
        <div className="container">
          <h1>Anchored Caregivers</h1>
          <p className="page-subtitle">
            Supporting the supporters — because caregiving is a journey no one should walk alone.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container content-narrow">
          <h2>Our Services</h2>
          <p>
            Caring for a loved one living with a mental health condition can be both rewarding and
            exhausting. We offer psychoeducation and support circles to help caregivers understand,
            cope, and thrive.
          </p>

          <div className="service-list">
            <div className="service-item">
              <h3>Caregivers of Individuals Living with Bipolar Disorder</h3>
              <p>
                Psychoeducation workshops and support circles designed to help you understand bipolar
                disorder, manage day-to-day challenges, and connect with others who share your experience.
              </p>
            </div>

            <div className="service-item">
              <h3>Caregivers of Individuals Living with Schizophrenia</h3>
              <p>
                A safe space to learn about schizophrenia, develop coping strategies, and build a
                network of support with fellow caregivers.
              </p>
            </div>

            <div className="service-item">
              <h3>Caregivers of Individuals Living with Eating Disorders</h3>
              <p>
                Guidance, education, and peer support for caregivers navigating the unique challenges
                of supporting someone with an eating disorder.
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
