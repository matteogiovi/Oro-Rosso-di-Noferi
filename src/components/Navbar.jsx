import { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import './Navbar.css';

export default function Navbar() {
  const { t } = useLanguage();
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
    { href: '#chi-siamo', label: t('navbar.chiSiamo') },
    { href: '#territorio', label: t('navbar.territorio') },
    { href: '#produzione', label: t('navbar.produzione') },
    { href: '#qualita', label: t('navbar.qualita') },
    { href: '#contatti', label: t('navbar.contatti') },
  ];

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''} ${menuOpen ? 'nav--menu-open' : ''}`} id="main-nav">
      <div className="nav-inner">
        <button
          className={`nav-toggle ${menuOpen ? 'nav-toggle--active' : ''}`}
          id="nav-toggle"
          aria-label={menuOpen ? t('navbar.closeMenu') : t('navbar.openMenu')}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <a href="#hero" className="nav-logo" onClick={handleLinkClick}>
          Oro Rosso di Noferi
        </a>

        <ul className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`} id="nav-links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={handleLinkClick}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <LanguageSwitcher />
      </div>
    </nav>
  );
}
