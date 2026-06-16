import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Writing — The Trust Frontier',
  description: 'Research-driven writing on AI, trust, and the technologies reshaping our world.',
};

const published = [
  {
    tag: 'Trust & AI · Part 1 of 4',
    title: 'The Yes-Man in the Machine',
    subtitle: 'Why your AI is not the neutral expert you think it is.',
    excerpt: 'AI systems have become the first stop for medical questions, financial decisions, and emotional support. 85% of students rate AI tutoring over human tutors. 48% of heavy AI users hold doctorates. The explanation is not in the technology — it is in us.',
    date: 'May 2026',
    readTime: '10 min',
    status: 'published',
  },
  {
    tag: 'Welcome',
    title: 'Welcome to The Trust Frontier',
    subtitle: null,
    excerpt: 'A frontier is the edge of known territory. Trust is the currency that moves across that frontier. Beyond it, things are unmapped — no institutions, no accountability, no rules yet written. That is exactly where we are with AI right now.',
    date: 'May 2026',
    readTime: '4 min',
    status: 'published',
  },
];

const upcoming = [
  {
    tag: 'Trust & AI · Part 2 of 4',
    title: 'The Black Box We Believe In',
    subtitle: 'When AI fails in hospitals, courtrooms, and customer service — who is held responsible?',
    excerpt: 'A look at the Air Canada chatbot ruling, algorithmic medical errors, and the growing divide between US and EU regulation of AI accountability.',
    date: 'Coming next',
    readTime: '~9 min',
  },
  {
    tag: 'Trust & AI · Part 3 of 4',
    title: 'The Cognitive Debt',
    subtitle: 'What dependency on AI is doing to how we reason — and who carries the cost.',
    excerpt: 'A 2025 study of 666 participants found that users aged 17–25 showed the highest AI dependency and the lowest critical thinking scores. What happens when that generation enters professional life?',
    date: 'Coming soon',
    readTime: '~8 min',
  },
  {
    tag: 'Trust & AI · Part 4 of 4',
    title: 'The Regulation Gap',
    subtitle: 'The EU has rules. The US has almost none. The machines keep learning.',
    excerpt: 'Colorado became the first US state to pass a comprehensive AI law in May 2024. It was replaced by a narrower law before it ever took effect. What does it mean to build dependency on systems nobody is currently obligated to make accountable?',
    date: 'Coming soon',
    readTime: '~10 min',
  },
];

export default function Blog() {
  return (
    <div>
      {/* NAV */}
      <nav>
        <Link href="/" className="nav-logo">
          <span className="nav-logo-dot" />
          The Trust Frontier
        </Link>
        <ul className="nav-links">
          <li><Link href="/blog" className="active">Writing</Link></li>
          <li><Link href="/work">Work</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
        <Link href="/blog" className="nav-cta">Read →</Link>
      </nav>

      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="page-eyebrow">Writing</div>
          <h1>Research-driven writing on AI, trust, and the technologies reshaping our world.</h1>
          <p>Opening with a four-part series on why we believe AI is neutral, what that belief is costing us, and who is accountable when it goes wrong.</p>
        </div>
      </div>

      {/* PUBLISHED */}
      <div className="blog-sec">
        <div style={{marginBottom:'0.25rem'}}>
          <div style={{fontSize:'0.68rem', fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'1.5rem'}}>
            Published
          </div>
          <div className="blog-grid">
            {published.map((post, i) => (
              <a key={i} href="#" className="blog-item">
                <div>
                  <div className="blog-item-tag">{post.tag}</div>
                  <div className="blog-item-title">{post.title}</div>
                  {post.subtitle && (
                    <div style={{fontSize:'0.85rem', fontStyle:'italic', color:'var(--muted)', marginBottom:'0.4rem'}}>{post.subtitle}</div>
                  )}
                  <div className="blog-item-excerpt">{post.excerpt}</div>
                </div>
                <div className="blog-item-meta">{post.date}<br />{post.readTime} read</div>
              </a>
            ))}
          </div>
        </div>

        {/* UPCOMING */}
        <div style={{marginTop:'3.5rem'}}>
          <div style={{fontSize:'0.68rem', fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--faint)', marginBottom:'1.5rem'}}>
            Coming up · The Trust &amp; AI series
          </div>
          <div className="blog-grid">
            {upcoming.map((post, i) => (
              <div key={i} className="blog-item" style={{opacity:0.6, cursor:'default'}}>
                <div>
                  <div className="blog-item-tag">{post.tag}</div>
                  <div className="blog-item-title">{post.title}</div>
                  {post.subtitle && (
                    <div style={{fontSize:'0.85rem', fontStyle:'italic', color:'var(--muted)', marginBottom:'0.4rem'}}>{post.subtitle}</div>
                  )}
                  <div className="blog-item-excerpt">{post.excerpt}</div>
                </div>
                <div className="blog-item-meta">{post.date}<br />{post.readTime}</div>
              </div>
            ))}
          </div>
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
