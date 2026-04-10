import { useEffect, useState } from 'react';
import { copy, languageMeta, type Lang } from '../i18n';

export function useLanguage() {
  const [lang, setLang] = useState<Lang>('en');

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = languageMeta[lang].dir;
  }, [lang]);

  return {
    lang,
    setLang,
    t: copy[lang],
  };
}