import { Link } from 'react-router-dom';
import { LanguageSwitcher } from '../common/LanguageSwitcher';
import type { Lang, Messages } from '../../i18n';

type NavbarProps = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Messages;
};

export function Navbar({ lang, setLang, t }: NavbarProps) {
  return (
    <header className="glass">
      <Link to="/" className="brand-link">
        <div className="brand">EES</div>
      </Link>

      <nav>
        <Link to="/">{t.navHome}</Link>
        <Link to="/about">{t.navAbout}</Link>
        <Link to="/services">{t.navServices}</Link>
        <Link to="/projects">{t.navProjects}</Link>
        <Link to="/contact">{t.navContact}</Link>
      </nav>

      <LanguageSwitcher lang={lang} setLang={setLang} />
    </header>
  );
}