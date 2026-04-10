import { ScrollReveal } from '../common/ScrollReveal';
import type { Messages } from '../../i18n';

type TestimonialsSectionProps = {
  t: Messages;
};

const testimonials = [
  {
    name: 'Private Client',
    role: 'Residential Development',
    quote:
      'EES brought clarity, structure, and quality to the project from start to finish. The final result felt refined and truly premium.',
  },
  {
    name: 'Commercial Partner',
    role: 'Retail & Office Project',
    quote:
      'What stood out most was the professionalism and visual quality of delivery. The space was executed with strong attention to detail.',
  },
  {
    name: 'Property Investor',
    role: 'Luxury Interior Fit-Out',
    quote:
      'They understood the level of finish we wanted and delivered a result that felt elegant, modern, and market-ready.',
  },
];

export function TestimonialsSection({ t }: TestimonialsSectionProps) {
  return (
    <ScrollReveal className="testimonialsLuxurySection">
      <div className="testimonialsHeader">
        <p className="kicker">Testimonials</p>
        <h2>{t.testimonialsTitle}</h2>
        <p className="subtitle">{t.testimonialsIntro}</p>
      </div>

      <div className="testimonialsLuxuryGrid">
        {testimonials.map((item, index) => (
          <article
            key={item.name + item.role}
            className={`testimonialLuxuryCard testimonialLuxuryCard--${index + 1}`}
          >
            <div className="testimonialMark">“</div>
            <p className="testimonialQuote">{item.quote}</p>
            <div className="testimonialMeta">
              <h3>{item.name}</h3>
              <small>{item.role}</small>
            </div>
          </article>
        ))}
      </div>
    </ScrollReveal>
  );
}