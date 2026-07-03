const jobs = [
  {
    period: '2025 – Present',
    role: 'Batch Scheduler',
    company: 'Tata Consultancy Services · Enbridge Inc.',
    dotColor: 'var(--teal)',
    dotShadow: '0 0 12px var(--teal)',
    points: [
      'Scheduled and managed Z/OS, SAP, Cyclic, and Event trigger jobs using IBM Workload Scheduler (IWS) for large-scale migration at Enbridge Inc.',
      'Developed Python scripts to validate and compare ESP data against IWS data, ensuring migration accuracy.',
      'Debugged mainframe and non-mainframe scheduling issues, significantly reducing scheduling errors.',
    ],
  },
  {
    period: '2024 – 2025',
    role: 'Prompt Engineer',
    company: 'Tata Consultancy Services · Mastercraft Tool',
    dotColor: 'var(--accent)',
    dotShadow: '0 0 12px var(--accent)',
    points: [
      "Contributed to Mastercraft — TCS's internal LLM-based tool converting mainframe languages (COBOL, Natural, PHP) into Java code.",
      'Designed and tested language model prompts to improve migration accuracy and efficiency.',
      'Applied supervised and unsupervised ML algorithms in hands-on mini-projects to achieve classification objectives.',
    ],
  },
]

const sectionStyle = { padding: '6rem 3rem', maxWidth: 1100, margin: '0 auto' }

export default function Experience() {
  return (
    <section id="experience" style={sectionStyle}>
      <div className="fade-in">
        <p style={{ fontSize:'0.75rem', fontWeight:600, letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--accent2)', marginBottom:'0.75rem' }}>Career</p>
        <h2 style={{ fontFamily:'Space Grotesk', fontSize:'clamp(1.75rem,3vw,2.5rem)', fontWeight:700, color:'var(--text)', lineHeight:1.2, marginBottom:'3rem' }}>Work Experience</h2>
      </div>

      <div style={{ position:'relative', paddingLeft:'2rem' }}>
        <div className="timeline-line" />
        {jobs.map((job, i) => (
          <div key={job.role} className="fade-in" style={{ position:'relative', marginBottom:'3rem', paddingLeft:'1.5rem', transitionDelay:`${i*0.15}s` }}>
            <div style={{ position:'absolute', left:'-2rem', top:'0.25rem', width:12, height:12, borderRadius:'50%', background:job.dotColor, border:'2px solid var(--bg)', boxShadow:job.dotShadow }} />
            <div style={{ fontSize:'0.75rem', fontWeight:600, color:'var(--teal)', letterSpacing:'0.08em', textTransform:'uppercase', marginBottom:'0.4rem' }}>{job.period}</div>
            <div style={{ fontFamily:'Space Grotesk', fontSize:'1.2rem', fontWeight:600, color:'var(--text)', marginBottom:'0.25rem' }}>{job.role}</div>
            <div style={{ fontSize:'0.9rem', color:'var(--text2)', marginBottom:'1rem' }}>{job.company}</div>
            <ul style={{ listStyle:'none', color:'var(--text2)', fontSize:'0.95rem', lineHeight:1.7 }}>
              {job.points.map((p, j) => (
                <li key={j} style={{ padding:'0.3rem 0', paddingLeft:'1.2rem', position:'relative' }}>
                  <span style={{ position:'absolute', left:0, color:'var(--accent2)', fontSize:'0.7rem', top:'0.45rem' }}>▸</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
