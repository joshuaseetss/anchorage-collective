import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ServiceTable from '../components/ServiceTable'
import EventCountdown from '../components/EventCountdown'

const DADS_HUDDLE_URL = 'https://forms.gle/JaDVXyEkpJwxSTV9A'
const DADS_HUDDLE_DATE = '2026-09-26T10:00:00+08:00'

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
    name: 'Support for Men in Unsupported Pregnancies',
    details: 'Dedicated support for men navigating the complexities of unsupported pregnancies.',
    signUpLink: '#',
  },
]

export default function AnchoredMen() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [hash])

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
          <div className="event-card" id="upcoming-event">
            <div className="event-card-header">
              <span className="badge badge-event">Upcoming Event</span>
              <h2>Setting Anchor</h2>
              <p className="event-meta">
                Sat, 26 Sep 2026 &middot; 10:00 AM&ndash;12:45 PM &middot; Murdoch University (Level 2, Connexion @ Odeon 333, Singapore)
              </p>
            </div>

            <p className="event-description">
              Very few talk about the real shift men face &mdash; the pressure to provide, marriage changes,
              and the silent emotional load. Setting Anchor is your space to talk about what actually
              happens to us.
            </p>

            <EventCountdown targetDate={DADS_HUDDLE_DATE} />

            <div className="event-card-body">
              <div className="event-poster">
                <img src="/events/setting-anchor-poster.png" alt="Setting Anchor event poster with full schedule" />
              </div>

              <div className="event-expect">
                <h3>What to Expect</h3>
                <ul className="event-expect-list">
                  <li>
                    <strong>What I Wish I Knew:</strong> Real talk from a seasoned dad on the unexpected
                    challenges.
                  </li>
                  <li>
                    <strong>What I Wish My Father Did:</strong> Reflecting on the legacy we inherited
                    &mdash; and the dads we want to be.
                  </li>
                  <li>
                    <strong>Through the Valley:</strong> Navigating mental health, marriage strains, and
                    finding hope when plans fail.
                  </li>
                </ul>

                <p className="event-tagline">Come la. Leave a little more anchored.</p>

                <a href={DADS_HUDDLE_URL} target="_blank" rel="noopener noreferrer" className="event-full-link">
                  Register Now &rarr;
                </a>
              </div>
            </div>
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
