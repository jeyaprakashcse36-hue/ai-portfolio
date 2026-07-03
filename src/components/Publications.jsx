const pubs = [
  {
    badge: '📄',
    year: 'IEEE · 2026 · TCS Tactics Club',
    title: 'AI-Assisted Framework for Operational Validation of Mainframe Batch Migration from ESP to IWS',
    desc: 'Presents an AI-driven validation approach for large-scale batch scheduling migration from Enterprise Scheduling Platform (ESP) to IBM Workload Scheduler (IWS), ensuring operational integrity throughout mainframe modernization.',
  },
  {
    badge: '📝',
    year: 'IEEE Conference · 2023',
    title: 'Intra-College Web Application — Social Networking Platform',
    desc: 'Research on the design and implementation of a secure, scalable intra-college social platform. Covered database architecture, user authentication, networking features, resource sharing, and career exploration for academic communities.',
  },
]

const sectionStyle = { padding: '6rem 3rem', maxWidth: 1100, margin: '0 auto' }

export default function Publications() {
  return (
    <section id="publications" style={sectionStyle}>
      <div className="fade-in">
        <p style={{ fontSize:'0.75rem', fontWeight:600, letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--accent2)', marginBottom:'0.75rem' }}>Research</p>
        <h2 style={{ fontFamily:'Space Grotesk', fontSize:'clamp(1.75rem,3vw,2.5rem)', fontWeight:700, color:'var(--text)', lineHeight:1.2, marginBottom:'1rem' }}>IEEE Publications</h2>
        <p style={{ color:'var(--text2)', fontSize:'1.05rem', maxWidth:540, lineHeight:1.8, marginBottom:'3rem' }}>
          Peer-reviewed research distinguishing this profile in the AI engineering landscape.
        </p>
      </div>

      {pubs.map((p, i) => (
        <div
          key={p.title}
          className="fade-in"
          style={{
            background:'var(--surface)', border:'1px solid var(--border)', borderRadius:20,
            padding:'2rem', marginBottom:'1.5rem', display:'flex', gap:'1.5rem', alignItems:'flex-start',
            transition:'border-color 0.3s', transitionDelay:`${i*0.15}s`,
          }}
          onMouseEnter={e => e.currentTarget.style.borderColor='rgba(244,114,182,0.4)'}
          onMouseLeave={e => e.currentTarget.style.borderColor='var(--border)'}
        >
          <div style={{ flexShrink:0, width:56, height:56, borderRadius:12, background:'rgba(244,114,182,0.1)', border:'1px solid rgba(244,114,182,0.2)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.5rem' }}>
            {p.badge}
          </div>
          <div>
            <div style={{ fontSize:'0.75rem', fontWeight:600, color:'var(--pink)', letterSpacing:'0.08em', marginBottom:'0.4rem' }}>{p.year}</div>
            <div style={{ fontFamily:'Space Grotesk', fontSize:'1rem', fontWeight:600, color:'var(--text)', lineHeight:1.4, marginBottom:'0.5rem' }}>{p.title}</div>
            <div style={{ fontSize:'0.875rem', color:'var(--text2)', lineHeight:1.7 }}>{p.desc}</div>
          </div>
        </div>
      ))}
    </section>
  )
}
