import { ScrollReveal } from '../common/ScrollReveal';
import type { Messages } from '../../i18n';

type WhyChooseSectionProps = {
  t: Messages;
};

const items = [
  {
    title: 'Premium Finish Quality',
    body: 'Every project is delivered with a sharp eye for detail, material integrity, and refined presentation.',
  },
  {
    title: 'Reliable Project Delivery',
    body: 'We combine planning, communication, and execution discipline to keep work aligned and predictable.',
  },
  {
    title: 'Modern Design Language',
    body: 'Our spaces are shaped to feel contemporary, elegant, and architecturally relevant for long-term value.',
  },
  {
    title: 'Trust-Centered Approach',
    body: 'We build lasting client confidence through transparency, professionalism, and consistency.',
  },
];

export function WhyChooseSection({ t }: WhyChooseSectionProps) {
  return (
    <ScrollReveal className="panel">
      <p className="kicker">Why EES</p>
      <h2>{t.whyChooseTitle}</h2>
      <p className="subtitle">{t.whyChooseIntro}</p>

      <div className="cards">
        {items.map((item) => (
          <article key={item.title} className="card">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </ScrollReveal>
  );
}