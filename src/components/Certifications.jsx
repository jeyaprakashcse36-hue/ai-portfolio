const certs = [
  { icon: '🤖', name: 'AI & Machine Learning', issuer: 'TCS – ILP' },
  { icon: '🐍', name: 'Python FY25', issuer: 'TCS – ILP' },
  { icon: '💻', name: 'Regular Python FY25', issuer: 'TCS – ILP' },
  { icon: '🎓', name: 'Python Programming', issuer: 'Udemy' },
  { icon: '☁️', name: 'Cloud Computing', issuer: 'NPTEL' },
  { icon: '✨', name: 'Generative AI', issuer: 'TCS' },
  { icon: '📊', name: 'AI and Data Analytics', issuer: 'Online' },
  { icon: '🗃️', name: 'SQL & RDBMS', issuer: 'Online' },
]

const sectionStyle = { padding: '6rem 3rem', maxWidth: 1100, margin: '0 auto' }

export default function Certifications() {
  return (
    <section id="certifications" style={sectionStyle}>
      <div className="fade-in">
        <p style={{ fontSize:'0.75rem', fontWeight:600, letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--accent2)', marginBottom:'0.75rem' }}>Credentials</p>
        <h2 style={{ fontFamily:'Space Grotesk', fontSize:'clamp(1.75rem,3vw,2.5rem)', fontWeight:700, color:'var(--text)', lineHeight:1.2, marginBottom:'2rem' }}>Certifications</h2>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:'1rem' }}>
        {certs.map((c, i) => (
          <div
            key={c.name}
            className="fade-in"
            style={{
              background:'var(--surface)', border:'1px solid var(--border)', borderRadius:12,
              padding:'1.25rem 1.5rem', display:'flex', alignItems:'flex-start', gap:'1rem',
              transition:'all 0.25s', transitionDelay:`${i*0.05}s`, cursor:'default',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(45,212,191,0.4)'; e.currentTarget.style.transform='translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.transform='translateY(0)' }}
          >
            <div style={{ width:36, height:36, borderRadius:8, background:'rgba(45,212,191,0.1)', border:'1px solid rgba(45,212,191,0.2)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.1rem', flexShrink:0 }}>
              {c.icon}
            </div>
            <div>
              <div style={{ fontSize:'0.85rem', fontWeight:500, color:'var(--text)', lineHeight:1.4 }}>{c.name}</div>
              <div style={{ fontSize:'0.75rem', color:'var(--teal)', marginTop:'0.2rem' }}>{c.issuer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
