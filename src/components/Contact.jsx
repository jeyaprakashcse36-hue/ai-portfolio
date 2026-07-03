const links = [
  {
    href: 'mailto:jeyaprakashcse36@gmail.com',
    label: 'jeyaprakashcse36@gmail.com',
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/>
      </svg>
    ),
  },
  {
    href: 'tel:+916383993803',
    label: '+91 63839 93803',
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.81a19.79 19.79 0 01-3.07-8.64A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
      </svg>
    ),
  },
  {
    href: 'https://linkedin.com/in/jeya-prakash-a483b7277',
    label: 'LinkedIn',
    target: '_blank',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    href: 'https://github.com/',
    label: 'GitHub',
    target: '_blank',
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
      </svg>
    ),
  },
]

const sectionStyle = { padding: '6rem 3rem', maxWidth: 1100, margin: '0 auto' }

export default function Contact() {
  return (
    <section id="contact" style={sectionStyle}>
      <div
        className="fade-in"
        style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:20, padding:'3rem', textAlign:'center', position:'relative', overflow:'hidden' }}
      >
        <div className="contact-glow" />
        <p style={{ fontSize:'0.75rem', fontWeight:600, letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--accent2)', marginBottom:'0.75rem' }}>Get in Touch</p>
        <h2 style={{ fontFamily:'Space Grotesk', fontSize:'clamp(1.75rem,3vw,2.5rem)', fontWeight:700, color:'var(--text)', marginBottom:'1rem' }}>Let's Build Something</h2>
        <p style={{ color:'var(--text2)', fontSize:'1.05rem', maxWidth:480, margin:'0 auto', lineHeight:1.8 }}>
          Open to AI/ML engineering roles, GenAI projects, and research collaborations. Based in Chennai, India.
        </p>
        <div style={{ display:'flex', justifyContent:'center', gap:'1rem', flexWrap:'wrap', marginTop:'2rem' }}>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.target}
              rel={l.target ? 'noopener noreferrer' : undefined}
              style={{ display:'inline-flex', alignItems:'center', gap:'0.6rem', padding:'0.75rem 1.5rem', borderRadius:'999px', border:'1px solid var(--border2)', color:'var(--text)', textDecoration:'none', fontSize:'0.9rem', fontWeight:500, transition:'all 0.25s', background:'var(--surface)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='var(--accent2)'; e.currentTarget.style.color='var(--accent2)'; e.currentTarget.style.transform='translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border2)'; e.currentTarget.style.color='var(--text)'; e.currentTarget.style.transform='translateY(0)' }}
            >
              {l.icon}
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
