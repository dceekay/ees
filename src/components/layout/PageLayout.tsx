import type { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useLanguage } from '../../hooks/useLanguage';

type PageLayoutProps = {
  children: ReactNode;
  toggleTheme: () => void;
};

export function PageLayout({ children, toggleTheme }: PageLayoutProps) {
  const { t } = useLanguage();

  return (
    <div className="app">
      <Navbar t={t} toggleTheme={toggleTheme} />
      {children}
      <Footer t={t} />
    </div>
  );
}
