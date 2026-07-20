import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../i18n/LanguageContext';
import './ChiSiamo.css';

export default function ChiSiamo() {
  const { t } = useLanguage();
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
          <span className="section-tag">{t('chiSiamo.tag')}</span>
          <h2 className="section-title">{t('chiSiamo.title')}</h2>
          <div className="section-divider-line"></div>
        </div>

        <div className="chi-siamo-grid">
          <div
            ref={contentRef}
            className={`chi-siamo-text ${contentVisible ? 'is-visible' : ''}`}
          >
            <p className="text-lead">{t('chiSiamo.lead')[0]}<strong>{t('chiSiamo.lead')[1]}</strong>{t('chiSiamo.lead')[2]}</p>
            <p>
              {t('chiSiamo.p1')}
            </p>
            <p>
              {t('chiSiamo.p2')}
            </p>
          </div>

          <div
            ref={imageRef}
            className={`chi-siamo-image ${imageVisible ? 'is-visible' : ''}`}
          >
            <div className="image-frame">
              <img
                src={`${import.meta.env.BASE_URL}images/IMG_3837.PNG`}
                alt={t('chiSiamo.imgAlt')}
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
