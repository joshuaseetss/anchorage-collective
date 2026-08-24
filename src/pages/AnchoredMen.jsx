import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ServiceTable from '../components/ServiceTable'
import EventCountdown from '../components/EventCountdown'

const DADS_HUDDLE_URL = 'https://forms.gle/JaDVXyEkpJwxSTV9A'
const DADS_HUDDLE_DATE = '2026-09-26T10:00:00+08:00'

const sessions = [
  {
    num: '01',
    title: 'What I Wish I Knew',
    time: '10:10 – 11:00',
    detail: 'Sharing by Daryl (SGDads) + discussion',
  },
  {
    num: '02',
    title: 'What I Wish My Father Did for Me',
    time: '11:10 – 12:00',
    detail: 'Vulnerable sharing + collective reflection',
  },
  {
    num: '03',
    title: 'Through the Valley',
    time: '12:05 – 12:45',
    detail: 'Marriage, Mental Health, Pain & Hope',
  },
]

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
          <div className="event-flyer" id="upcoming-event">
            <div className="flyer-hero">
              <span className="badge badge-event">Upcoming Event</span>
              <p className="flyer-partner">In partnership with MenToo &amp; SGDads Community</p>
              <h2 className="flyer-title">Setting Anchor</h2>
              <p className="flyer-subtitle">A huddle for expectant, aspiring &amp; new dads</p>

              <div className="flyer-illustration" aria-hidden="true">
                <svg viewBox="0 0 200 220" width="120" height="132">
                  <circle cx="95" cy="115" r="95" fill="var(--accent-light)" opacity="0.4" />
                  <line x1="95" y1="118" x2="142" y2="62" stroke="var(--primary-dark)" strokeWidth="16" strokeLinecap="round" />
                  <ellipse cx="150" cy="70" rx="17" ry="21" fill="var(--accent)" />
                  <circle cx="150" cy="44" r="14" fill="var(--accent)" />
                  <path d="M58,220 L62,112 Q85,90 108,112 L112,220 Z" fill="var(--primary-dark)" />
                  <circle cx="85" cy="98" r="22" fill="var(--primary-dark)" />
                </svg>
              </div>
            </div>

            <div className="flyer-wave" aria-hidden="true">
              <svg viewBox="0 0 1200 100" preserveAspectRatio="none">
                <path d="M0,35 C300,85 900,0 1200,45 L1200,100 L0,100 Z" fill="var(--accent-light)" />
                <path d="M0,60 C300,100 900,25 1200,70 L1200,100 L0,100 Z" fill="var(--primary-dark)" />
              </svg>
            </div>

            <div className="flyer-body">
              <p className="flyer-date">Saturday, 26 September 2026</p>
              <p className="flyer-time">10:00 AM &ndash; 12:45 PM</p>
              <p className="flyer-venue">
                Murdoch University &middot; Connexion, Level 2<br />
                333 North Bridge Road, Singapore 188721
              </p>

              <p className="flyer-description">
                Very few talk about the real shift men face &mdash; the pressure to provide, marriage
                changes, and the silent emotional load. Setting Anchor is your space to talk about what
                actually happens to us.
              </p>

              <EventCountdown targetDate={DADS_HUDDLE_DATE} />

              <hr className="flyer-divider" />

              <ol className="flyer-sessions">
                {sessions.map((s) => (
                  <li key={s.num}>
                    <span className="flyer-session-num">{s.num}</span>
                    <div>
                      <h3>{s.title}</h3>
                      <span className="flyer-session-time">{s.time}</span>
                      <p>{s.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <p className="flyer-note">Each session: personal sharing followed by community discussion</p>

              <div className="flyer-register">
                <span className="flyer-register-label">Scan to Register</span>
                <img src="/events/qr-register.png" alt="QR code to register for Setting Anchor" className="flyer-qr" />
                <a href={DADS_HUDDLE_URL} target="_blank" rel="noopener noreferrer" className="flyer-register-btn">
                  Register Now &rarr;
                </a>
                <span className="flyer-url">forms.gle/JaDVXyEkpJwxSTV9A</span>
              </div>

              <p className="flyer-tagline">Come la. Leave a little more anchored.</p>

              <div className="flyer-sponsor">
                <span>Venue Sponsor</span>
                <strong>Murdoch University</strong>
              </div>
            </div>

            <div className="flyer-footer">Free Admission &middot; Scan to Register</div>
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
