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
    body: 'We understand the vision, requirements, project goals, and desired experience.',
  },
  {
    number: '02',
    title: 'Planning & Design Alignment',
    body: 'We define the direction, scope, visual language, and delivery expectations clearly.',
  },
  {
    number: '03',
    title: 'Execution',
    body: 'The project moves into disciplined implementation with close attention to quality and detail.',
  },
  {
    number: '04',
    title: 'Delivery',
    body: 'We finalize, refine, and present a completed space built for value, beauty, and confidence.',
  },
];

export function ProcessSection({ t }: ProcessSectionProps) {
  return (
    <ScrollReveal className="processSection">
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

      <StaggerReveal className="processGrid">
        {steps.map((step) => (
          <StaggerItem key={step.number}>
            <article className="processCard">
              <span className="processNumber">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </ScrollReveal>
  );
}