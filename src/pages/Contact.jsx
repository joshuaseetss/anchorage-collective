import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const submitted = status === 'success'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'contact', ...form }),
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
    <div className="page contact-page">
      <section className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p className="page-subtitle">
            We&rsquo;d love to hear from you. Reach out to learn more or get involved.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container content-narrow">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>
                Whether you&rsquo;re looking to join a support circle, enquire about our workshops,
                or explore a partnership, we&rsquo;re here to help.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <strong>Email</strong>
                  <p>anchoragecollective@gmail.com</p>
                </div>
                <div className="contact-item">
                  <strong>Follow Us</strong>
                  <p>Social media links coming soon.</p>
                </div>
              </div>

              <div className="qr-section">
                <h3>Scan to Connect</h3>
                <div className="qr-placeholder">
                  <p>QR Code</p>
                  <span className="qr-note">( QR code image to be added )</span>
                </div>
              </div>
            </div>

            {submitted ? (
              <div className="form-success">
                <h3>Message sent</h3>
                <p>
                  Thanks for reaching out — we&rsquo;ve received your message and will reply to{' '}
                  <strong>{form.email}</strong> soon.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Send a Message</h2>
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
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                  >
                    <option value="">Select a topic</option>
                    <option value="men">Anchored Men</option>
                    <option value="professionals">Anchored Professionals</option>
                    <option value="mental-health">Anchored Mental Health</option>
                    <option value="general">General Enquiry</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Sending…' : 'Send Message'}
                </button>

                {status === 'error' && (
                  <p className="form-error">{errorMessage}</p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
