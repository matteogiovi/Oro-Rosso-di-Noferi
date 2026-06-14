import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Produzione.css';

const steps = [
  {
    num: '01',
    title: 'Selezione dei Bulbi',
    text: 'Dalla selezione accurata dei bulbi alla preparazione del terreno, ogni operazione viene eseguita con attenzione per garantire la massima qualità del prodotto finale.',
  },
  {
    num: '02',
    title: 'Raccolta Manuale',
    text: 'Durante la fioritura autunnale, i fiori vengono raccolti manualmente nelle prime ore della giornata, quando i petali sono ancora chiusi e gli stimmi conservano tutte le loro proprietà.',
  },
  {
    num: '03',
    title: 'Sfioratura',
    text: 'Si procede alla sfioratura, una lavorazione delicata che consiste nella separazione degli stimmi rossi dal resto del fiore, eseguita interamente a mano.',
  },
  {
    num: '04',
    title: 'Essiccazione',
    text: 'Gli stimmi vengono essiccati con metodi accuratamente controllati per preservarne al meglio aroma, colore e proprietà organolettiche.',
  },
];

export default function Produzione() {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [timelineRef, timelineVisible] = useScrollAnimation({ threshold: 0.05 });

  return (
    <section id="produzione" className="section section--cream">
      <div className="container">
        <div
          ref={headerRef}
          className={`section-header ${headerVisible ? 'is-visible' : ''}`}
        >
          <span className="section-tag">Il Processo</span>
          <h2 className="section-title">Come Nasce il Nostro Zafferano</h2>
          <div className="section-divider-line"></div>
        </div>

        <div
          ref={timelineRef}
          className={`process-timeline ${timelineVisible ? 'is-visible' : ''}`}
        >
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="process-step"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="process-step-number">{step.num}</div>
              <div className="process-step-connector">
                <div className="connector-line"></div>
                <div className="connector-dot"></div>
              </div>
              <div className="process-step-content">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
