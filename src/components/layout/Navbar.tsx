import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { LanguageSwitcher } from '../common/LanguageSwitcher';
import type { Lang, Messages } from '../../i18n';

type NavbarProps = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Messages;
};

export function Navbar({ lang, setLang, t }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!headerRef.current) return;
      if (!headerRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header ref={headerRef} className="glass">
      <Link to="/" className="brand-link" onClick={closeMenu}>
        <div className="brand">EES</div>
      </Link>

      <nav className="navDesktop" aria-label="Primary navigation">
        <NavLink to="/" onClick={closeMenu}>
          {t.navHome}
        </NavLink>
        <NavLink to="/about" onClick={closeMenu}>
          {t.navAbout}
        </NavLink>
        <NavLink to="/services" onClick={closeMenu}>
          {t.navServices}
        </NavLink>
        <NavLink to="/projects" onClick={closeMenu}>
          {t.navProjects}
        </NavLink>
        <NavLink to="/contact" onClick={closeMenu}>
          {t.navContact}
        </NavLink>
      </nav>

      <div className="navDesktopRight">
        <LanguageSwitcher lang={lang} setLang={setLang} />
      </div>

      <button
        type="button"
        className={`navToggle ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobileNavPanel"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <div className="mobileNavLinks">
              <NavLink to="/" onClick={closeMenu}>
                {t.navHome}
              </NavLink>
              <NavLink to="/about" onClick={closeMenu}>
                {t.navAbout}
              </NavLink>
              <NavLink to="/services" onClick={closeMenu}>
                {t.navServices}
              </NavLink>
              <NavLink to="/projects" onClick={closeMenu}>
                {t.navProjects}
              </NavLink>
              <NavLink to="/contact" onClick={closeMenu}>
                {t.navContact}
              </NavLink>
            </div>

            <div className="mobileNavLang">
              <LanguageSwitcher lang={lang} setLang={setLang} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}