export default function Contact() {
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
                  <p>hello@anchoragecollective.com</p>
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

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <h2>Send a Message</h2>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="you@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select id="subject" name="subject">
                  <option value="">Select a topic</option>
                  <option value="men">Anchored Men</option>
                  <option value="professionals">Anchored Professionals</option>
                  <option value="caregivers">Anchored Caregivers</option>
                  <option value="general">General Enquiry</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="How can we help?" required />
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
