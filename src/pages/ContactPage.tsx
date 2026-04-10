import { PageLayout } from '../components/layout/PageLayout';
import { Button } from '../components/common/Button';
import { useLanguage } from '../hooks/useLanguage';

export function ContactPage() {
  const { t } = useLanguage();

  return (
    <PageLayout>
      <section className="panel accent reveal">
        <h1>{t.contactPageTitle}</h1>
        <p className="subtitle">{t.contactPageIntro}</p>
        <p>{t.contactBody}</p>

        <div className="heroActions">
          <Button href="mailto:info@eesconstruction.com">info@eesconstruction.com</Button>
          <Button href="tel:+905000000000" className="ghost">
            +90 500 000 00 00
          </Button>
        </div>
      </section>
    </PageLayout>
  );
}