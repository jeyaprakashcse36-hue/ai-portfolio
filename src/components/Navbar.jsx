import { useEffect, useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#publications', label: 'Publications' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar-shell" style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: scrolled ? '0.75rem 1.25rem' : '1rem 1.25rem',
      background: 'rgba(5,5,16,0.85)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--border)',
      transition: 'padding 0.3s',
      position: 'fixed',
      width: '100%',
      boxSizing: 'border-box',
    }}>
      <span className="logo-gradient" style={{ fontFamily: 'Space Grotesk', fontSize: '1.25rem', fontWeight: 700, zIndex: 2 }}>
        JP - Portfolio
      </span>

      <button
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
        className="mobile-nav-toggle"
        style={{
          display: 'none',
          border: '1px solid var(--border2)',
          background: 'rgba(255,255,255,0.06)',
          color: 'var(--text)',
          width: '2.5rem',
          height: '2.5rem',
          borderRadius: '999px',
          cursor: 'pointer',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1rem',
        }}
      >
        ☰
      </button>

      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`} style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              onClick={(e) => handleClick(e, l.href)}
              style={{ color: 'var(--text2)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500, letterSpacing: '0.03em', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--text)'}
              onMouseLeave={e => e.target.style.color = 'var(--text2)'}
            >
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            onClick={(e) => handleClick(e, '#contact')}
            style={{
              padding: '0.5rem 1.25rem', borderRadius: '999px',
              background: 'var(--accent)', color: '#fff',
              fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.target.style.opacity = '0.85'}
            onMouseLeave={e => e.target.style.opacity = '1'}
          >
            Hire Me
          </a>
        </li>
      </ul>
    </nav>
  )
}
