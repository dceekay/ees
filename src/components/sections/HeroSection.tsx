import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '../common/Button';
import type { Messages } from '../../i18n';

type HeroSectionProps = {
  t: Messages;
};

const heroSlides = [
  {
    image: '/images/hotel.png',
    eyebrow: 'Featured Development',
    title: 'THE ANATOLIAN CITY BAZAAR',
  },
  {
    image: '/images/site.png',
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
    eyebrow: 'Luxury Living',
    title: 'Seafront Villas & Premium Spaces',
  },
    {
    image: '/images/dining1.jpeg',
    eyebrow: 'Interior Design with so ',
    title: 'House Dining Table ',
  },
   {
    image: '/images/ground.jpeg',
    eyebrow: 'Interior Design with so ',
    title: 'House Dining Table ',
  },
];

export function HeroSection({ t }: HeroSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  const activeSlide = useMemo(() => heroSlides[activeIndex], [activeIndex]);

  const heroTitleLines = useMemo(() => {
    const words = t.heroTitle.split(' ');
    const midpoint = Math.ceil(words.length / 2);
    return [words.slice(0, midpoint).join(' '), words.slice(midpoint).join(' ')].filter(Boolean);
  }, [t.heroTitle]);

  return (
    <section className="heroStory">
      <div className="heroStoryContent">
        <motion.p
          className="kicker"
          initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {t.heroKicker}
        </motion.p>

        <div className="heroTitleWrap">
          {heroTitleLines.map((line, index) => (
            <motion.span
              key={line}
              className="heroTitleLine"
              initial={{ opacity: 0, y: 42, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                duration: 0.9,
                delay: 0.12 + index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {line}
            </motion.span>
          ))}
        </div>

        <motion.p
          className="subtitle"
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            duration: 0.9,
            delay: 0.38,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {t.heroSubtitle}
        </motion.p>

        <motion.div
          className="heroActions"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.85,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Button href="/projects">{t.ctaPrimary}</Button>
          <Button href="/contact" className="ghost">
            {t.ctaSecondary}
          </Button>
        </motion.div>

        <motion.div
          className="heroNarrativeList"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                delayChildren: 0.62,
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {[
            'Luxury residential and mixed-use construction',
            'Refined execution with premium finish quality',
            'Built for elegance, trust, and long-term value',
          ].map((item) => (
            <motion.div
              key={item}
              variants={{
                hidden: { opacity: 0, y: 16, filter: 'blur(6px)' },
                show: {
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              <span />
              {item}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="heroStoryVisual">
        <div className="heroSliderCard">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeSlide.image}
              src={activeSlide.image}
              alt={activeSlide.title}
              className="heroSliderImage"
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1.02 }}
              exit={{ opacity: 0, scale: 1.08 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />
          </AnimatePresence>

          <div className="heroSliderOverlay" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.title}
              className="heroSliderCaption"
              initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p>{activeSlide.eyebrow}</p>
              <h3>{activeSlide.title}</h3>
            </motion.div>
          </AnimatePresence>

          <div className="heroSliderDots">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`heroDot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          className="heroStatsStack"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="heroMiniStat">
            <strong>15+</strong>
            <span>Premium projects delivered</span>
          </div>

          <div className="heroMiniStat">
            <strong>10+</strong>
            <span>Years of experience and trust</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}