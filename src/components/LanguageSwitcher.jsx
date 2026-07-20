import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import './LanguageSwitcher.css';

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Chiudi dropdown cliccando fuori
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const otherLang = lang === 'it' ? 'en' : 'it';

  const handleSwitch = () => {
    setLang(otherLang);
    setOpen(false);
  };

  return (
    <div className="lang-switcher" ref={ref}>
      <button
        className="lang-switcher__toggle"
        onClick={() => setOpen(!open)}
        aria-label="Change language"
        id="lang-switcher"
      >
        {lang.toUpperCase()}
        <svg
          className={`lang-switcher__arrow ${open ? 'lang-switcher__arrow--open' : ''}`}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M1 1l4 4 4-4" />
        </svg>
      </button>

      <div className={`lang-switcher__dropdown ${open ? 'lang-switcher__dropdown--open' : ''}`}>
        <button
          className="lang-switcher__option"
          onClick={handleSwitch}
        >
          {otherLang.toUpperCase()}
        </button>
      </div>
    </div>
  );
}
