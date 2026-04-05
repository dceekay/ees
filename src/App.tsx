import { useEffect, useState } from 'react';
import { copy, languageMeta, type Lang } from './i18n';

const langs: Lang[] = ['en', 'tr', 'ru', 'ar', 'fa'];

const projects = [
  { title: 'Luxury Residential Block', status: 'Completed 2025' },
  { title: 'Boutique Offices & Retail', status: 'Completed 2024' },
  { title: 'Seafront Villas Collection', status: 'Completed 2026' },
];

export function App() {
  const [lang, setLang] = useState<Lang>('en');
  const t = copy[lang];
  const isRtl = languageMeta[lang].dir === 'rtl';

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
  }, [lang, isRtl]);

  return (
    <div className="app">
      <header className="glass">
        <div className="brand">EES</div>
        <nav>
          <a href="#about">{t.navAbout}</a>
          <a href="#projects">{t.navProjects}</a>
          <a href="#craft">{t.navCraft}</a>
          <a href="#contact">{t.navContact}</a>
        </nav>
        <div className="lang">
          {langs.map((item) => (
            <button key={item} className={item === lang ? 'active' : ''} onClick={() => setLang(item)}>
              {languageMeta[item].label}
            </button>
          ))}
        </div>
      </header>

      <section className="hero reveal">
        <p className="kicker">{t.heroKicker}</p>
        <h1>{t.heroTitle}</h1>
        <p className="subtitle">{t.heroSubtitle}</p>
        <div className="heroActions">
          <button>{t.ctaPrimary}</button>
          <button className="ghost">{t.ctaSecondary}</button>
        </div>
      </section>

      <section id="about" className="panel reveal">
        <h2>{t.aboutTitle}</h2>
        <p>{t.aboutBody}</p>
      </section>

      <section id="projects" className="panel reveal">
        <h2>{t.projectsTitle}</h2>
        <p>{t.projectsIntro}</p>
        <div className="cards">
          {projects.map((project) => (
            <article key={project.title} className="card">
              <div className="imagePlaceholder">Your Project Photo</div>
              <h3>{project.title}</h3>
              <small>{project.status}</small>
            </article>
          ))}
        </div>
      </section>

      <section id="craft" className="panel reveal">
        <h2>{t.craftTitle}</h2>
        <ul>
          {t.craftItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section id="contact" className="panel accent reveal">
        <h2>{t.contactTitle}</h2>
        <p>{t.contactBody}</p>
      </section>

      <footer>{t.footer}</footer>
    </div>
  );
}
