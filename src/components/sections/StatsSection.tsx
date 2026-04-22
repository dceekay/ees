import { stats } from '../../data/stats';
import { CountUp } from '../common/CountUp';
import type { Messages } from '../../i18n';

type StatsSectionProps = {
  t: Messages;
};

export function StatsSection({ t }: StatsSectionProps) {
  return (
    <section className="statsStrip reveal">
      <div className="statsStripIntro">
        <h2 className="statsStripTitle">{t.ctaTitle}</h2>
        <h2 className="statsStripTitle">{t.ctaTitle}</h2>
      </div>

      <div className="statsStripGrid">
        {stats.map((item, index) => (
          <article key={index} className="statsStripCard">
            <h3>
              <CountUp end={item.value} />
              {item.suffix}
            </h3>

            <small>{item.label}</small>
          </article>
        ))}
      </div>
    </section>
  );
}