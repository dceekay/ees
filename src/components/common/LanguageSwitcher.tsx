import { languageMeta, type Lang } from '../../i18n';

const langs: Lang[] = ['en', 'tr', 'ru', 'ar', 'fa'];

type LanguageSwitcherProps = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

export function LanguageSwitcher({ lang, setLang }: LanguageSwitcherProps) {
  return (
    <div className="lang">
      {langs.map((item) => (
        <button
          key={item}
          type="button"
          className={item === lang ? 'active' : ''}
          onClick={() => setLang(item)}
        >
          {languageMeta[item].label}
        </button>
      ))}
    </div>
  );
}