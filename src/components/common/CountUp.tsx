import { useEffect, useState } from 'react';

type CountUpProps = {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
};

export function CountUp({
  end,
  duration = 1400,
  suffix = '',
  prefix = '',
}: CountUpProps) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (end <= 0) {
      setValue(end);
      return;
    }

    const totalSteps = 40;
    const stepDuration = Math.max(20, Math.floor(duration / totalSteps));
    const increment = end / totalSteps;

    let current = 0;

    const timer = window.setInterval(() => {
      current += increment;

      if (current >= end) {
        setValue(end);
        window.clearInterval(timer);
      } else {
        setValue(Math.round(current));
      }
    }, stepDuration);

    return () => window.clearInterval(timer);
  }, [end, duration]);

  return (
    <span>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}