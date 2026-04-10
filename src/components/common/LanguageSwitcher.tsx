import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { languageMeta, type Lang } from '../../i18n';

const langs: Lang[] = ['en', 'tr', 'ru', 'ar', 'fa'];

const languageFlags: Record<Lang, string> = {
  en: '🇬🇧',
  tr: '🇹🇷',
  ru: '🇷🇺',
  ar: '🇸🇦',
  fa: '🇮🇷',
};

type LanguageSwitcherProps = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

export function LanguageSwitcher({ lang, setLang }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  const handleSelect = (item: Lang) => {
    setLang(item);
    setOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <div ref={rootRef} className="lang">
      <button
        type="button"
        className="langCurrent"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Select language"
      >
        <span className="langFlag">{languageFlags[lang]}</span>
        <span>{languageMeta[lang].label}</span>
        <motion.span
          className="arrow"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          ▾
        </motion.span>
      </button>

      <div className="langDesktopList">
        {langs.map((item) => (
          <button
            key={item}
            type="button"
            className={item === lang ? 'active' : ''}
            onClick={() => handleSelect(item)}
          >
            <span className="langFlag">{languageFlags[item]}</span>
            <span>{languageMeta[item].label}</span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="langDropdown"
            initial={{ opacity: 0, y: -10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
          >
            {langs.map((item) => (
              <button
                key={item}
                type="button"
                className={item === lang ? 'active' : ''}
                onClick={() => handleSelect(item)}
              >
                <span className="langFlag">{languageFlags[item]}</span>
                <span>{languageMeta[item].label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}