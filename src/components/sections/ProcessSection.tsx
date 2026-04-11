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
    title: 'Consultation',
    body: 'We understand the vision, project requirements, timeline, and the experience you want the finished space to deliver.',
  },
  {
    number: '02',
    title: 'Planning & Design Alignment',
    body: 'We define scope, refine direction, align design intent, and establish clear execution priorities before work begins.',
  },
  {
    number: '03',
    title: 'Execution',
    body: 'The project moves into disciplined implementation with close coordination, strong supervision, and careful quality control.',
  },
  {
    number: '04',
    title: 'Delivery',
    body: 'We finalize the details, review the finish, and hand over a completed space built for function, beauty, and long-term value.',
  },
];

export function ProcessSection({ t }: ProcessSectionProps) {
  return (
    <ScrollReveal className="processLuxurySection">
      <div className="processHeader">
        <AnimatedText className="kicker" as="p">
          Our Process
        </AnimatedText>

        <AnimatedText as="h2" delay={0.08}>
          {t.processTitle}
        </AnimatedText>

        <AnimatedText className="subtitle" as="p" delay={0.16}>
          {t.processIntro}
        </AnimatedText>
      </div>

      <StaggerReveal className="processTimeline">
        {steps.map((step, index) => (
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