import { Link } from 'react-router-dom';
import { ScrollReveal } from '../common/ScrollReveal';
import { AnimatedText } from '../common/AnimatedText';
import { AboutVisualStage } from '../common/AboutVisualStage';
import type { Messages } from '../../i18n';

type AboutSectionProps = {
  t: Messages;
};

export function AboutSection({ t }: AboutSectionProps) {
  return (
    <section className="aboutPinnedSection">
      <div className="aboutPinnedSticky">
        <ScrollReveal className="aboutStorySection">
          <div className="aboutStoryContent">
            <AnimatedText className="kicker" as="p">
              About EES
            </AnimatedText>

            <AnimatedText as="h2" delay={0.12}>
              {t.aboutTitle}
            </AnimatedText>

            <AnimatedText className="subtitle" as="p" delay={0.28}>
              {t.aboutBody}
            </AnimatedText>

            <div className="aboutFeatureList">
              <AnimatedText as="div" delay={0.46}>
                <span />
                Premium residential and commercial project delivery
              </AnimatedText>

              <AnimatedText as="div" delay={0.62}>
                <span />
                Detail-led construction with refined visual standards
              </AnimatedText>

              <AnimatedText as="div" delay={0.78}>
                <span />
                Built around trust, quality, and long-term value
              </AnimatedText>
            </div>

            <AnimatedText as="div" delay={0.94}>
              <Link to="/about" className="text-link">
                {t.readMore}
              </Link>
            </AnimatedText>
          </div>

          <div className="aboutStoryVisual">
            <AboutVisualStage />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}