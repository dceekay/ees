import { stats } from '../../data/stats';
import { CountUp } from '../common/CountUp';

export function StatsSection() {
  return (
    <section className="statsStrip reveal">
      {stats.map((item, index) => (
        <article key={index} className="statsStripCard">
          
          <h3>
            <CountUp end={item.value} />
            {item.suffix}
          </h3>

          <small>{item.label}</small>
        </article>
      ))}
    </section>
  );
}