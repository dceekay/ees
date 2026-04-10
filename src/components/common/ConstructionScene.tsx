import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function ConstructionScene() {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // crane arm rotates slowly through the section
  const boomRotate = useTransform(scrollYProgress, [0.15, 0.55, 0.85], [-8, 10, 2]);

  // hook goes down, then up, then settles
  const hookY = useTransform(scrollYProgress, [0.12, 0.32, 0.55, 0.75], [0, 42, -18, 0]);

  // load follows the hook with slight easing feel
  const loadY = useTransform(scrollYProgress, [0.12, 0.32, 0.55, 0.75], [0, 42, -18, 0]);

  // slight horizontal swing of the load
  const loadX = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 20, -8]);

  // site elements rise subtly into place
  const buildingY = useTransform(scrollYProgress, [0, 0.35], [28, 0]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.15, 0.32, 0.4, 0.18]);

  return (
    <div ref={ref} className="constructionSceneWrap" aria-hidden="true">
      <motion.div className="constructionSceneGlow" style={{ opacity: glowOpacity }} />

      <svg
        className="constructionScene"
        viewBox="0 0 760 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ground */}
        <path
          d="M70 470H690"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          opacity="0.4"
        />

        {/* building blocks */}
        <motion.g style={{ y: buildingY }}>
          <rect x="455" y="265" width="138" height="165" rx="8" fill="currentColor" opacity="0.12" />
          <rect x="505" y="215" width="98" height="215" rx="8" fill="currentColor" opacity="0.17" />
          <rect x="600" y="300" width="48" height="130" rx="8" fill="currentColor" opacity="0.1" />

          <g opacity="0.35">
            <rect x="476" y="290" width="24" height="24" rx="4" fill="currentColor" />
            <rect x="515" y="290" width="24" height="24" rx="4" fill="currentColor" />
            <rect x="554" y="290" width="24" height="24" rx="4" fill="currentColor" />
            <rect x="476" y="330" width="24" height="24" rx="4" fill="currentColor" />
            <rect x="515" y="330" width="24" height="24" rx="4" fill="currentColor" />
            <rect x="554" y="330" width="24" height="24" rx="4" fill="currentColor" />
          </g>
        </motion.g>

        {/* crane mast + chassis */}
        <g stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round">
          <path d="M135 430H250" />
          <path d="M168 430V120" />
          <path d="M168 120L248 430" opacity="0.45" />
          <path d="M168 190L216 120" opacity="0.6" />
          <path d="M168 255L232 120" opacity="0.45" />
        </g>

        {/* crane boom */}
        <motion.g style={{ rotate: boomRotate, originX: 168, originY: 120 }}>
          <g stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round">
            <path d="M168 120H470" />
            <path d="M430 120L470 120" />
            <path d="M420 120L395 144" opacity="0.5" />
            <path d="M385 120L355 144" opacity="0.5" />
            <path d="M350 120L320 144" opacity="0.5" />
            <path d="M315 120L285 144" opacity="0.5" />
            <path d="M280 120L250 144" opacity="0.5" />
          </g>

          {/* cable */}
          <motion.g>
            <path
              d="M440 120V220"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
              style={{ transform: `translateY(${hookY}px)` }}
            />

            {/* hook */}
            <motion.path
              d="M440 220C440 232 450 236 458 236C466 236 474 232 474 222"
              stroke="currentColor"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ x: loadX, y: hookY }}
            />

            {/* load */}
            <motion.g style={{ x: loadX, y: loadY }}>
              <rect
                x="408"
                y="236"
                width="70"
                height="42"
                rx="6"
                fill="currentColor"
                opacity="0.18"
              />
              <rect
                x="420"
                y="248"
                width="46"
                height="6"
                rx="3"
                fill="currentColor"
                opacity="0.7"
              />
              <rect
                x="420"
                y="260"
                width="34"
                height="6"
                rx="3"
                fill="currentColor"
                opacity="0.55"
              />
            </motion.g>
          </motion.g>
        </motion.g>

        {/* foreground platform / materials */}
        <g opacity="0.7">
          <rect x="280" y="420" width="80" height="16" rx="5" fill="currentColor" opacity="0.14" />
          <rect x="290" y="400" width="62" height="14" rx="4" fill="currentColor" opacity="0.22" />
          <rect x="82" y="420" width="70" height="16" rx="5" fill="currentColor" opacity="0.12" />
        </g>
      </svg>
    </div>
  );
}