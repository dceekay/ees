import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
};

export function Button({ children, href, className = '' }: ButtonProps) {
  if (href) {
    return (
      <a href={href}>
        <button type="button" className={className}>
          {children}
        </button>
      </a>
    );
  }

  return (
    <button type="button" className={className}>
      {children}
    </button>
  );
}