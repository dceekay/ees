import { useState } from 'react';
import { ScrollReveal } from '../common/ScrollReveal';
import type { Messages } from '../../i18n';

type FaqSectionProps = {
  t: Messages;
};

const faqs = [
  {
    question: 'What type of projects does EES Construction handle?',
    answer:
      'We focus on premium residential, commercial, mixed-use, and interior fit-out projects with strong visual and structural standards.',
  },
  {
    question: 'Can EES manage both design direction and execution?',
    answer:
      'Yes. We work across planning, coordination, and construction delivery to ensure the final outcome stays aligned with the intended vision.',
  },
  {
    question: 'Do you work on luxury interior finishes?',
    answer:
      'Yes. Interior quality, premium materials, and refined spatial presentation are an important part of our brand positioning.',
  },
  {
    question: 'How do I start a project discussion?',
    answer:
      'You can reach out through the contact page, email, or phone to begin a conversation about your timeline, scope, and project goals.',
  },
];

export function FaqSection({ t }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <ScrollReveal className="faqLuxurySection">
      <div className="faqHeader">
        <p className="kicker">FAQ</p>
        <h2>{t.faqTitle}</h2>
        <p className="subtitle">{t.faqIntro}</p>
      </div>

      <div className="faqLuxuryList">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <article
              key={faq.question}
              className={`faqLuxuryItem ${isOpen ? 'open' : ''}`}
            >
              <button
                type="button"
                className="faqLuxuryTrigger"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{faq.question}</span>
                <span className="faqLuxuryIcon">{isOpen ? '−' : '+'}</span>
              </button>

              {isOpen ? <p className="faqLuxuryAnswer">{faq.answer}</p> : null}
            </article>
          );
        })}
      </div>
    </ScrollReveal>
  );
}