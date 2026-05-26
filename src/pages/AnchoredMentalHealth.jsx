import { useState } from 'react'

const offerings = [
  {
    id: 'psychoeducation',
    title: 'Psychoeducation Talks',
    description:
      'Talks for caregivers or individuals living with bipolar disorder, schizophrenia, or eating disorders — building understanding, coping strategies, and connection.',
  },
  {
    id: 'preventive',
    title: 'Preventive Holistic Health',
    description:
      'Sessions on physical and mental wellness — practical tools to nurture overall wellbeing before challenges arise.',
  },
  {
    id: 'relationships',
    title: 'Mental Health & Relationships',
    description:
      'Exploring how mental health shapes the way we connect, communicate, and care for those around us.',
  },
]

export default function AnchoredMentalHealth() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    interests: [],
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const submitted = status === 'success'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleInterestToggle = (id) => {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(id)
        ? prev.interests.filter((i) => i !== id)
        : [...prev.interests, id],
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'interest', ...form }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }

      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMessage(err.message)
    }
  }

  return (
    <div className="page service-page">
      <section className="page-hero page-hero--mental-health">
        <div className="container">
          <h1>Anchored Mental Health</h1>
          <p className="page-subtitle">
            Education, prevention, and connection — for individuals, caregivers, and the relationships that hold us.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container content-narrow">
          <h2>What We Offer</h2>
          <p>
            Anchored Mental Health brings together psychoeducation, preventive wellness, and relational
            care. Whether you&rsquo;re supporting a loved one, navigating your own journey, or simply
            wanting to learn, there&rsquo;s a space for you here.
          </p>

          <div className="service-list">
            {offerings.map((o) => (
              <div className="service-item" key={o.id}>
                <h3>{o.title}</h3>
                <p>{o.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="workshop-banner">
            <h2>Stay tuned for our upcoming workshops</h2>
            <p>We&rsquo;re always developing new programmes. Check back soon or register your interest below.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container content-narrow">
          <h2>Register Your Interest</h2>
          <p>
            Tell us which sessions you&rsquo;d like to hear about. We&rsquo;ll be in touch when dates are confirmed.
          </p>

          {submitted ? (
            <div className="form-success">
              <h3>Thank you!</h3>
              <p>
                We&rsquo;ve received your interest and will be in touch at <strong>{form.email}</strong> once
                workshop dates are confirmed.
              </p>
            </div>
          ) : (
            <form className="contact-form interest-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label>I&rsquo;m interested in</label>
                <div className="checkbox-list">
                  {offerings.map((o) => (
                    <label key={o.id} className="checkbox-item">
                      <input
                        type="checkbox"
                        checked={form.interests.includes(o.id)}
                        onChange={() => handleInterestToggle(o.id)}
                      />
                      <span>{o.title}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message (optional)</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Anything you'd like us to know?"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending…' : 'Submit Interest'}
              </button>

              {status === 'error' && (
                <p className="form-error">{errorMessage}</p>
              )}

              <p className="form-footnote">
                Prefer to email us directly?{' '}
                <a href="mailto:anchoragecollective@gmail.com">anchoragecollective@gmail.com</a>
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
