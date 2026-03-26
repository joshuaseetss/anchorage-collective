import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-col">
          <h3>Anchorage Collective</h3>
          <p>We care for those who care.</p>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><Link to="/anchored-men">Anchored Men</Link></li>
            <li><Link to="/anchored-professionals">Anchored Professionals</Link></li>
            <li><Link to="/anchored-caregivers">Anchored Caregivers</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Connect</h4>
          <p className="footer-email">hello@anchoragecollective.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Anchorage Collective. All rights reserved.</p>
      </div>
    </footer>
  )
}
