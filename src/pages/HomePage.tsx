import { PageLayout } from '../components/layout/PageLayout';
import { HeroSection } from '../components/sections/HeroSection';
import { StatsSection } from '../components/sections/StatsSection';
import { AboutSection } from '../components/sections/AboutSection';
import { ServicesPreviewSection } from '../components/sections/ServicesPreviewSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { WhyChooseSection } from '../components/sections/WhyChooseSection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { FaqSection } from '../components/sections/FaqSection';
import { CtaSection } from '../components/sections/CtaSection';
import { useLanguage } from '../hooks/useLanguage';

export function HomePage() {
  const { t } = useLanguage();

  return (
    <PageLayout>
      <HeroSection t={t} />
      <StatsSection t={t} />
      <AboutSection t={t} />
      <ServicesPreviewSection t={t} />
      <ProjectsSection t={t} />
      <WhyChooseSection t={t} />
      <ProcessSection t={t} />
      <TestimonialsSection t={t} />
      <FaqSection t={t} />
      <CtaSection t={t} />
    </PageLayout>
  );
}