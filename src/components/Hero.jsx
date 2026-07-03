import { useEffect } from 'react'
import myPhoto from '../assets/photo.jpg'

const stats = [
  { num: '1.9', label: 'Years at TCS' },
  { num: '2',   label: 'IEEE Publications' },
  { num: '8+',  label: 'Certifications' },
  { num: '8.39', label: 'CGPA' },
]

export default function Hero() {
  useEffect(() => {
    setTimeout(() => {
      document.querySelectorAll('#hero .fade-in').forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), i * 200)
      })
    }, 200)
  }, [])

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        paddingTop: '6rem', maxWidth: '100%', padding: '6rem 0 0',
      }}
    >
      <div style={{
        maxWidth: 1100, margin: '0 auto', padding: '0 3rem',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '4rem', alignItems: 'center', width: '100%',
      }}>
        {/* TEXT */}
        <div className="fade-in">
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.35rem 1rem', borderRadius: '999px',
            border: '1px solid rgba(108,99,255,0.4)',
            background: 'rgba(108,99,255,0.1)', color: 'var(--accent2)',
            fontSize: '0.8rem', fontWeight: 500, marginBottom: '1.5rem',
            letterSpacing: '0.05em', textTransform: 'uppercase',
          }}>
            <span className="animate-pulse-dot" style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--teal)' }} />
            Available for opportunities
          </div>

          <h1 className="gradient-text" style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(2.5rem,5vw,4.5rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '0.5rem' }}>
            Jeya Prakash B
          </h1>
          <p style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(1rem,2vw,1.4rem)', fontWeight: 500, color: 'var(--teal)', marginBottom: '1.5rem' }}>
            AI/ML Systems Engineer · TCS
          </p>
          <p style={{ color: 'var(--text2)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: 480 }}>
            Specializing in Prompt Engineering, Generative AI, and Mainframe Modernization.
            IEEE-published researcher with 1.9 years at TCS driving LLM-powered migration at scale.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="#contact"
              onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.75rem', borderRadius: '999px', background: 'var(--accent)', color: '#fff', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', transition: 'all 0.25s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >Get in Touch</a>
            <a
              href="mailto:jeyaprakashcse36@gmail.com"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.75rem', borderRadius: '999px', background: 'transparent', border: '1px solid var(--border2)', color: 'var(--text)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', transition: 'all 0.25s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >Download Resume</a>
          </div>

          <div style={{ display: 'flex', gap: '2rem', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            {stats.map(s => (
              <div key={s.label}>
                <div style={{ fontFamily: 'Space Grotesk', fontSize: '2rem', fontWeight: 700, lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text2)', marginTop: '0.25rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* PHOTO */}
        <div className="fade-in" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', transitionDelay: '0.2s' }}>
          {/* Orbit ring */}
          <div className="animate-orbit" style={{
            position: 'absolute', inset: -40, borderRadius: '50%',
            border: '1px solid rgba(108,99,255,0.2)',
          }}>
            <div style={{ position: 'absolute', top: -4, left: '50%', transform: 'translateX(-50%)', width: 8, height: 8, borderRadius: '50%', background: 'var(--accent2)', boxShadow: '0 0 12px var(--accent2)' }} />
          </div>

          {/* Frame */}
          <div style={{
            width: 320, height: 380, borderRadius: 20, overflow: 'hidden',
            border: '2px solid rgba(108,99,255,0.3)', position: 'relative',
            background: 'var(--bg3)', boxShadow: '0 0 60px rgba(108,99,255,0.15)',
          }}>
            {/* ↓ Replace this src with your photo import when ready */}
            <img
              src={myPhoto}
              alt="Jeya Prakash B"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
            />
          </div>

          {/* Badge */}
          <div style={{
            position: 'absolute', bottom: -16, right: -16,
            background: 'var(--bg3)', border: '1px solid var(--border2)',
            borderRadius: 12, padding: '0.75rem 1rem', fontSize: '0.8rem',
            fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem', whiteSpace: 'nowrap',
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--green)', display: 'inline-block' }} />
            Open to Work
          </div>
        </div>
      </div>
    </section>
  )
}
