import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './ChiSiamo.css';

export default function ChiSiamo() {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();
  const [imageRef, imageVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="chi-siamo" className="section section--cream">
      <div className="container">
        <div
          ref={headerRef}
          className={`section-header ${headerVisible ? 'is-visible' : ''}`}
        >
          <span className="section-tag">La Nostra Essenza</span>
          <h2 className="section-title">Chi Siamo</h2>
          <div className="section-divider-line"></div>
        </div>

        <div className="chi-siamo-grid">
          <div
            ref={contentRef}
            className={`chi-siamo-text ${contentVisible ? 'is-visible' : ''}`}
          >
            <p className="text-lead">
              Benvenuti in <strong>Oro Rosso di Noferi</strong>, una realtà agricola
              dedicata alla coltivazione e alla produzione di zafferano di alta qualità
              nel territorio di Montevarchi, in provincia di Arezzo.
            </p>
            <p>
              La nostra missione è valorizzare uno dei prodotti più preziosi della
              tradizione agricola italiana attraverso una coltivazione attenta,
              sostenibile e completamente orientata alla qualità.
            </p>
            <p>
              Oro Rosso di Noferi nasce dalla passione per l'agricoltura e dal desiderio
              di mantenere vive le tradizioni che da generazioni accompagnano la nostra
              famiglia. Pur svolgendo questa attività nel tempo libero, ogni fase della
              coltivazione viene affrontata con impegno, dedizione e grande attenzione ai
              dettagli.
            </p>
          </div>

          <div
            ref={imageRef}
            className={`chi-siamo-image ${imageVisible ? 'is-visible' : ''}`}
          >
            <div className="image-frame">
              <img
                src="/images/fiore-zafferano.jpg"
                alt="Fiore di zafferano raccolto a mano nei campi di Noferi"
                loading="lazy"
              />
              <div className="image-frame-accent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
