import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type AnimatedTextProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'div' | 'span';
};

export function AnimatedText({
  children,
  className = '',
  delay = 0,
  as = 'div',
}: AnimatedTextProps) {
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 34, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.42 }}
      transition={{
        duration: 1.15,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}