import { useEffect, useState } from 'react';
import { copy, languageMeta, type Lang } from '../i18n';

const STORAGE_KEY = 'ees-language';

export function useLanguage() {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'en';

    const saved = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (saved && saved in copy) {
      return saved;
    }

    return 'en';
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = languageMeta[lang].dir;
  }, [lang]);

  return {
    lang,
    setLang,
    t: copy[lang],
  };
}