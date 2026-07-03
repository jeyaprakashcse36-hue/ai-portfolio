const projects = [
  {
    icon: '🤖',
    iconBg: 'rgba(108,99,255,0.12)',
    iconBorder: 'rgba(108,99,255,0.2)',
    title: 'AI Batch Migration Validator',
    desc: 'Python-based validation framework comparing ESP scheduling data against IWS after mainframe migration. Automated accuracy checks across thousands of job definitions.',
    tags: ['Python', 'IWS', 'Automation', 'TCS'],
  },
  {
    icon: '📲',
    iconBg: 'rgba(45,212,191,0.12)',
    iconBorder: 'rgba(45,212,191,0.2)',
    title: 'Email Alerts → WhatsApp',
    desc: 'Integration solution bridging email notification systems with WhatsApp using API protocols. Unified communication channels for cross-platform accessibility.',
    tags: ['WhatsApp API', 'Email Protocol', 'Integration'],
  },
  {
    icon: '🎓',
    iconBg: 'rgba(244,114,182,0.12)',
    iconBorder: 'rgba(244,114,182,0.2)',
    title: 'Intra-College Social Platform',
    desc: 'Web-based social networking platform for college students and staff. Secure, scalable database supporting networking, resource sharing, and career exploration. IEEE-published.',
    tags: ['Web Dev', 'Database', 'IEEE'],
  },
  {
    icon: '⚡',
    iconBg: 'rgba(251,191,36,0.12)',
    iconBorder: 'rgba(251,191,36,0.2)',
    title: 'Mastercraft Prompt Engineering',
    desc: 'Designed and optimized LLM prompts for TCS\'s internal COBOL-to-Java code migration tool, improving conversion accuracy for large legacy codebases at enterprise scale.',
    tags: ['LLM', 'Prompt Eng', 'COBOL→Java'],
  },
  {
    icon: '🚀',
    iconBg: 'rgba(52,211,153,0.12)',
    iconBorder: 'rgba(52,211,153,0.2)',
    title: 'Airtribe AI Projects',
    desc: 'GenAI exploration projects built through Airtribe learning programs — covering RAG systems, AI agents, LangChain workflows, and applied NLP experiments.',
    tags: ['RAG', 'LangChain', 'AI Agents'],
  },
  {
    icon: '✨',
    iconBg: 'rgba(255,255,255,0.04)',
    iconBorder: 'rgba(255,255,255,0.08)',
    title: 'Coming Soon',
    desc: 'Next GenAI project — FastAPI + RAG + LangChain demo. Building in progress.',
    tags: ['FastAPI', 'RAG', '2025'],
    dashed: true,
  },
]

const sectionStyle = { padding: '6rem 3rem', maxWidth: 1100, margin: '0 auto' }

export default function Projects() {
  return (
    <section id="projects" style={sectionStyle}>
      <div className="fade-in">
        <p style={{ fontSize:'0.75rem', fontWeight:600, letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--accent2)', marginBottom:'0.75rem' }}>Portfolio</p>
        <h2 style={{ fontFamily:'Space Grotesk', fontSize:'clamp(1.75rem,3vw,2.5rem)', fontWeight:700, color:'var(--text)', lineHeight:1.2, marginBottom:'1rem' }}>Projects</h2>
        <p style={{ color:'var(--text2)', fontSize:'1.05rem', maxWidth:540, lineHeight:1.8, marginBottom:'3rem' }}>
          A mix of professional AI tooling and academic explorations that showcase applied engineering.
        </p>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'1.5rem' }}>
        {projects.map((p, i) => (
          <div
            key={p.title}
            className={`project-card fade-in${p.dashed ? ' dashed' : ''}`}
            style={{ transitionDelay:`${i*0.1}s`, opacity: p.dashed ? 0.6 : undefined, borderStyle: p.dashed ? 'dashed' : 'solid' }}
          >
            <div style={{ width:48, height:48, borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.5rem', marginBottom:'1.25rem', background:p.iconBg, border:`1px solid ${p.iconBorder}` }}>
              {p.icon}
            </div>
            <div style={{ fontFamily:'Space Grotesk', fontSize:'1.05rem', fontWeight:600, color:'var(--text)', marginBottom:'0.5rem' }}>{p.title}</div>
            <div style={{ fontSize:'0.875rem', color:'var(--text2)', lineHeight:1.7, marginBottom:'1.25rem', fontStyle: p.dashed ? 'italic' : 'normal' }}>{p.desc}</div>
            <div style={{ display:'flex', flexWrap:'wrap', gap:'0.4rem' }}>
              {p.tags.map(t => (
                <span key={t} style={{ padding:'0.2rem 0.65rem', borderRadius:'999px', fontSize:'0.7rem', fontWeight:500, background:'rgba(108,99,255,0.12)', color:'var(--accent2)', border:'1px solid rgba(108,99,255,0.2)' }}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
