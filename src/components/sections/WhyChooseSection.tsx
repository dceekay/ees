import { ScrollReveal } from '../common/ScrollReveal';
import { AnimatedText } from '../common/AnimatedText';
import { StaggerReveal } from '../common/StaggerReveal';
import { StaggerItem } from '../common/StaggerItem';
import type { Messages } from '../../i18n';

type WhyChooseSectionProps = {
  t: Messages;
};

const items = [
  {
    number: '01',
    title: '',
    body: '',
  },
  {
    number: '02',
    title: '',
    body: '',
  },
  {
    number: '03',
    title: '',
    body: '',
  },
  {
    number: '04',
    title: '',
    body: '',
  },
];

export function WhyChooseSection({ t }: WhyChooseSectionProps) {
  const itemsData = [
    {
      number: '01',
      title: t.whyChooseOne.title,
      body: t.whyChooseOne.body,
    },
    {
      number: '02',
      title: t.whyChooseTwo.title,
      body: t.whyChooseTwo.body,
    },
    {
      number: '03',
      title: t.whyChooseThree.title,
      body: t.whyChooseThree.body,
    },
    {
      number: '04',
      title: t.whyChooseFour.title,
      body: t.whyChooseFour.body,
    },
  ];

  return (
    <ScrollReveal className="whyChooseLuxurySection">
      <div className="whyChooseLuxuryGrid">

        {/* Visual */}
        <div className="whyChooseVisual">
          <div className="whyChooseVisualCard">
            <img src="/images/dining1.jpeg" alt="Premium construction detail" />
            <div className="whyChooseVisualOverlay" />
            <div className="whyChooseBadge">
              <span>Built with precision</span>
            </div>
          </div>
        </div>

        {/* Content — now with AnimatedText + StaggerReveal */}
        <div className="whyChooseContent">
          <AnimatedText className="kicker" as="p">
            {t.whyChooseLabel}
          </AnimatedText>

          <AnimatedText as="h2" delay={0.08}>
            {t.whyChooseTitle}
          </AnimatedText>

          <AnimatedText className="subtitle" as="p" delay={0.16}>
            {t.whyChooseIntro}
          </AnimatedText>

          <StaggerReveal className="whyChooseList">
            {itemsData.map((item) => (
              <StaggerItem key={item.title}>
                <article className="whyChooseItem">
                  <span className="whyChooseNumber">{item.number}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>

      </div>
    </ScrollReveal>
  );
}