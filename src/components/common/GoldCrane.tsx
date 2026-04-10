import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function GoldCrane() {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-8, 0, 8]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [40, 0, -30]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 1.04]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.15, 0.45, 0.55, 0.2]);

  return (
    <div ref={ref} className="goldCraneWrap" aria-hidden="true">
      <motion.svg
        className="goldCrane"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ rotate, y, scale, opacity }}
      >
        <g stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round">
          <path d="M90 430H410" />
          <path d="M140 430V120" />
          <path d="M140 120H355" />
          <path d="M320 120L380 120" />
          <path d="M355 120L320 150" />
          <path d="M355 120L320 90" />
          <path d="M220 430V320" />
          <path d="M180 430H260" />
          <path d="M330 120V180" />
          <path d="M330 180L300 250" />
          <path d="M300 250V310" />
          <path d="M280 310H320" />
          <path d="M330 180L360 235" />
          <path d="M140 180L220 120" />
          <path d="M140 250L260 120" />
        </g>

        <g fill="currentColor">
          <circle cx="330" cy="180" r="8" />
          <circle cx="300" cy="250" r="8" />
          <circle cx="140" cy="120" r="8" />
          <circle cx="355" cy="120" r="8" />
        </g>
      </motion.svg>
    </div>
  );
}