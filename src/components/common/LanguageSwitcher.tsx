import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { languageMeta, type Lang } from '../../i18n';
import { useLangStore } from '../../i18n/langStore';

const langs: Lang[] = ['en', 'tr', 'ru', 'ar', 'fa'];

const flags: Record<Lang, string> = {
  en: '🇬🇧',
  tr: '🇹🇷',
  ru: '🇷🇺',
  ar: '🇸🇦',
  fa: '🇮🇷',
};

export function LanguageSwitcher() {
  const { lang, setLang } = useLangStore();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  const handleSelect = (l: Lang) => {
    setLang(l);
    setOpen(false);
  };

  // close outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener('mousedown', handler);
    return () => window.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={rootRef} className="langCinematic">

      {/* TRIGGER */}
      <button
        className="langTrigger"
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
      >
        <motion.span
          className="langFlag"
          key={lang}
          initial={{ rotateY: 90, scale: 0.8, opacity: 0 }}
          animate={{ rotateY: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {flags[lang]}
        </motion.span>

        <span className="langLabel">
          {languageMeta[lang].label}
        </span>

        <motion.span
          className="arrow"
          animate={{ rotate: open ? 180 : 0 }}
        >
          ▾
        </motion.span>
      </button>

      {/* DROPDOWN */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="langDropdownCinematic"
            initial={{ opacity: 0, y: -20, scale: 0.92, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -10, scale: 0.95, filter: 'blur(10px)' }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          >
            {langs.map(l => (
              <motion.button
                key={l}
                className={`langItem ${l === lang ? 'active' : ''}`}
                whileHover={{ scale: 1.04 }}
                onClick={() => handleSelect(l)}
              >
                <span>{flags[l]}</span>
                <span>{languageMeta[l].label}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}