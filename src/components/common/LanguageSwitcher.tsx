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
        aria-label="Language selector"
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
          className="langArrow"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ▾
        </motion.span>
      </button>

      {/* DROPDOWN */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="langDropdownCinematic"
            initial={{ opacity: 0, y: -12, scale: 0.95, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -8, scale: 0.97, filter: 'blur(8px)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            {langs.map((l, idx) => (
              <motion.button
                key={l}
                className={`langItem ${l === lang ? 'active' : ''}`}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.05, x: 4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSelect(l)}
              >
                <span className="langItemFlag">{flags[l]}</span>
                <span className="langItemLabel">{languageMeta[l].label}</span>
                {l === lang && (
                  <motion.span
                    className="langItemCheck"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    ✓
                  </motion.span>
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}