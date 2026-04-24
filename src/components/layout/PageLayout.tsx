import type { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useLanguage } from '../../hooks/useLanguage';

type PageLayoutProps = {
  children: ReactNode;
};

export function PageLayout({ children }: PageLayoutProps) {
  const { t } = useLanguage();

  return (
    <div className="app">
      <Navbar t={t} />
      {children}
      <Footer t={t} />
    </div>
  );
}