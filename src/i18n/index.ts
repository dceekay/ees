import { en } from './en';
import { tr } from './tr';
import { ru } from './ru';
import { ar } from './ar';
import { fa } from './fa';
import type { Lang, Messages } from './types';

export type { Lang, Messages } from './types';

export const copy: Record<Lang, Messages> = {
  en,
  tr,
  ru,
  ar,
  fa,
};

export const languageMeta: Record<Lang, { label: string; dir: 'ltr' | 'rtl' }> = {
  en: { label: 'EN', dir: 'ltr' },
  tr: { label: 'TR', dir: 'ltr' },
  ru: { label: 'RU', dir: 'ltr' },
  ar: { label: 'AR', dir: 'rtl' },
  fa: { label: 'FA', dir: 'rtl' },
};