import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Theme = 'light' | 'dark';

type ThemeSwitcherProps = {
  onToggle?: () => void;
};

const themeIcons: Record<Theme, string> = {
  light: '☀️',
  dark: '🌙',
};

const themeLabels: Record<Theme, string> = {
  light: 'Light',
  dark: 'Dark',
};

export function ThemeSwitcher({ onToggle }: ThemeSwitcherProps) {
  const [theme, setTheme] = useState<Theme>('light');
  const [isHydrated, setIsHydrated] = useState(false);

  // Get current theme from DOM
  useEffect(() => {
    const html = document.documentElement;
    const currentTheme = html.classList.contains('dark') ? 'dark' : 'light';
    setTheme(currentTheme);
    setIsHydrated(true);
  }, []);

  // Listen for theme changes
  useEffect(() => {
    const handleThemeChange = () => {
      const html = document.documentElement;
      const newTheme = html.classList.contains('dark') ? 'dark' : 'light';
      setTheme(newTheme);
    };

    window.addEventListener('storage', handleThemeChange);
    // Also listen for direct class mutations (for theme toggle from other sources)
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => {
      window.removeEventListener('storage', handleThemeChange);
      observer.disconnect();
    };
  }, []);

  const handleToggle = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    onToggle?.();
  };

  if (!isHydrated) {
    return null;
  }

  return (
    <motion.button
      className="themeSwitcher"
      onClick={handleToggle}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      type="button"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
    >
      {/* ICON WITH ROTATION ANIMATION */}
      <motion.span
        className="themeSwitcherIcon"
        key={theme}
        initial={{ rotateZ: -90, scale: 0.5, opacity: 0 }}
        animate={{ rotateZ: 0, scale: 1, opacity: 1 }}
        exit={{ rotateZ: 90, scale: 0.5, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 40 }}
      >
        {themeIcons[theme]}
      </motion.span>

      {/* LABEL */}
      <span className="themeSwitcherLabel">
        <motion.span
          key={`label-${theme}`}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.2 }}
        >
          {themeLabels[theme]}
        </motion.span>
      </span>

      {/* BACKGROUND GLOW EFFECT ON TOGGLE */}
      <motion.div
        className="themeSwitcherGlow"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0 }}
        transition={{ duration: 0.5 }}
      />
    </motion.button>
  );
}
