import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "./Territorio.css";

const cards = [
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        width="48"
        height="48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M24 4L4 44h40L24 4z" />
        <path d="M14 34l6-10 4 6 6-12 8 16" />
      </svg>
    ),
    title: "Noferi, Montevarchi",
    text: "I nostri campi si trovano a Noferi, una frazione di Montevarchi, nel Valdarno aretino — un territorio caratterizzato da un clima favorevole e da terreni particolarmente adatti alla coltivazione dello zafferano.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        width="48"
        height="48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="24" cy="20" r="8" />
        <path d="M24 4C14 4 6 12 6 22c0 12 18 22 18 22s18-10 18-22c0-10-8-18-18-18z" />
      </svg>
    ),
    title: "Nel Cuore della Toscana",
    text: "Qui, nel cuore della Toscana, ogni pianta viene seguita con cura durante tutte le fasi del suo ciclo produttivo, dal primo germoglio fino alla raccolta.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        width="48"
        height="48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M24 6C14 6 8 16 8 24c0 6 4 12 10 16" />
        <path d="M24 6c10 0 16 10 16 18 0 6-4 12-10 16" />
        <path d="M24 6v36" />
        <path d="M10 24h28" />
      </svg>
    ),
    title: "Un Territorio Unico",
    text: "L'unione tra le caratteristiche del territorio e le tecniche di coltivazione adottate permette di ottenere uno zafferano dal profumo intenso, dal colore brillante e dalle eccellenti qualità aromatiche.",
  },
];

export default function Territorio() {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [cardsRef, cardsVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="territorio" className="section section--dark">
      <div className="container">
        <div
          ref={headerRef}
          className={`section-header ${headerVisible ? "is-visible" : ""}`}
        >
          <span className="section-tag">Dove Nasce</span>
          <h2 className="section-title">Il Nostro Territorio</h2>
          <div className="section-divider-line"></div>
        </div>

        <div
          ref={cardsRef}
          className={`territory-grid ${cardsVisible ? "is-visible" : ""}`}
        >
          {cards.map((card, i) => (
            <div
              key={card.title}
              className="territory-card"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="territory-card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
