import { useEffect, useRef } from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { services } from '../data/services';
import { useLanguage } from '../hooks/useLanguage';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/services.css';

gsap.registerPlugin(ScrollTrigger);

export function ServicesPage() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation - cinematic entrance
      gsap.from('.servicesHero h1', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.2,
      });

      gsap.from('.servicesHero p', {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.5,
      });

      // Service panels - sophisticated scroll animations
      const panels = gsap.utils.toArray<HTMLElement>('.servicePanel');

      panels.forEach((panel, i) => {
        const card = panel.querySelector('.serviceCard');
        const text = panel.querySelector('.serviceText');
        const visual = panel.querySelector('.serviceVisual');
        const index = panel.querySelector('.serviceIndex');
        const heading = panel.querySelector('.serviceText h2');
        const description = panel.querySelector('.serviceText p');
        const image = panel.querySelector('.serviceVisual img');

        // Card entrance with scale and fade
        gsap.from(card, {
          scrollTrigger: {
            trigger: panel,
            start: 'top 85%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          },
          scale: 0.92,
          opacity: 0,
          y: 80,
          duration: 1.2,
          ease: 'power4.out',
        });

        // Text elements - staggered reveal
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            start: 'top 75%',
            end: 'top 25%',
            toggleActions: 'play none none reverse',
          },
        });

        tl.from(index, {
          x: -40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        })
          .from(
            heading,
            {
              y: 40,
              opacity: 0,
              duration: 0.9,
              ease: 'power3.out',
            },
            '-=0.5'
          )
          .from(
            description,
            {
              y: 30,
              opacity: 0,
              duration: 0.8,
              ease: 'power2.out',
            },
            '-=0.6'
          );

        // Visual element - parallax slide and scale
        gsap.from(visual, {
          scrollTrigger: {
            trigger: panel,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          },
          x: 100,
          opacity: 0,
          scale: 0.9,
          duration: 1.2,
          ease: 'power4.out',
        });

        // Image zoom effect on scroll
        gsap.fromTo(
          image,
          { scale: 1.3 },
          {
            scrollTrigger: {
              trigger: panel,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
            },
            scale: 1.05,
            ease: 'none',
          }
        );

        // Parallax effect for the entire card
        gsap.to(card, {
          scrollTrigger: {
            trigger: panel,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 2,
          },
          y: -50,
          ease: 'none',
        });
      });

      // CTA section animation
      const ctaTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.servicesCta',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      ctaTimeline
        .from('.servicesCta h2', {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        })
        .from(
          '.servicesCta p',
          {
            y: 40,
            opacity: 0,
            duration: 0.9,
            ease: 'power2.out',
          },
          '-=0.7'
        )
        .from(
          '.servicesBtn',
          {
            scale: 0.8,
            opacity: 0,
            duration: 0.8,
            ease: 'back.out(1.7)',
          },
          '-=0.5'
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Mouse move effect for image glow
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.serviceCard');
      
      cards.forEach((card) => {
        const visual = card.querySelector('.serviceVisual') as HTMLElement;
        if (!visual) return;

        const rect = visual.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        visual.style.setProperty('--mouse-x', `${x}%`);
        visual.style.setProperty('--mouse-y', `${y}%`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <PageLayout>
      <div ref={containerRef}>
        {/* HERO */}
        <section className="servicesHero">
          <h1>{t.servicesPageTitle}</h1>
          <p>{t.servicesPageIntro}</p>
        </section>

        {/* STICKY PANELS */}
        <section className="servicesStickyWrap">
          {services.map((service, index) => (
            <div className="servicePanel" key={service.title}>
              <div className="serviceSticky">
                <div className="serviceCard">
                  <div className="serviceGrid">
                    <div className="serviceText">
                      <span className="serviceIndex">
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <h2>{service.title}</h2>
                      <p>{service.body}</p>
                    </div>

                    <div className="serviceVisual">
                      <img
                        src={`/images/project${index + 1}.jpeg`}
                        alt={service.title}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="servicesCta">
          <h2>Ready to start your project?</h2>
          <p>
            Let's collaborate to bring your vision to life with cutting-edge
            design and development.
          </p>
          <a href="/contact" className="servicesBtn">
            Get in touch
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 8H15M15 8L8 1M15 8L8 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </section>
      </div>
    </PageLayout>
  );
}