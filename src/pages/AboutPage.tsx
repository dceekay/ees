import { PageLayout } from '../components/layout/PageLayout';
import { useLanguage } from '../hooks/useLanguage';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { StaggerReveal } from '../components/common/StaggerReveal';
import { StaggerItem } from '../components/common/StaggerItem';
import { CountUp } from '../components/common/CountUp';
import { Link } from 'react-router-dom';
import '../styles/about.css';

const getValues = (t: typeof import('../i18n').copy.en) => [
  {
    key: 'precision',
    ...t.aboutValuesPrecision,
  },
  {
    key: 'trust',
    ...t.aboutValuesTrust,
  },
  {
    key: 'quality',
    ...t.aboutValuesQuality,
  },
  {
    key: 'innovation',
    ...t.aboutValuesInnovation,
  },
];

const getStats = (t: typeof import('../i18n').copy.en) => [
  { value: 15, suffix: '+', label: t.aboutStatProjectsDelivered },
  { value: 10, suffix: '+', label: t.aboutStatYearsExperience },
  { value: 100, suffix: '+', label: t.aboutStatClients },
  { value: 100, suffix: '%', label: t.aboutStatQualityFocus },
];

export function AboutPage() {
  const { t } = useLanguage();
  const values = getValues(t);
  const stats = getStats(t);

  return (
    <PageLayout>
      {/* ================= HERO ================= */}
      <section className="aboutHero">
        <ScrollReveal>
          <p className="aboutKicker">{t.aboutTitle}</p>

          <h1 className="aboutTitle">
            {t.aboutPageTitle}
          </h1>

          <p className="aboutSubtitle">
            {t.aboutPageIntro}
          </p>
        </ScrollReveal>
      </section>

      {/* ================= STORY ================= */}
      <section className="aboutStory">
        <div className="aboutStoryGrid">
          <ScrollReveal>
            <div className="aboutStoryText">
              <h2>{t.aboutPageStoryTitle}</h2>

              <p>{t.aboutPageBodyOne}</p>
              <p>{t.aboutPageBodyTwo}</p>
              <p>{t.aboutPageBodyThree}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="aboutStoryImage">
              <img src="/images/office.jpeg" alt="Construction project" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="aboutValues">
        <ScrollReveal>
          <h2 className="aboutSectionTitle">
            {t.aboutValuesTitle}
          </h2>
        </ScrollReveal>

        <StaggerReveal className="aboutValuesGrid">
          {values.map((item) => (
            <StaggerItem key={item.key}>
              <div className="aboutValueCard">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </section>

      {/* ================= STATS ================= */}
      <section className="aboutStats">
        <StaggerReveal className="aboutStatsGrid">
          {stats.map((item) => (
            <StaggerItem key={item.label}>
              <div className="aboutStatCard">
                <h3>
                  <CountUp end={item.value} />
                  {item.suffix}
                </h3>
                <p>{item.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </section>

      {/* ================= CTA ================= */}
      <section className="aboutCta">
        <ScrollReveal>
          <h2>{t.aboutCtaTitle}</h2>

          <p>{t.aboutCtaText}</p>

          <Link to="/contact" className="aboutCtaBtn">
            {t.ctaSecondary}
          </Link>
        </ScrollReveal>
      </section>
    </PageLayout>
  );
}