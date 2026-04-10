import { PageLayout } from '../components/layout/PageLayout';
import { services } from '../data/services';
import { useLanguage } from '../hooks/useLanguage';

export function ServicesPage() {
  const { t } = useLanguage();

  return (
    <PageLayout>
      <section className="panel reveal">
        <h1>{t.servicesPageTitle}</h1>
        <p className="subtitle">{t.servicesPageIntro}</p>

        <div className="cards">
          {services.map((service) => (
            <article key={service.title} className="card">
              <h3>{service.title}</h3>
              <p>{service.body}</p>
            </article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}