import { useLanguage } from '../i18n/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Produzione.css';

const stepNumbers = ['01', '02', '03', '04'];

export default function Produzione() {
  const { t } = useLanguage();
  const [headerRef, headerVisible] = useScrollAnimation();
  const [timelineRef, timelineVisible] = useScrollAnimation({ threshold: 0.05 });

  return (
    <section id="produzione" className="section section--cream">
      <div className="container">
        <div
          ref={headerRef}
          className={`section-header ${headerVisible ? 'is-visible' : ''}`}
        >
          <span className="section-tag">{t('produzione.tag')}</span>
          <h2 className="section-title">{t('produzione.title')}</h2>
          <div className="section-divider-line"></div>
        </div>

        <div
          ref={timelineRef}
          className={`process-timeline ${timelineVisible ? 'is-visible' : ''}`}
        >
          {t('produzione.steps').map((step, i) => (
            <div
              key={stepNumbers[i]}
              className="process-step"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="process-step-number">{stepNumbers[i]}</div>
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

