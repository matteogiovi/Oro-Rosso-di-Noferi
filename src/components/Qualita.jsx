import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Qualita.css';

const features = [
  {
    icon: (
      <svg viewBox="0 0 40 40" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 5l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z" />
      </svg>
    ),
    title: 'Lavorazione Artigianale',
    text: 'Privilegiamo lavorazioni artigianali e una produzione limitata, concentrandoci esclusivamente sull\'eccellenza del prodotto.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="20" cy="20" r="15" />
        <path d="M20 10v10l6 6" />
      </svg>
    ),
    title: 'Pazienza e Passione',
    text: 'Ogni grammo di zafferano rappresenta il risultato di un lavoro paziente e appassionato, nel pieno rispetto della tradizione agricola.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 8c-6 0-12 6-12 14 0 4 2 8 5 10h14c3-2 5-6 5-10 0-8-6-14-12-14z" />
        <path d="M15 32v3h10v-3" />
        <path d="M20 8v14" />
        <path d="M14 16l6 6 6-6" />
      </svg>
    ),
    title: 'Prodotto Autentico',
    text: "L'obiettivo è offrire un prodotto autentico e genuino, frutto del rispetto della natura e dei metodi tradizionali.",
  },
];

export default function Qualita() {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [quoteRef, quoteVisible] = useScrollAnimation();
  const [featRef, featVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="qualita" className="section section--rich">
      <div className="container">
        <div
          ref={headerRef}
          className={`section-header ${headerVisible ? 'is-visible' : ''}`}
        >
          <span className="section-tag">Il Nostro Impegno</span>
          <h2 className="section-title">Qualità e Tradizione</h2>
          <div className="section-divider-line"></div>
        </div>

        <blockquote
          ref={quoteRef}
          className={`quality-quote ${quoteVisible ? 'is-visible' : ''}`}
        >
          <p>
            Crediamo che la qualità nasca dal rispetto dei tempi della natura e dalla
            cura dei dettagli.
          </p>
        </blockquote>

        <div
          ref={featRef}
          className={`quality-grid ${featVisible ? 'is-visible' : ''}`}
        >
          {features.map((feat, i) => (
            <div
              key={feat.title}
              className="quality-card"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="quality-card-icon">{feat.icon}</div>
              <h4>{feat.title}</h4>
              <p>{feat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
