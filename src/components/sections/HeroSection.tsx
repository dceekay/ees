import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '../common/Button';
import type { Messages } from '../../i18n';

type HeroSectionProps = {
  t: Messages;
};

const SLIDE_INTERVAL = 4500;

const heroSlides = [
  {
    image: '/images/hotel.png',
    eyebrow: 'Featured Development',
    title: 'The Anatolian City Bazaar',
  },
  {
    image: '/images/site2.png',
    eyebrow: 'Safe and Efficient Construction',
    title: 'State-of-the-Art Site Management',
  },
  {
    image: '/images/project2.jpeg',
    eyebrow: 'Luxury Living',
    title: 'Villas & Premium Spaces',
  },
  {
    image: '/images/project3.jpeg',
    eyebrow: 'Coastal Prestige',
    title: 'Seafront Villas & Premium Spaces',
  },
  {
    image: '/images/dining1.jpeg',
    eyebrow: 'Refined Interior Design',
    title: 'Elegant Dining & Living Spaces',
  },
  {
    image: '/images/ground.jpeg',
    eyebrow: 'Built on Strong Foundations',
    title: 'Precision Groundworks & Site Execution',
  },
];

export function HeroSection({ t }: HeroSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length);
    }, SLIDE_INTERVAL);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const activeSlide = useMemo(
    () => heroSlides[activeIndex],
    [activeIndex]
  );

  const heroTitleLines = useMemo(() => {
    const words = t.heroTitle.split(' ');
    const midpoint = Math.ceil(words.length / 2);

    return [
      words.slice(0, midpoint).join(' '),
      words.slice(midpoint).join(' '),
    ].filter(Boolean);
  }, [t.heroTitle]);

  return (
    <section className="heroStory cinematic">
      {/* BACKGROUND */}
      <img
        className="heroBackgroundImage"
        src="/images/site.png"
        alt="Luxury background"
      />
      <div className="heroBackgroundOverlay" />

      {/* MAIN GRID */}
      <div className="heroContainer">

        {/* TEXT SIDE */}
        <div className="heroContentSide">
          <div className="glassPanel">

            <motion.p
              className="heroKicker"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {t.heroKicker}
            </motion.p>

            <h1 className="heroHeadline">
              {t.heroTitle}
            </h1>

            <p className="heroSubtitle">
              {t.heroSubtitle}
            </p>

            <div className="heroActions">
              <Button href="/projects">{t.ctaPrimary}</Button>
              <Button href="/contact" className="ghost">
                {t.ctaSecondary}
              </Button>
            </div>

            <div className="heroNarrative">
              <div className="heroNarrativeItem active">
                Immersive UI & storytelling design
              </div>
              <div className="heroNarrativeItem">
                High-performance React experiences
              </div>
              <div className="heroNarrativeItem">
                Conversion-focused digital architecture
              </div>
            </div>

          </div>
        </div>

        {/* VISUAL SIDE */}
        <div
          className="heroStoryVisual"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="heroSliderCard">

            <div
              className={`heroSliderProgress ${
                isPaused ? 'paused' : ''
              }`}
              style={{ animationDuration: `${SLIDE_INTERVAL}ms` }}
            />


            <AnimatePresence mode="wait">
              <motion.img
                key={activeSlide.image}
                src={activeSlide.image}
                alt={activeSlide.title}
                className="heroSliderImage"
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1.08 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </AnimatePresence>

            <div className="heroSliderOverlay" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.title}
                className="heroSliderCaption"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
              >
                <p>{activeSlide.eyebrow}</p>
                <h3>{activeSlide.title}</h3>
              </motion.div>
            </AnimatePresence>

            <div className="heroSliderDots">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  className={`heroDot ${
                    index === activeIndex ? 'active' : ''
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}