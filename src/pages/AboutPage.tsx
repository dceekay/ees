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
    title: 'Precision',
    text: 'Every detail matters. From structural planning to final finishes, we deliver with exactness and discipline.',
  },
  {
    title: 'Trust',
    text: 'We build lasting partnerships through transparency, reliability, and consistent communication.',
  },
  {
    title: 'Quality',
    text: 'Premium materials, refined craftsmanship, and uncompromising standards define our work.',
  },
  {
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
          <p className="aboutKicker">About Us</p>
          <h1 className="aboutTitle">{t.aboutPageTitle}</h1>
          <p className="aboutSubtitle">
            A modern construction company driven by precision, quality, and long-term vision.
          </p>
        </ScrollReveal>
      </section>

      {/* ================= STORY ================= */}
      <section className="aboutStory">
        <div className="aboutStoryGrid">
          <ScrollReveal>
            <div className="aboutStoryText">
              <h2>Our Story</h2>

              <p>
                At EES Construction, we believe that exceptional spaces are not just built —
                they are carefully crafted through vision, discipline, and attention to detail.
                Our journey is rooted in a commitment to delivering projects that combine
                structural integrity with refined design.
              </p>

              <p>
                Over the years, we have developed a reputation for reliability and precision,
                working closely with clients to transform ideas into tangible, high-quality
                developments. Every project reflects our dedication to clarity, efficiency,
                and long-term value.
              </p>

              <p>
                From residential developments to commercial spaces and interior transformations,
                our work is guided by a simple principle: build with purpose, deliver with
                excellence, and create environments that stand the test of time.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="aboutStoryImage">
              <img src="/images/project1.jpeg" alt="Construction project" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="aboutValues">
        <ScrollReveal>
          <h2 className="aboutSectionTitle">Our Values</h2>
        </ScrollReveal>

        <StaggerReveal className="aboutValuesGrid">
          {values.map((item) => (
            <StaggerItem key={item.title}>
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
          <h2>Let’s Build Something Exceptional</h2>
          <p>
            Work with a team that combines technical expertise, modern execution,
            and a commitment to delivering outstanding results.
          </p>

          <Link to="/contact" className="aboutCtaBtn">
            Contact Us
          </Link>
        </ScrollReveal>
      </section>
    </PageLayout>
  );
}