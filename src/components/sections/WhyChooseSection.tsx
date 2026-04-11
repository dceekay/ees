import { ScrollReveal } from '../common/ScrollReveal';
import type { Messages } from '../../i18n';

type WhyChooseSectionProps = {
  t: Messages;
};

const items = [
  {
    number: '01',
    title: 'Premium Finish Quality',
    body: 'Every project is delivered with a sharp eye for detail, material integrity, and refined presentation.',
  },
  {
    number: '02',
    title: 'Reliable Project Delivery',
    body: 'We combine planning, communication, and execution discipline to keep work aligned and predictable.',
  },
  {
    number: '03',
    title: 'Modern Design Language',
    body: 'Our spaces are shaped to feel contemporary, elegant, and architecturally relevant for long-term value.',
  },
  {
    number: '04',
    title: 'Trust-Centered Approach',
    body: 'We build lasting client confidence through transparency, professionalism, and consistency.',
  },
];

export function WhyChooseSection({ t }: WhyChooseSectionProps) {
  return (
    <ScrollReveal className="whyChooseLuxurySection">
      <div className="whyChooseLuxuryGrid">
        <div className="whyChooseVisual">
          <div className="whyChooseVisualCard">
            <img src="/images/why-choose-main.jpeg" alt="Premium construction detail" />
            <div className="whyChooseVisualOverlay" />
            <div className="whyChooseBadge">
              <span>Built with precision</span>
            </div>
          </div>
        </div>

        <div className="whyChooseContent">
          <p className="kicker">Why EES</p>
          <h2>{t.whyChooseTitle}</h2>
          <p className="subtitle">{t.whyChooseIntro}</p>

          <div className="whyChooseList">
            {items.map((item) => (
              <article key={item.title} className="whyChooseItem">
                <span className="whyChooseNumber">{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}