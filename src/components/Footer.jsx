import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img
              src="/images/logo-oro-rosso.jpg"
              alt="Logo Oro Rosso di Noferi"
              className="footer-logo-img"
            />
          </div>

          <p className="footer-tagline">
            Dalla passione per la terra nasce l'oro rosso della nostra tradizione.
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
