import { useLanguage } from '../i18n/LanguageContext';
import './Footer.css';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img
              src={`${import.meta.env.BASE_URL}images/C5E55255-2138-41D2-A5EF-42E83126DA7D.png`}
              alt={t('footer.logoAlt')}
              className="footer-logo-img"
            />
          </div>

          <p className="footer-tagline">
            {t('footer.tagline')}
          </p>

          <div className="footer-divider"></div>

          <p className="footer-copy">
            &copy; 2024–{currentYear} Oro Rosso di Noferi — Noferi, Montevarchi (AR)
          </p>
        </div>
      </div>
    </footer>
  );
}
