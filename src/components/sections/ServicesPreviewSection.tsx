import { Link } from 'react-router-dom';
import { services } from '../../data/services';
import { ScrollReveal } from '../common/ScrollReveal';
import { AnimatedText } from '../common/AnimatedText';
import { StaggerReveal } from '../common/StaggerReveal';
import { StaggerItem } from '../common/StaggerItem';
import type { Messages } from '../../i18n';

type ServicesPreviewSectionProps = {
  t: Messages;
};

const serviceImages = ['/services/const.png', '/services/const2.png', '/services/const3.png'];

export function ServicesPreviewSection({ t }: ServicesPreviewSectionProps) {
  const previewServices = services.slice(0, 3);

  return (
    <ScrollReveal className="servicesPreviewSection">
      <div className="servicesPreviewHeader">
        <div>
          <AnimatedText className="kicker" as="p">
            What We Do
          </AnimatedText>

          <AnimatedText as="h2" delay={0.08}>
            {t.servicesTitle}
          </AnimatedText>

          <AnimatedText className="subtitle" as="p" delay={0.16}>
            {t.servicesIntro}
          </AnimatedText>
        </div>

        <AnimatedText delay={0.24} as="div">
          <Link to="/services" className="text-link">
            {t.viewAllServices}
          </Link>
        </AnimatedText>
      </div>

      <StaggerReveal className="servicesFeatureGrid">
        {previewServices.map((service, index) => (
          <StaggerItem key={service.title}>
            <article className="serviceFeatureCard">
              <div className="serviceFeatureIllustrationWrap">
                <div className="serviceFeatureIllustrationGlow" />
                <img
                  src={serviceImages[index]}
                  alt={service.title}
                  className="serviceFeatureIllustration"
                />
              </div>

              <div className="serviceFeatureTop">
                <span className="serviceFeatureIndex">0{index + 1}</span>
                <h3>{service.title}</h3>
              </div>

              <p>{service.body}</p>
            </article>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </ScrollReveal>
  );
}