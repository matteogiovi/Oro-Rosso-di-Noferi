import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const links = [
    { href: '#chi-siamo', label: 'Chi Siamo' },
    { href: '#territorio', label: 'Il Territorio' },
    { href: '#produzione', label: 'Produzione' },
    { href: '#qualita', label: 'Qualità' },
    { href: '#contatti', label: 'Contatti' },
  ];

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''} ${menuOpen ? 'nav--menu-open' : ''}`} id="main-nav">
      <div className="nav-inner">
        <a href="#hero" className="nav-logo" onClick={handleLinkClick}>
          Oro Rosso di Noferi
        </a>

        <button
          className={`nav-toggle ${menuOpen ? 'nav-toggle--active' : ''}`}
          id="nav-toggle"
          aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`} id="nav-links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={handleLinkClick}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
