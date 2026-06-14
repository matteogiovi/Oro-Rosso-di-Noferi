import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Storia.css';

export default function Storia() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="section section--accent">
      <div className="container">
        <div
          ref={ref}
          className={`story-banner ${isVisible ? 'is-visible' : ''}`}
        >
          <div className="story-icon">
            <div className="story-year-circle">
              <span className="story-year">2024</span>
            </div>
          </div>
          <div className="story-text">
            <h3>La Nostra Avventura</h3>
            <p>
              La nostra avventura è iniziata nel <strong>2024</strong>, quando abbiamo
              deciso di dedicare parte del nostro tempo alla produzione di questa preziosa
              spezia. Da allora continuiamo a coltivare e lavorare lo zafferano con
              passione, puntando sempre sulla qualità e sul rispetto dei metodi
              tradizionali.
            </p>
            <p>
              L'amore per la terra e per i suoi frutti è un valore che si tramanda di
              generazione in generazione e che oggi trova espressione nella coltivazione
              dello zafferano.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
