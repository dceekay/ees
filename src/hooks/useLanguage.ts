import { useEffect } from 'react';
import { copy, languageMeta } from '../i18n';
import { useLangStore } from '../i18n/langStore';

export function useLanguage() {
  const lang = useLangStore((s) => s.lang);
  const setLang = useLangStore((s) => s.setLang);

  // sync DOM + localStorage
  useEffect(() => {
    localStorage.setItem('ees-language', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = languageMeta[lang].dir;
  }, [lang]);

  return {
    lang,
    setLang,
    t: copy[lang],
  };
}