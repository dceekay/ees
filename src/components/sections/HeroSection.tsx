import { useEffect, useRef, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '../common/Button';
import type { Messages } from '../../i18n';
import gsap from 'gsap';

type HeroSectionProps = {
  t: Messages;
};

const SLIDE_INTERVAL = 5000;

const heroSlides = [
  {
    image: '/images/hotel.png',
    eyebrow: 'Featured Development',
    title: 'The Anatolian City Bazaar',
    tag: 'Commercial',
  },
  {
    image: '/images/site2.png',
    eyebrow: 'Safe and Efficient Construction',
    title: 'State-of-the-Art Site Management',
    tag: 'Infrastructure',
  },
  {
    image: '/images/project2.jpeg',
    eyebrow: 'Luxury Living',
    title: 'Villas & Premium Spaces',
    tag: 'Residential',
  },
  {
    image: '/images/project3.jpeg',
    eyebrow: 'Coastal Prestige',
    title: 'Seafront Villas & Premium Spaces',
    tag: 'Coastal',
  },
  {
    image: '/images/dining1.jpeg',
    eyebrow: 'Refined Interior Design',
    title: 'Elegant Dining & Living Spaces',
    tag: 'Interior',
  },
  {
    image: '/images/ground.jpeg',
    eyebrow: 'Built on Strong Foundations',
    title: 'Precision Groundworks & Site Execution',
    tag: 'Engineering',
  },
];

const narrativeItems = [
  { label: 'Immersive UI & storytelling design', value: '12+' },
  { label: 'High-performance React experiences', value: '40+' },
  { label: 'Conversion-focused digital architecture', value: '99%' },
];

export function HeroSection({ t }: HeroSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeNarrative, setActiveNarrative] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);
  const glassRef = useRef<HTMLDivElement>(null);
  const kickerRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const narrativeRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const floatBadgeRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const overlayLineRef = useRef<HTMLDivElement>(null);
  const sliderCardRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);

  // Rotate narrative items
  useEffect(() => {
    const id = setInterval(() => {
      setActiveNarrative((prev) => (prev + 1) % narrativeItems.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  // GSAP entrance timeline
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

      // Background parallax scale-in
      tl.fromTo(
        bgRef.current,
        { scale: 1.18, opacity: 0 },
        { scale: 1.08, opacity: 1, duration: 1.6 },
        0
      );

      // Overlay line sweep
      tl.fromTo(
        overlayLineRef.current,
        { scaleX: 0, transformOrigin: 'left' },
        { scaleX: 1, duration: 1.1, ease: 'power3.inOut' },
        0.3
      );

      // Glass panel
      tl.fromTo(
        glassRef.current,
        { opacity: 0, x: -60, rotateY: 8 },
        { opacity: 1, x: 0, rotateY: 0, duration: 1.0 },
        0.5
      );

      // Kicker
      tl.fromTo(
        kickerRef.current,
        { opacity: 0, y: 14, letterSpacing: '0.32em' },
        { opacity: 1, y: 0, letterSpacing: '0.18em', duration: 0.7 },
        0.7
      );

      // Headline lines (split by words)
      const headlineEl = headlineRef.current;
      if (headlineEl) {
        const words = headlineEl.querySelectorAll('.hero-word');
        tl.fromTo(
          words,
          { opacity: 0, y: 40, rotateX: -20 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            stagger: 0.05,
            duration: 0.8,
            ease: 'back.out(1.4)',
          },
          0.85
        );
      }

      // Subtitle
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.7 },
        1.1
      );

      // Actions
      tl.fromTo(
        actionsRef.current,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.7 },
        1.25
      );

      // Narrative
      tl.fromTo(
        narrativeRef.current,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.7 },
        1.38
      );

      // Visual card
      tl.fromTo(
        visualRef.current,
        { opacity: 0, x: 80, scale: 0.96 },
        { opacity: 1, x: 0, scale: 1, duration: 1.1 },
        0.65
      );

      // Float badge
      tl.fromTo(
        floatBadgeRef.current,
        { opacity: 0, y: 24, scale: 0.85 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'back.out(1.6)' },
        1.2
      );

      // Counter
      tl.fromTo(
        counterRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5 },
        1.35
      );
    }, sectionRef);

    // Idle float on glass panel
    gsap.to(glassRef.current, {
      y: -10,
      duration: 4,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
      delay: 2,
    });

    // Idle float on visual
    gsap.to(visualRef.current, {
      y: 8,
      duration: 5,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
      delay: 2.5,
    });

    return () => ctx.revert();
  }, []);

  // Scroll-driven parallax
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          y: y * 0.3,
          duration: 0.4,
          ease: 'none',
          overwrite: true,
        });
      }
      if (glassRef.current) {
        gsap.to(glassRef.current, {
          y: y * -0.07,
          duration: 0.4,
          ease: 'none',
          overwrite: true,
        });
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Progress bar animation
  useEffect(() => {
    if (!progressRef.current || isPaused) return;
    gsap.fromTo(
      progressRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: SLIDE_INTERVAL / 1000,
        ease: 'none',
        transformOrigin: 'left',
      }
    );
    return () => {
      gsap.killTweensOf(progressRef.current);
    };
  }, [activeIndex, isPaused]);

  // Auto-advance slides
  useEffect(() => {
    if (isPaused) return;
    const id = window.setInterval(() => {
      setActiveIndex((p) => (p + 1) % heroSlides.length);
    }, SLIDE_INTERVAL);
    return () => window.clearInterval(id);
  }, [isPaused]);

  const activeSlide = useMemo(() => heroSlides[activeIndex], [activeIndex]);

  // Split headline into words for GSAP targeting
  const headlineWords = useMemo(
    () => t.heroTitle.split(' '),
    [t.heroTitle]
  );

  return (
    <section ref={sectionRef} className="heroStory cinematic heroV2">
      {/* BACKGROUND */}
      <img
        ref={bgRef}
        className="heroBackgroundImage"
        src="/images/site.png"
        alt=""
        aria-hidden="true"
      />
      <div className="heroBackgroundOverlay" />

      {/* Decorative diagonal line */}
      <div ref={overlayLineRef} className="heroDiagonalLine" aria-hidden="true" />

      {/* Grain texture */}
      <div className="heroGrain" aria-hidden="true" />

      {/* Floating ambient orb */}
      <div className="heroAmbientOrb" aria-hidden="true" />

      {/* MAIN GRID */}
      <div className="heroContainer heroV2Container">

        {/* TEXT SIDE */}
        <div className="heroContentSide">
          <div ref={glassRef} className="glassPanel heroV2Glass">

            <p ref={kickerRef} className="heroKicker heroV2Kicker">
              {t.heroKicker}
            </p>

            <h1 ref={headlineRef} className="heroHeadline heroV2Headline" aria-label={t.heroTitle}>
              {headlineWords.map((word, i) => (
                <span key={i} className="hero-word" aria-hidden="true">
                  {word}{' '}
                </span>
              ))}
            </h1>

            <p ref={subtitleRef} className="heroSubtitle heroV2Subtitle">
              {t.heroSubtitle}
            </p>

            <div ref={actionsRef} className="heroActions heroV2Actions">
              <Button href="/projects" className="heroV2BtnPrimary">
                {t.ctaPrimary}
              </Button>
              <Button href="/contact" className="ghost heroV2BtnGhost">
                {t.ctaSecondary}
              </Button>
            </div>

            <div ref={narrativeRef} className="heroV2Narrative">
              {narrativeItems.map((item, i) => (
                <div
                  key={i}
                  className={`heroV2NarrativeItem ${i === activeNarrative ? 'active' : ''}`}
                  onClick={() => setActiveNarrative(i)}
                >
                  <span className="heroV2NarrativeDot" />
                  <span className="heroV2NarrativeText">{item.label}</span>
                  <span className="heroV2NarrativeValue">{item.value}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* VISUAL SIDE */}
        <div
          ref={visualRef}
          className="heroStoryVisual heroV2Visual"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Floating badge */}
          <div ref={floatBadgeRef} className="heroV2FloatBadge">
            <span className="heroV2FloatBadgeDot" />
            <span>Premium Projects</span>
          </div>

          {/* Slide counter */}
          <div ref={counterRef} className="heroV2Counter">
            <span className="heroV2CounterCurrent">
              {String(activeIndex + 1).padStart(2, '0')}
            </span>
            <span className="heroV2CounterSep" />
            <span className="heroV2CounterTotal">
              {String(heroSlides.length).padStart(2, '0')}
            </span>
          </div>

          <div className="heroSliderCard heroV2SliderCard">
            {/* Progress bar */}
            <div
              ref={progressRef}
              className="heroV2Progress"
            />

            {/* Slide image */}
            <AnimatePresence mode="wait">
              <motion.img
                key={activeSlide.image}
                src={activeSlide.image}
                alt={activeSlide.title}
                className="heroSliderImage heroV2SliderImage"
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1.0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              />
            </AnimatePresence>

            {/* Overlays */}
            <div className="heroSliderOverlay heroV2SliderOverlay" />

            {/* Caption */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.title}
                className="heroSliderCaption heroV2Caption"
                initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="heroV2CaptionTag">{activeSlide.tag}</span>
                <p className="heroV2CaptionEyebrow">{activeSlide.eyebrow}</p>
                <h3 className="heroV2CaptionTitle">{activeSlide.title}</h3>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="heroSliderDots heroV2Dots">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  className={`heroDot heroV2Dot ${i === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Bottom fade */}
      <div className="heroBottomFade" aria-hidden="true" />
    </section>
  );
}