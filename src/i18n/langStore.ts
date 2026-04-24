import { create } from 'zustand';

export type Lang = 'en' | 'tr' | 'ru' | 'ar' | 'fa';

type LangState = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  initLang: () => void;
};

const STORAGE_KEY = 'ees-lang';

const detectLang = (): Lang => {
  if (typeof window === 'undefined') return 'en';

  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) return saved as Lang;

  const browser = navigator.language.slice(0, 2);
  const supported: Lang[] = ['en', 'tr', 'ru', 'ar', 'fa'];

  if (supported.includes(browser as Lang)) return browser as Lang;

  return 'en';
};

export const useLangStore = create<LangState>((set) => ({
  lang: 'en',

  setLang: (lang) => {
    localStorage.setItem(STORAGE_KEY, lang);
    set({ lang });
  },

  initLang: () => {
    set({ lang: detectLang() });
  },
}));