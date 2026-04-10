import { services } from '../../data/services';
import { SectionHeading } from '../common/SectionHeading';
import type { Messages } from '../../i18n';

type ServicesSectionProps = {
  t: Messages;
};

export function ServicesSection({ t }: ServicesSectionProps) {
  return (
    <section id="services" className="panel reveal">
      <SectionHeading title={t.servicesTitle} body={t.servicesIntro} />

      <div className="cards">
        {services.map((service) => (
          <article key={service.title} className="card">
            <h3>{service.title}</h3>
            <p>{service.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}