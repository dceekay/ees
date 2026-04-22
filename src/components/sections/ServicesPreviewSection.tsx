import { Link } from 'react-router-dom';
import { services } from '../../data/services';
import { ScrollReveal } from '../common/ScrollReveal';
import { AnimatedText } from '../common/AnimatedText';
import { StaggerReveal } from '../common/StaggerReveal';
import { StaggerItem } from '../common/StaggerItem';
import { CountUp } from '../common/CountUp';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import type { Messages } from '../../i18n';

type ServicesPreviewSectionProps = {
  t: Messages;
};

const premiumStats = [
  {
    value: 15,
    suffix: '+',
    label: 'Projects Delivered',
    description:
      'Premium projects completed with precision, speed, and long-term reliability.',
  },
  {
    value: 10,
    suffix: '+',
    label: 'Years Experience',
    description:
      'A decade of trusted execution across construction, project delivery, and client partnerships.',
  },
  {
    value: 100,
    suffix: '+',
    label: 'Happy Clients',
    description:
      'Satisfied clients who value quality workmanship, clarity, and consistent delivery.',
  },
  {
    value: 100,
    suffix: '%',
    label: 'Quality Focus',
    description:
      'Every stage is driven by detail, accountability, and a premium standard of finish.',
  },
];

export function ServicesPreviewSection({ t }: ServicesPreviewSectionProps) {
  const previewServices = services.slice(0, 3);

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'end 20%'],
  });

  // cinematic transforms
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);

  return (
    <section ref={ref} className="servicesPreviewSection">
      <motion.div
        style={{ y, opacity }}
        className="servicesPreviewShell"
      >
        {/* ================= HEADER ================= */}
        <div className="servicesPreviewTop">
          <div className="servicesPreviewIntro">
            <AnimatedText className="kicker servicesPreviewKicker" as="p">
              What We Do
            </AnimatedText>

            <AnimatedText as="h2" className="servicesPreviewTitle">
              {t.servicesTitle}
            </AnimatedText>

            <AnimatedText
              className="subtitle servicesPreviewSubtitle"
              as="p"
            >
              {t.servicesIntro}
            </AnimatedText>
          </div>

          <motion.div
            style={{ opacity }}
            className="servicesPreviewCtaWrap"
          >
            <Link to="/services" className="servicesPreviewCta">
              Explore All Services
            </Link>
          </motion.div>
        </div>

        {/* ================= SERVICES ================= */}
        <StaggerReveal className="servicesPreviewGrid">
          {previewServices.map((service, index) => (
            <StaggerItem key={service.slug ?? service.title ?? index}>
              <motion.article
                className="servicePreviewCard"
                style={{ scale }}
                whileHover={{ y: -6 }}
              >
                <div className="servicePreviewGlow" />
                <div className="servicePreviewInner">
                  <p className="servicePreviewIndex">
                    {String(index + 1).padStart(2, '0')}
                  </p>

                  <h3 className="servicePreviewHeading">
                    {service.title}
                  </h3>

                  <p className="servicePreviewText">
                    {service.shortDescription || service.description}
                  </p>

                  <Link
                    to={`/services/${service.slug}`}
                    className="servicePreviewLink"
                  >
                    Learn More
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerReveal>

        {/* ================= STATS ================= */}
        <motion.div
          style={{ y, opacity, scale }}
          className="servicesStatsPanel"
        >
          <div className="servicesStatsHeader">
            <AnimatedText as="p" className="servicesStatsEyebrow">
              Built on trust. Measured by results.
            </AnimatedText>

            <AnimatedText as="h3" className="servicesStatsTitle">
              Proven execution with a premium standard
            </AnimatedText>

            <AnimatedText as="p" className="servicesStatsText">
              We combine technical expertise, disciplined delivery, and
              refined craftsmanship to create projects that stand out for
              both performance and presentation.
            </AnimatedText>
          </div>

          <StaggerReveal className="servicesStatsGrid">
            {premiumStats.map((stat) => (
              <StaggerItem key={stat.label}>
                <motion.article
                  className="serviceStatCard"
                  whileHover={{ y: -4 }}
                >
                  <div className="serviceStatTopLine" />
                  <div className="serviceStatValue">
                    <CountUp
                      end={stat.value}
                      suffix={stat.suffix}
                      duration={1700}
                    />
                  </div>
                  <h4 className="serviceStatLabel">{stat.label}</h4>
                  <p className="serviceStatDescription">
                    {stat.description}
                  </p>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </motion.div>
      </motion.div>
    </section>
  );
}