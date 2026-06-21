import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img
              src={`${import.meta.env.BASE_URL}images/logo-oro-rosso.jpg`}
              alt="Logo Oro Rosso di Noferi"
              className="footer-logo-img"
            />
          </div>

          <p className="footer-tagline">
            Una passione coltivata nel cuore della Toscana.
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
