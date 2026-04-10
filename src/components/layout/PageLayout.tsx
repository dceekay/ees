import type { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useLanguage } from '../../hooks/useLanguage';

type PageLayoutProps = {
  children: ReactNode;
};

export function PageLayout({ children }: PageLayoutProps) {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="app">
      <Navbar lang={lang} setLang={setLang} t={t} />
      {children}
      <Footer t={t} />
    </div>
  );
}