'use client';
import Link from 'next/link';

const projects = [
  {
    num: '01',
    title: 'AryZam — Post-Quantum Risk Intelligence',
    desc: 'A quantum cryptographic risk scanner that inventories every cryptographic asset across cloud, code, and identity systems — scored by quantum risk and aligned to DORA and NIS2. The only solution priced and built for mid-market firms under EU regulation. Co-founded as CTO.',
    status: 'live',
    statusLabel: 'Live · aryzam.com',
    link: 'https://aryzam.com',
    tags: ['Quantum Computing','Cryptography','DORA/NIS2','Startup','Princeton Research'],
  },
  {
    num: '02',
    title: 'The Trust & AI Series',
    desc: 'A four-part research series investigating AI trust: why we believe AI is neutral when it isn\'t, what the black-box architecture means for accountability, the cognitive effects of dependency, and the regulatory gap between the US and EU.',
    status: 'live',
    statusLabel: 'Part 1 published',
    link: null,
    tags: ['AI Trust','Cognitive Science','Policy','Research Writing'],
  },
  {
    num: '03',
    title: 'Quantum Scoring Engine',
    desc: 'The physics-based 0–100 risk scoring engine underlying AryZam. Computes asset-level quantum risk from algorithm vulnerability, qubit proximity to breaking threshold, HNDL (Harvest Now, Decrypt Later) exposure window, and temporal urgency to regulatory deadline.',
    status: 'live',
    statusLabel: 'In production',
    link: 'https://aryzam.com',
    tags: ['Quantum Physics','Python','Scoring','Qiskit'],
  },
  {
    num: '04',
    title: 'Post-Quantum Migration Playbook',
    desc: 'An open-source practical guide for organisations navigating the transition from classical to post-quantum cryptographic standards (NIST FIPS 203/204/205). Covering cloud, identity, and application layers — written so a security team can act on it without a PhD.',
    status: 'soon',
    statusLabel: 'Coming 2026',
    link: null,
    tags: ['Open Source','PQC','NIST','Enterprise Security'],
  },
  {
    num: '05',
    title: 'AI Cognitive Dependency Research',
    desc: 'Primary research into how AI dependency affects critical thinking, professional judgment, and decision quality across different education and age groups — building on the empirical work behind the Trust & AI series.',
    status: 'research',
    statusLabel: 'Research phase',
    link: null,
    tags: ['Cognitive Science','Research','Princeton','AI Dependency'],
  },
  {
    num: '06',
    title: 'The Trust Frontier · Spanish Edition',
    desc: 'All writing from The Trust Frontier is published in Spanish at the end of each piece. A standalone Spanish track is in development for readers in Spain and LATAM, reflecting the publication\'s bilingual roots.',
    status: 'live',
    statusLabel: 'Bilingual · ongoing',
    link: null,
    tags: ['Spanish','LATAM','EU','Bilingual'],
  },
];

export default function Work() {
  return (
    <div>
      {/* NAV */}
      <nav>
        <Link href="/" className="nav-logo">
          <span className="nav-logo-dot" />
          The Trust Frontier
        </Link>
        <ul className="nav-links">
          <li><Link href="/blog">Writing</Link></li>
          <li><Link href="/work" className="active">Work</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
        <Link href="/blog" className="nav-cta">Read →</Link>
      </nav>

      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="page-eyebrow">Work</div>
          <h1>Projects and research at the intersection of technology, trust, and society.</h1>
          <p>Beyond the writing — applied ventures, open-source tools, and original research being built alongside The Trust Frontier.</p>
        </div>
      </div>

      {/* WORK GRID */}
      <div className="work-sec">
        <div className="work-grid">
          {projects.map((p, i) => (
            <div
              key={i}
              className="work-card"
              style={{cursor: p.link ? 'pointer' : 'default'}}
              onClick={p.link ? () => window.open(p.link!, '_blank') : undefined}
            >
              <div className="work-card-num">{p.num}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div style={{display:'flex', flexWrap:'wrap', gap:'0.4rem', marginTop:'0.25rem'}}>
                {p.tags.map(tag => (
                  <span key={tag} style={{
                    fontSize:'0.65rem', fontWeight:500,
                    color:'var(--navy)', background:'#f0f2f8',
                    border:'1px solid rgba(13,27,62,0.14)',
                    padding:'0.18rem 0.6rem', borderRadius:'4px'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
              <span className={`work-card-status status-${p.status}`}>{p.statusLabel}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <Link href="/" className="ft-logo">
          <span className="ft-logo-dot" />
          The Trust Frontier
        </Link>
        <nav className="ft-links">
          <Link href="/blog">Writing</Link>
          <Link href="/work">Work</Link>
          <Link href="/about">About</Link>
          <a href="mailto:ari.zam@princeton.edu">Contact</a>
        </nav>
        <p className="ft-copy">© 2026 The Trust Frontier · By Ariadna Gómez-Zambrano · thetrustfrontier.com</p>
      </footer>
    </div>
  );
}
