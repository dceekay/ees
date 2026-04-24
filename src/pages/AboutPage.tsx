import { PageLayout } from '../components/layout/PageLayout';
import { useLanguage } from '../hooks/useLanguage';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { StaggerReveal } from '../components/common/StaggerReveal';
import { StaggerItem } from '../components/common/StaggerItem';
import { CountUp } from '../components/common/CountUp';
import { Link } from 'react-router-dom';
import '../styles/about.css';

const values = [
  {
    key: 'precision',
    title: 'Precision',
    text: 'Every detail matters. From structural planning to final finishes, we deliver with exactness and discipline.',
  },
  {
    key: 'trust',
    title: 'Trust',
    text: 'We build lasting partnerships through transparency, reliability, and consistent communication.',
  },
  {
    key: 'quality',
    title: 'Quality',
    text: 'Premium materials, refined craftsmanship, and uncompromising standards define our work.',
  },
  {
    key: 'innovation',
    title: 'Innovation',
    text: 'We integrate modern construction techniques with forward-thinking design solutions.',
  },
];

const stats = [
  { value: 15, suffix: '+', label: 'Projects Delivered' },
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 100, suffix: '+', label: 'Clients' },
  { value: 100, suffix: '%', label: 'Quality Focus' },
];

export function AboutPage() {
  const { t } = useLanguage();

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