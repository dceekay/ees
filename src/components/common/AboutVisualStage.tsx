import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

export function AboutVisualStage() {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const smooth = {
    stiffness: 70,
    damping: 22,
    mass: 0.45,
  };

  const rawRotate = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], [-1.2, 0, 0.8, 0]);
  const rawY = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], [18, 0, -10, 0]);
  const rawScale = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], [0.985, 1.01, 1.02, 1]);
  const rawGlowOpacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.55, 1],
    [0.14, 0.24, 0.3, 0.16]
  );

  const rotate = useSpring(rawRotate, smooth);
  const y = useSpring(rawY, smooth);
  const scale = useSpring(rawScale, smooth);
  const glowOpacity = useSpring(rawGlowOpacity, smooth);

  const imageOneOpacity = useSpring(
    useTransform(scrollYProgress, [0, 0.22, 0.42, 0.55], [1, 1, 0.35, 0]),
    smooth
  );

  const imageTwoOpacity = useSpring(
    useTransform(scrollYProgress, [0.24, 0.42, 0.62, 1], [0, 0.45, 1, 1]),
    smooth
  );

  const imageOneBlur = useTransform(scrollYProgress, [0, 0.32, 0.55], [0, 1.5, 6]);
  const imageTwoBlur = useTransform(scrollYProgress, [0.22, 0.42, 0.62], [8, 3, 0]);

  const imageOneFilter = useTransform(
    imageOneBlur,
    (v) => `contrast(1.03) brightness(0.94) blur(${v}px)`
  );

  const imageTwoFilter = useTransform(
    imageTwoBlur,
    (v) => `brightness(0.98) blur(${v}px)`
  );

  const imageTwoY = useSpring(
    useTransform(scrollYProgress, [0.22, 0.42, 0.62], [14, 6, 0]),
    smooth
  );

  return (
    <div ref={ref} className="aboutVisualStageWrap" aria-hidden="true">
      <motion.div className="aboutVisualStageGlow" style={{ opacity: glowOpacity }} />

      <motion.div
        className="aboutVisualStage"
        style={{ rotate, y, scale }}
      >
        <motion.img
          className="aboutVisualImage aboutVisualImagePrimary"
          src="/images/project2.jpeg"
          alt=""
          style={{
            opacity: imageOneOpacity,
            filter: imageOneFilter,
          }}
        />

        <motion.img
          className="aboutVisualImage aboutVisualImageSecondary"
          src="/images/project6.jpeg"
          alt=""
          style={{
            opacity: imageTwoOpacity,
            y: imageTwoY,
            filter: imageTwoFilter,
          }}
        />

        <div className="aboutVisualOverlay" />

        <div className="aboutVisualMeta">
          <p>Original Work</p>
          <h3>Luxury Residential Development</h3>
        </div>
      </motion.div>
    </div>
  );
}