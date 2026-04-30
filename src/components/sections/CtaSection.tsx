import { ScrollReveal } from '../common/ScrollReveal';
import { Button } from '../common/Button';
import type { Messages } from '../../i18n';

type CtaSectionProps = {
  t: Messages;
};

export function CtaSection({ t }: CtaSectionProps) {
  return (
    <section id="contact" className="cta">
      <ScrollReveal>
        <div className="cta__container">

          <p className="kicker">{t.ctaSectionKicker}</p>

          <h2 className="cta__title">
            {t.contactTitle}
          </h2>

          <p className="subtitle cta__subtitle">
            {t.contactBody}
          </p>

          <div className="cta__actions">
            <Button href="/contact">
              {t.ctaSecondary}
            </Button>

            <Button href="/projects" className="ghost">
              {t.ctaPrimary}
            </Button>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
}