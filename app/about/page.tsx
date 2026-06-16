import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — The Trust Frontier',
  description: 'What The Trust Frontier is, and the person behind it.',
};

export default function About() {
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
          <li><Link href="/work">Work</Link></li>
          <li><Link href="/about" className="active">About</Link></li>
        </ul>
        <Link href="/blog" className="nav-cta">Read →</Link>
      </nav>

      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="page-eyebrow">About</div>
          <h1>We are at the frontier.<br />The machine is not going to tell you.</h1>
          <p>The Trust Frontier is a publication about what happens when we outsource our judgment faster than we understand the consequences — and why that question can&apos;t wait.</p>
        </div>
      </div>

      {/* ABOUT CONTENT */}
      <div className="about-sec">
        <h2>The project</h2>
        <p>
          Count how many times you asked something to your AI today. Now count how many times you asked the accountable person instead. How many times did your AI tell you that you were wrong?
        </p>
        <p>
          I started this publication because we are outsourcing our judgment faster than we can understand the consequences. The conversation about AI splits into two: blind optimism or existential fear. But there is a more urgent space in between — not whether AI works, but what trusting it without scrutiny is doing to us, to how we reason, defer, and decide.
        </p>
        <p>
          The Trust Frontier is a chronicle of that transition. Not a tech news site. A compass for those who haven&apos;t yet noticed that 24/7 convenience comes with a cognitive debt we haven&apos;t started to account for.
        </p>

        <h2>What gets covered</h2>
        <p>
          The publication opens with a four-part series on AI trust: why we believe AI is neutral when it isn&apos;t, what the black-box architecture means for accountability, the cognitive effects of dependency, and what regulation has (and hasn&apos;t) done to address any of it.
        </p>
        <p>
          From there, the coverage expands to adjacent territory where trust and technology collide: post-quantum cryptography, surveillance infrastructure, biometric data, digital privacy, and the geopolitics of the systems we all depend on — but rarely examine.
        </p>
        <p>
          The lens is always: <em>what is actually happening, why does it matter, and what should a thoughtful person understand about it?</em>
        </p>

        <h2>How it&apos;s written</h2>
        <p>
          Every piece is grounded in peer-reviewed research, primary sources, and original analysis. No jargon walls. No fear-mongering. Written for curious readers, not specialists — the kind of article you&apos;d want to share with someone who cares about the world but doesn&apos;t have an engineering background.
        </p>
        <p>
          No sponsored content. No paywalls. No algorithmic pressure to publish on a schedule. Each article arrives when it&apos;s actually finished.
        </p>
        <p>
          AI tools are used to assist in editing and formatting. All arguments, source selection, and analytical judgments are the author&apos;s own, drawn from original research.
        </p>

        <div className="about-profile">
          <div className="about-av">A</div>
          <div>
            <div className="about-profile-name">Ariadna Gómez-Zambrano</div>
            <div className="about-profile-role">Founder · The Trust Frontier</div>
            <div className="about-profile-bio">
              Electrical &amp; Computer Engineering student at Princeton University (Class of 2029), concentrating in Quantum Information &amp; Applied Physics. IBM Qiskit Advocate and Global Summer School graduate. TechnovationGirls European Regional Winner. Google Generation Scholar &apos;25. TEDx speaker. Co-founder &amp; CTO of AryZam, a post-quantum cryptographic risk intelligence company. Speaks English and Spanish natively; completing Princeton in Beijing in Mandarin.
            </div>
            <div className="about-tags" style={{marginTop:'1rem'}}>
              {['Princeton ECE 2029','Quantum Information','IBM Qiskit Advocate','AI Policy','Post-Quantum Cryptography','TEDx Speaker','Google Scholar \'25'].map(t => (
                <span key={t} className="about-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>

        <h2 style={{marginTop:'3rem'}}>Also at Princeton</h2>
        <p>
          Trip Officer for Princeton Students in Quantum. Outreach Co-Chair for Princeton Women in Entrepreneurship. Director of Administration for Princeton Model Congress. Research interests sit at the intersection of quantum commercialization, AI and quantum policy, and the entrepreneurial path from lab to market.
        </p>

        <h2>Get in touch</h2>
        <p>
          To discuss something you read here, suggest a topic, or collaborate — reach out at{' '}
          <a href="mailto:ari.zam@princeton.edu" style={{color:'var(--teal)', textDecoration:'underline', textUnderlineOffset:'2px'}}>
            ari.zam@princeton.edu
          </a>.
        </p>
        <p>
          Each piece also appears in Spanish at the end of each publication.
        </p>
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
