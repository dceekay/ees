import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { LanguageSwitcher } from '../common/LanguageSwitcher';
import type { Messages } from '../../i18n';

type NavbarProps = {
  t: Messages;
};

export function Navbar({ t }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  /* =========================================================
     CLOSE MENU WHEN CLICKING OUTSIDE OR PRESSING ESC
     ========================================================= */
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

  /* =========================================================
     LOCK BODY SCROLL WHEN MOBILE MENU IS OPEN
     (PREVENTS BACKGROUND SCROLLING = PREMIUM UX)
     ========================================================= */
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header ref={headerRef} className="glass navbar">
      
      {/* =======================================================
          BRAND
          ======================================================= */}
      <Link to="/" className="brand-link" onClick={closeMenu}>
        <div className="brand">EES</div>
      </Link>

      {/* =======================================================
          DESKTOP NAVIGATION
          ======================================================= */}
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

      {/* =======================================================
          DESKTOP RIGHT SIDE (LANG SWITCHER / EXTRA CONTROLS)
          ======================================================= */}
      <div className="navDesktopRight">
        <LanguageSwitcher />
      </div>

      {/* =======================================================
          MOBILE HAMBURGER BUTTON (ANIMATED)
          ======================================================= */}
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

      {/* =======================================================
          MOBILE NAVIGATION OVERLAY (FULL SCREEN)
          PREMIUM UX: IMMERSIVE MENU LAYER
          ======================================================= */}
      <AnimatePresence>
        {menuOpen && (
         <motion.div
  className="mobileNavPanel"
  initial={{ opacity: 0, scale: 0.98 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.98 }}
  transition={{ duration: 0.25, ease: 'easeOut' }}
>

  {/* CLOSE BUTTON */}
  <button
    type="button"
    className="mobileCloseBtn"
    onClick={closeMenu}
    aria-label="Close menu"
  >
    ✕
  </button>

  {/* NAV LINKS */}
  <div className="mobileNavLinks">
    <NavLink to="/" onClick={closeMenu}>{t.navHome}</NavLink>
    <NavLink to="/about" onClick={closeMenu}>{t.navAbout}</NavLink>
    <NavLink to="/services" onClick={closeMenu}>{t.navServices}</NavLink>
    <NavLink to="/projects" onClick={closeMenu}>{t.navProjects}</NavLink>
    <NavLink to="/contact" onClick={closeMenu}>{t.navContact}</NavLink>
  </div>

  <div className="mobileNavLang">
    <LanguageSwitcher />
  </div>

</motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}