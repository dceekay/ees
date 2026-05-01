import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { LanguageSwitcher } from '../common/LanguageSwitcher';
import type { Messages } from '../../i18n';

type NavbarProps = {
  t: Messages;
};

export function Navbar({ t }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const headerRef = useRef<HTMLElement | null>(null);
  const location = useLocation();

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
     SCROLL EFFECT (SHRINK + INTENSIFY GLASS)
     ========================================================= */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* =========================================================
     LOCK BODY SCROLL WHEN MOBILE MENU IS OPEN
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

  const navItems = [
    { to: '/', label: t.navHome },
    { to: '/about', label: t.navAbout },
    { to: '/services', label: t.navServices },
    { to: '/projects', label: t.navProjects },
    { to: '/contact', label: t.navContact },
  ];

  return (
    <motion.header
      ref={headerRef}
      className={`glass navbar ${scrolled ? 'scrolled' : ''}`}
      animate={{
        background: scrolled
          ? 'rgba(8, 12, 18, 0.92)'
          : 'rgba(8, 12, 18, 0.78)',
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* BRAND */}
      <Link to="/" className="brand-link" onClick={closeMenu}>
        <div className="brand">EES</div>
      </Link>

      {/* DESKTOP NAV */}
      <nav className="navDesktop" aria-label="Primary navigation">
        {navItems.map((item) => {
          const isActive = location.pathname === item.to;

          return (
            <NavLink key={item.to} to={item.to} onClick={closeMenu}>
              <span className="navText">{item.label}</span>

              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="navIndicator"
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* RIGHT */}
      <div className="navDesktopRight">
        <LanguageSwitcher />
      </div>

      {/* HAMBURGER */}
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

      {/* MOBILE PANEL */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobileNavPanel"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {/* CLOSE */}
            <button
              type="button"
              className="mobileCloseBtn"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              ✕
            </button>

            {/* LINKS */}
            <div className="mobileNavLinks">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} onClick={closeMenu}>
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="mobileNavLang">
              <LanguageSwitcher />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}