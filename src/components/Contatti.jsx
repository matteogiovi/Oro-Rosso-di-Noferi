import { useLanguage } from '../i18n/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Contatti.css';

export default function Contatti() {
  const { t } = useLanguage();
  const [headerRef, headerVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation({ threshold: 0.1 });

  const contacts = [
    {
      icon: (
        <svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="20" r="6" />
          <path d="M24 6C16 6 10 12 10 20c0 10 14 22 14 22s14-12 14-22c0-8-6-14-14-14z" />
        </svg>
      ),
      title: t('contatti.doveSiamo'),
      content: (
        <p>
          Noferi — Montevarchi (AR)
          <br />
          Toscana, Italia
        </p>
      ),
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 6h-4a4 4 0 00-4 4v4a28 28 0 0028 28h4a4 4 0 004-4v-4l-8-6-4 4a16 16 0 01-12-12l4-4z" />
        </svg>
      ),
      title: t('contatti.chiamaci'),
      content: (
        <a href="tel:+393348716987" className="contact-link" id="contact-phone">
          334 871 6987
        </a>
      ),
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="6" width="36" height="36" rx="10" />
          <circle cx="24" cy="24" r="9" />
          <circle cx="35" cy="13" r="2" fill="currentColor" stroke="none" />
        </svg>
      ),
      title: t('contatti.seguici'),
      content: (
        <a
          href="https://www.instagram.com/_ororossodinoferi_/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
          id="contact-instagram"
        >
          @_ororossodinoferi_
        </a>
      ),
    },
  ];

  return (
    <section id="contatti" className="section section--cream">
      <div className="container">
        <div
          ref={headerRef}
          className={`section-header ${headerVisible ? 'is-visible' : ''}`}
        >
          <span className="section-tag">{t('contatti.tag')}</span>
          <h2 className="section-title">{t('contatti.title')}</h2>
          <div className="section-divider-line"></div>
        </div>

        <div
          ref={gridRef}
          className={`contacts-grid ${gridVisible ? 'is-visible' : ''}`}
        >
          {contacts.map((c, i) => (
            <div
              key={c.title}
              className="contact-card"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="contact-icon">{c.icon}</div>
              <h3>{c.title}</h3>
              {c.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
