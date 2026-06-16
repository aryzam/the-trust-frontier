'use client';
import { useState } from 'react';
import Link from 'next/link';

type Lang = 'en' | 'es';
const tr = (lang: Lang, en: string, es: string) => lang === 'en' ? en : es;

// TODO: swap SUBSCRIBE_URL for your own endpoint once thetrustfrontier.com is live
const SUBSCRIBE_URL = 'https://substack.com/@thetrustfrontier';

export default function Home() {
  const [lang, setLang] = useState<Lang>('en');

  return (
    <div>
      {/* NAV */}
      <nav>
        <Link href="/" className="nav-logo">
          <span className="nav-logo-dot" />
          The Trust Frontier
        </Link>
        <ul className="nav-links">
          <li><Link href="/blog">{tr(lang, 'Writing', 'Artículos')}</Link></li>
          <li><Link href="/work">{tr(lang, 'Work', 'Proyectos')}</Link></li>
          <li><Link href="/about">{tr(lang, 'About', 'Sobre mí')}</Link></li>
        </ul>
        <div className="nav-right">
          <div className="lang-toggle">
            <button className={`lang-btn${lang === 'en' ? ' active' : ''}`} onClick={() => setLang('en')}>EN</button>
            <button className={`lang-btn${lang === 'es' ? ' active' : ''}`} onClick={() => setLang('es')}>ES</button>
          </div>
          <Link href="/blog" className="nav-cta">{tr(lang, 'Read', 'Leer')} →</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-eyebrow">AI · Trust · Technology · Society</div>
        <h1>
          {tr(lang, 'We are outsourcing our judgment', 'Estamos delegando nuestro juicio')}<br />
          <em>{tr(lang, 'faster than we understand the consequences.', 'más rápido de lo que entendemos las consecuencias.')}</em>
        </h1>
        <p className="hero-sub">
          {tr(lang,
            'Research-driven writing on what trusting AI without scrutiny is doing to us — to how we reason, defer, and decide.',
            'Escritura basada en investigación sobre lo que le hace a nuestra forma de razonar, delegar y decidir el hecho de confiar en la IA sin escrutinio.'
          )}
        </p>
        <div className="hero-btns">
          <Link href="/blog" className="btn-hero-p">{tr(lang, 'Start reading', 'Comenzar a leer')} →</Link>
          <Link href="/about" className="btn-hero-o">{tr(lang, 'About this project', 'Sobre este proyecto')}</Link>
        </div>
      </section>

      {/* TOPICS BAND */}
      <div className="topics-band">
        <span className="topics-label">{tr(lang, 'Covering', 'Temas')}</span>
        {['AI & Trust', 'Cognitive Science', 'Regulation', 'Quantum Risk', 'Surveillance', 'Digital Privacy'].map(tp => (
          <span key={tp} className="topic-pill">{tp}</span>
        ))}
      </div>

      {/* MISSION — above articles */}
      <section className="mission-sec">
        <div>
          <div className="mission-label">{tr(lang, 'The mission', 'La misión')}</div>
          <h2 className="mission-title">
            {tr(lang, 'Not whether AI works.', 'No si la IA funciona.')}<br />
            {tr(lang, 'What trusting it is doing to us.', 'Sino qué nos hace confiar en ella.')}
          </h2>
          <p className="mission-body">
            {tr(lang,
              'The conversation about AI splits into two: blind optimism or existential fear. But there is a more urgent space in between. This publication looks at AI trust through research, through behavior, and through the experience of living inside these systems while they are still being built.',
              'La conversación sobre la IA se divide en dos: optimismo ciego o miedo existencial. Pero hay un espacio más urgente en medio. Esta publicación analiza la confianza en la IA a través de la investigación, el comportamiento y la experiencia de vivir dentro de estos sistemas mientras aún se construyen.'
            )}
          </p>
          <p className="mission-body">
            {tr(lang,
              'The yes-man in the machine is agreeable by design, opaque by architecture, and indispensable by habit. Whether the trust we have placed in it reflects something AI has genuinely earned — or something we have gradually lost the capacity to question — is a problem worth taking seriously.',
              'El adulador en la máquina es complaciente por diseño, opaco por arquitectura e indispensable por hábito. Si la confianza que le hemos otorgado refleja algo genuinamente ganado — o algo que gradualmente hemos perdido la capacidad de cuestionar — es un problema que merece tomarse en serio.'
            )}
          </p>
          <div className="mission-pillars">
            {[
              { icon: '🔬', title: tr(lang, 'Research-driven', 'Basado en investigación'), desc: tr(lang, 'Every piece grounded in peer-reviewed studies, primary sources, and original analysis.', 'Cada artículo fundamentado en estudios revisados por pares, fuentes primarias y análisis original.') },
              { icon: '🌍', title: tr(lang, 'Accessible', 'Accesible'), desc: tr(lang, 'Written for curious people, not specialists. No jargon walls. No fear-mongering.', 'Escrito para personas curiosas, no especialistas. Sin jerga. Sin alarmismo.') },
              { icon: '⚖️', title: tr(lang, 'Independent', 'Independiente'), desc: tr(lang, 'No sponsors shaping what gets covered. No algorithmic pressure to publish on a schedule.', 'Sin patrocinadores que dicten el contenido. Sin presión algorítmica para publicar en fechas fijas.') },
            ].map((p, i) => (
              <div key={i} className="pillar">
                <div className="pillar-icon">{p.icon}</div>
                <div className="pillar-text"><h4>{p.title}</h4><p>{p.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
        <div className="mission-visual">
          <div className="mv-quote">
            {tr(lang,
              'A frontier is the edge of known territory. Trust is the currency that moves across that frontier. Beyond it, things are unmapped — no institutions, no accountability, no rules yet written.',
              'Una frontera es el borde del territorio conocido. La confianza es la moneda que se mueve a través de esa frontera. Más allá, las cosas no están cartografiadas — sin instituciones, sin responsabilidad, sin reglas aún escritas.'
            )}
          </div>
          <div className="mv-author">— {tr(lang, 'Welcome to The Trust Frontier', 'Bienvenida a The Trust Frontier')}</div>
          <div className="mv-stats">
            <div className="mv-stat"><div className="mv-stat-n">4</div><div className="mv-stat-l">{tr(lang, 'Part series on AI trust in progress', 'Serie de 4 partes sobre confianza en IA en curso')}</div></div>
            <div className="mv-stat"><div className="mv-stat-n">0</div><div className="mv-stat-l">{tr(lang, 'Paywalls or sponsored content — ever', 'Muros de pago o patrocinadores — nunca')}</div></div>
            <div className="mv-stat"><div className="mv-stat-n">85%*</div><div className="mv-stat-l">{tr(lang, 'Of students prefer AI tutoring over humans', 'De estudiantes prefieren tutoría IA a humana')}</div></div>
            <div className="mv-stat"><div className="mv-stat-n">48%</div><div className="mv-stat-l">{tr(lang, 'Of heaviest AI users hold doctorates', 'De usuarios intensivos de IA tienen doctorado')}</div></div>
          </div>
          <p style={{fontSize:'0.65rem',color:'rgba(255,255,255,0.35)',marginTop:'1rem',lineHeight:'1.5',position:'relative'}}>
            * {tr(lang,
              'Intelligent.com survey of 801 students, May 2023. Cited in "The Yes-Man in the Machine."',
              'Encuesta Intelligent.com a 801 estudiantes, mayo 2023. Citado en "El Adulador en la Máquina".'
            )}
          </p>
        </div>
      </section>

      {/* FEATURED POSTS */}
      <section className="featured-sec">
        <div className="sec-header">
          <div>
            <div className="sec-label">{tr(lang, 'Published writing', 'Artículos publicados')}</div>
            <h2 className="sec-title">{tr(lang, 'From The Trust Frontier', 'De The Trust Frontier')}</h2>
          </div>
          <Link href="/blog" className="sec-all">{tr(lang, 'All articles', 'Todos los artículos')} →</Link>
        </div>
        <div className="post-grid">
          <Link href="/blog" className="post-card post-card-hero">
            <div className="post-hero-text">
              <span className="post-tag">{tr(lang, 'Trust & AI · Part 1 of 4', 'Confianza & IA · Parte 1 de 4')}</span>
              <h3>{tr(lang, 'The Yes-Man in the Machine', 'El Adulador en la Máquina')}</h3>
              <p style={{fontStyle:'italic',color:'var(--muted)',fontSize:'0.9rem'}}>{tr(lang, 'Why your AI is not the neutral expert you think it is.', 'Por qué tu IA no es el experto neutral que crees.')}</p>
              <p>{tr(lang,
                'AI systems have become the first stop for medical questions, financial decisions, and emotional support. 85% of students rate AI tutoring over human tutors.* The explanation is not in the technology — it is in us.',
                'Los sistemas de IA se han convertido en la primera parada para preguntas médicas. El 85% de los estudiantes prefiere la tutoría IA a la humana.* La explicación no está en la tecnología — está en nosotros.'
              )}</p>
              <span className="post-meta">{tr(lang, 'May 2026', 'Mayo 2026')} · 10 min {tr(lang, 'read', 'lectura')}</span>
            </div>
            <div className="post-card-visual" data-glyph="⟁" />
          </Link>
          <Link href="/blog" className="post-card">
            <span className="post-tag">{tr(lang, 'Welcome', 'Bienvenida')}</span>
            <h3>{tr(lang, 'Welcome to The Trust Frontier', 'Bienvenida a The Trust Frontier')}</h3>
            <p>{tr(lang,
              'A frontier is the edge of known territory. Trust is the currency that moves across that frontier. That is exactly where we are with AI right now.',
              'Una frontera es el borde del territorio conocido. La confianza es la moneda que se mueve a través de esa frontera. Eso es exactamente donde estamos con la IA ahora mismo.'
            )}</p>
            <span className="post-meta">{tr(lang, 'May 2026', 'Mayo 2026')} · 4 min</span>
          </Link>
          <Link href="/blog" className="post-card">
            <span className="post-tag">{tr(lang, 'Trust & AI · Part 2 — Coming', 'Confianza & IA · Parte 2 — Próximamente')}</span>
            <h3>{tr(lang, 'The Black Box We Believe In', 'La Caja Negra en la que Creemos')}</h3>
            <p>{tr(lang,
              'When AI fails in hospitals, courtrooms, and customer service — who is held responsible?',
              'Cuando la IA falla en hospitales, juzgados y atención al cliente — quien es responsable?'
            )}</p>
            <span className="post-meta">{tr(lang, 'Coming soon', 'Próximamente')}</span>
          </Link>
        </div>
      </section>

      {/* TOPICS */}
      <section className="topics-sec">
        <div className="sec-label">{tr(lang, 'Coming coverage', 'Próximas entregas')}</div>
        <h2 style={{fontFamily:'var(--fd)',fontSize:'clamp(1.6rem,2.5vw,2.2rem)',fontWeight:800,letterSpacing:'-0.025em',color:'var(--ink)',marginTop:'0.4rem'}}>
          {tr(lang, 'Where this publication is heading', 'Hacia dónde va esta publicación')}
        </h2>
        <div className="topics-grid">
          {[
            { icon: '🤖', label: tr(lang, 'AI & Trust', 'IA & Confianza'), desc: tr(lang, 'How we defer, decide, and lose the capacity to question', 'Cómo delegamos y perdemos la capacidad de cuestionar'), count: tr(lang, '2 published · 2 coming', '2 publicados · 2 próximos') },
            { icon: '⚖️', label: tr(lang, 'Regulation & Policy', 'Regulación & Política'), desc: tr(lang, 'The laws and gaps shaping who is accountable for AI', 'Las leyes y vacíos que definen quién responde por la IA'), count: tr(lang, 'Coming soon', 'Próximamente') },
            { icon: '🔐', label: tr(lang, 'Cryptography & Privacy', 'Criptografía & Privacidad'), desc: tr(lang, 'Encryption, quantum risk, and private communication', 'Cifrado, riesgo cuántico y comunicación privada'), count: tr(lang, 'Coming soon', 'Próximamente') },
            { icon: '🧠', label: tr(lang, 'Cognitive Science', 'Ciencias Cognitivas'), desc: tr(lang, 'What AI dependency is doing to how we reason', 'Qué le hace la dependencia de la IA a nuestra razón'), count: tr(lang, 'Series ongoing', 'Serie en curso') },
            { icon: '👁️', label: tr(lang, 'Surveillance Tech', 'Tecnología de Vigilancia'), desc: tr(lang, 'The infrastructure of observation hiding in plain sight', 'La infraestructura de observación a plena vista'), count: tr(lang, 'Coming soon', 'Próximamente') },
            { icon: '⚛️', label: tr(lang, 'Quantum Computing', 'Computación Cuántica'), desc: tr(lang, 'The cryptographic revolution most people have not noticed', 'La revolución criptográfica que la mayoría no ha notado'), count: tr(lang, 'Coming soon', 'Próximamente') },
          ].map((tp, i) => (
            <Link key={i} href="/blog" className="topic-card">
              <div className="topic-card-icon">{tp.icon}</div>
              <h4>{tp.label}</h4>
              <p>{tp.desc}</p>
              <span className="topic-count">{tp.count}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter-sec">
        <div className="nl-inner">
          <div className="nl-label">{tr(lang, 'Stay informed', 'Mantente informado/a')}</div>
          <h2>{tr(lang, "Get the next piece when it's ready.", 'Recibe el próximo artículo cuando esté listo.')}</h2>
          <p className="nl-sub">
            {tr(lang,
              "No weekly digests, no spam. Each article arrives when it's actually finished — research-driven, not schedule-driven.",
              'Sin resúmenes semanales, sin spam. Cada artículo llega cuando está realmente terminado — guiado por la investigación, no por el calendario.'
            )}
          </p>
          <a
            href={SUBSCRIBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nl-btn"
            style={{display:'inline-block', textDecoration:'none'}}
          >
            {tr(lang, 'Subscribe', 'Suscribirse')} →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <Link href="/" className="ft-logo"><span className="ft-logo-dot" />The Trust Frontier</Link>
        <nav className="ft-links">
          <Link href="/blog">{tr(lang, 'Writing', 'Artículos')}</Link>
          <Link href="/work">{tr(lang, 'Work', 'Proyectos')}</Link>
          <Link href="/about">{tr(lang, 'About', 'Sobre mí')}</Link>
          <a href="mailto:ari.zam@princeton.edu">Contact</a>
        </nav>
        <p className="ft-copy">© 2026 The Trust Frontier · By Ariadna Gómez-Zambrano · thetrustfrontier.com</p>
      </footer>
    </div>
  );
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     