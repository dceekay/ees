import { ScrollReveal } from '../common/ScrollReveal';
import { Button } from '../common/Button';
import type { Messages } from '../../i18n';

type CtaSectionProps = {
  t: Messages;
};

export function CtaSection({ t }: CtaSectionProps) {
  return (
    <section id="contact">
      <ScrollReveal className="ctaLuxurySection">
        <div className="ctaLuxuryInner">
          <p className="kicker">Let’s Build</p>

          <h2>{t.contactTitle}</h2>

          <p className="subtitle">{t.contactBody}</p>

          <div className="heroActions">
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