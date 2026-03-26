import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.jpeg'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [blogDropdown, setBlogDropdown] = useState(false)
  const [servicesDropdown, setServicesDropdown] = useState(false)

  const closeAll = () => {
    setMenuOpen(false)
    setBlogDropdown(false)
    setServicesDropdown(false)
  }

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <Link to="/" className="navbar-brand" onClick={closeAll}>
          <img src={logo} alt="Anchorage Collective" className="navbar-logo" />
          <span className="brand-text">Anchorage Collective</span>
        </Link>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" end onClick={closeAll}>Home</NavLink>
          <NavLink to="/about" onClick={closeAll}>About</NavLink>

          <div
            className="nav-dropdown"
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <button
              className="nav-dropdown-trigger"
              onClick={() => setServicesDropdown(!servicesDropdown)}
            >
              Services <span className="chevron">&#9662;</span>
            </button>
            {servicesDropdown && (
              <div className="dropdown-menu">
                <NavLink to="/anchored-men" onClick={closeAll}>Anchored Men</NavLink>
                <NavLink to="/anchored-professionals" onClick={closeAll}>Anchored Professionals</NavLink>
                <NavLink to="/anchored-caregivers" onClick={closeAll}>Anchored Caregivers</NavLink>
              </div>
            )}
          </div>

          <div
            className="nav-dropdown"
            onMouseEnter={() => setBlogDropdown(true)}
            onMouseLeave={() => setBlogDropdown(false)}
          >
            <button
              className="nav-dropdown-trigger"
              onClick={() => setBlogDropdown(!blogDropdown)}
            >
              Blog <span className="chevron">&#9662;</span>
            </button>
            {blogDropdown && (
              <div className="dropdown-menu">
                <NavLink to="/blog/men" onClick={closeAll}>Men</NavLink>
                <NavLink to="/blog/professionals" onClick={closeAll}>Professionals</NavLink>
                <NavLink to="/blog/caregivers" onClick={closeAll}>Caregivers</NavLink>
              </div>
            )}
          </div>

          <NavLink to="/contact" onClick={closeAll}>Contact Us</NavLink>
        </nav>
      </div>
    </header>
  )
}
