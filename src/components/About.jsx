const skills = [
  { label: 'Generative AI', type: 'ai' },
  { label: 'Prompt Engineering', type: 'ai' },
  { label: 'LLM', type: 'ai' },
  { label: 'Machine Learning', type: 'ai' },
  { label: 'Python', type: 'lang' },
  { label: 'SQL', type: 'lang' },
  { label: 'IBM Workload Scheduler', type: 'tools' },
  { label: 'Mainframe / COBOL', type: 'tools' },
  { label: 'Z/OS', type: 'tools' },
  { label: 'Batch Scheduling', type: 'tools' },
  { label: 'Cloud Computing', type: 'cloud' },
  { label: 'SAP Integration', type: 'lang' },
  { label: 'Gen AI Tools', type: 'ai' },
  { label: 'MS Excel', type: 'cloud' },
]

const sectionStyle = { padding: '6rem 3rem', maxWidth: 1100, margin: '0 auto' }

export default function About() {
  return (
    <section id="about" style={sectionStyle}>
      <div className="fade-in">
        <p style={{ fontSize:'0.75rem', fontWeight:600, letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--accent2)', marginBottom:'0.75rem' }}>Who I Am</p>
        <h2 style={{ fontFamily:'Space Grotesk', fontSize:'clamp(1.75rem,3vw,2.5rem)', fontWeight:700, color:'var(--text)', lineHeight:1.2, marginBottom:'1rem' }}>Engineer. Researcher. Builder.</h2>
        <p style={{ color:'var(--text2)', fontSize:'1.05rem', maxWidth:540, lineHeight:1.8, marginBottom:'3rem' }}>
          A Systems Engineer at TCS Chennai who bridges the gap between legacy mainframe systems and modern AI—through prompts, Python, and purpose.
        </p>
      </div>

      <div className="fade-in" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'3rem', alignItems:'start', transitionDelay:'0.15s' }}>
        <div>
          <div style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:20, padding:'2rem', marginBottom:'1.5rem' }}>
            <h3 style={{ fontFamily:'Space Grotesk', fontSize:'1.1rem', fontWeight:600, marginBottom:'1rem', color:'var(--text)' }}>🎓 Education</h3>
            <p style={{ color:'var(--text2)', fontSize:'0.9rem', lineHeight:1.7 }}>
              <strong style={{ color:'var(--text)' }}>B.E. Computer Science Engineering</strong><br />
              Sri Sairam Engineering College<br />
              CGPA: 8.39 &nbsp;·&nbsp; 2024
            </p>
          </div>
          <div style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:20, padding:'2rem' }}>
            <h3 style={{ fontFamily:'Space Grotesk', fontSize:'1.1rem', fontWeight:600, marginBottom:'1rem', color:'var(--text)' }}>🌐 Languages</h3>
            <div style={{ display:'flex', gap:'0.5rem', flexWrap:'wrap', marginTop:'0.5rem' }}>
              {['English','Tamil','Hindi'].map(l => <span key={l} className="skill-tag skill-ai">{l}</span>)}
            </div>
          </div>
        </div>

        <div>
          <h3 style={{ fontFamily:'Space Grotesk', fontSize:'1.1rem', fontWeight:600, color:'var(--text)', marginBottom:'1rem' }}>Technical Skills</h3>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'0.6rem', marginTop:'0.5rem' }}>
            {skills.map(s => (
              <span key={s.label} className={`skill-tag skill-${s.type}`}>{s.label}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
