import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function GlobalCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Check if device is mobile
    const isMobile = window.innerWidth <= 860;
    if (isMobile) return;

    // 🔥 SET INITIAL STATE (IMPORTANT)
    gsap.set(cursor, {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      scale: 1,
    });

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: 'power2.out',
      });
    };

    const grow = () => {
      gsap.to(cursor, { scale: 1.8, duration: 0.2 });
    };

    const shrink = () => {
      gsap.to(cursor, { scale: 1, duration: 0.2 });
    };

    window.addEventListener('mousemove', moveCursor);

    const hoverables = document.querySelectorAll(
      'a, button, input, textarea, [role="button"]'
    );

    hoverables.forEach((el) => {
      el.addEventListener('mouseenter', grow);
      el.addEventListener('mouseleave', shrink);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);

      hoverables.forEach((el) => {
        el.removeEventListener('mouseenter', grow);
        el.removeEventListener('mouseleave', shrink);
      });
    };
  }, []);

  return <div ref={cursorRef} className="globalCursor" />;
}