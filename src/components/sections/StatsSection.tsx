import { stats } from '../../data/stats';
import type { Messages } from '../../i18n';

type StatsSectionProps = {
  t: Messages;
};

export function StatsSection({ t }: StatsSectionProps) {
  const labels = [
    t.statsProjects,
    t.statsExperience,
    t.statsClients,
    t.statsQuality,
  ];

  return (
    <section className="panel reveal">
      <div className="cards">
        {stats.map((item, index) => (
          <article key={`${item.value}-${index}`} className="card">
            <h3>{item.value}</h3>
            <small>{labels[index]}</small>
          </article>
        ))}
      </div>
    </section>
  );
}