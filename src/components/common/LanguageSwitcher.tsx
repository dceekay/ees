import { useState } from 'react';
import { languageMeta, type Lang } from '../../i18n';

const langs: Lang[] = ['en', 'tr', 'ru', 'ar', 'fa'];

type LanguageSwitcherProps = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

export function LanguageSwitcher({ lang, setLang }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);

  const handleSelect = (item: Lang) => {
    setLang(item);
    setOpen(false);
  };

  return (
    <div className={`lang ${open ? 'open' : ''}`}>
      {/* Active Language Button */}
      <button
        className="langCurrent"
        onClick={() => setOpen((prev) => !prev)}
      >
        {languageMeta[lang].label}
        <span className="arrow">▾</span>
      </button>

      {/* Dropdown */}
      <div className="langDropdown">
        {langs.map((item) => (
          <button
            key={item}
            className={item === lang ? 'active' : ''}
            onClick={() => handleSelect(item)}
          >
            {languageMeta[item].label}
          </button>
        ))}
      </div>
    </div>
  );
}