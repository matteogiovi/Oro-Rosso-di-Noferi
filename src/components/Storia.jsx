import { useLanguage } from '../i18n/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Storia.css';

export default function Storia() {
  const { t } = useLanguage();
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
            <h3>{t('storia.title')}</h3>
            <p>
              {t('storia.p1Start')}<strong>{t('storia.p1Year')}</strong>{t('storia.p1End')}
            </p>
            <p>
              {t('storia.p2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
