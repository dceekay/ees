import { ScrollReveal } from '../common/ScrollReveal';
import { AnimatedText } from '../common/AnimatedText';
import { StaggerReveal } from '../common/StaggerReveal';
import { StaggerItem } from '../common/StaggerItem';
import type { Messages } from '../../i18n';

type ProcessSectionProps = {
  t: Messages;
};

const steps = [
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

export function ProcessSection({ t }: ProcessSectionProps) {
  const stepsData = [
    {
      number: '01',
      title: t.processOne.title,
      body: t.processOne.body,
    },
    {
      number: '02',
      title: t.processTwo.title,
      body: t.processTwo.body,
    },
    {
      number: '03',
      title: t.processThree.title,
      body: t.processThree.body,
    },
    {
      number: '04',
      title: t.processFour.title,
      body: t.processFour.body,
    },
  ];
  
  return (
    <ScrollReveal className="processLuxurySection">
      <div className="processHeader">
        <AnimatedText className="kicker" as="p">
          {t.processLabel}
        </AnimatedText>

        <AnimatedText as="h2" delay={0.08}>
          {t.processTitle}
        </AnimatedText>

        <AnimatedText className="subtitle" as="p" delay={0.16}>
          {t.processIntro}
        </AnimatedText>
      </div>

      <StaggerReveal className="processTimeline">
        {stepsData.map((step, index) => (
          <StaggerItem key={step.number}>
            <article className={`processStepCard processStepCard--${index + 1}`}>
              <div className="processStepTop">
                <span className="processStepNumber">{step.number}</span>
                <span className="processStepDot" />
              </div>

              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </ScrollReveal>
  );
}