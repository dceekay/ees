import { PageLayout } from '../components/layout/PageLayout';
import { useLanguage } from '../hooks/useLanguage';

export function AboutPage() {
  const { t } = useLanguage();

  return (
    <PageLayout>
      <section className="panel reveal">
        <h1>{t.aboutPageTitle}</h1>
        <p className="subtitle">{t.aboutPageIntro}</p>
        <p>{t.aboutPageBodyOne}</p>
        <p>{t.aboutPageBodyTwo}</p>
      </section>
    </PageLayout>
  );
}