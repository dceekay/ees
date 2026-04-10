import type { Messages } from '../../i18n';

type CraftSectionProps = {
  t: Messages;
};

export function CraftSection({ t }: CraftSectionProps) {
  return (
    <section id="craft" className="panel reveal">
      <h2>{t.craftTitle}</h2>
      <ul>
        {t.craftItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}