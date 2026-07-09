import { useRef } from 'react';
import { motion } from 'framer-motion';

interface Props {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  external?: boolean;
}

export default function ShinyButton({ href, children, variant = 'primary', className = '', external = true }: Props) {
  const btnRef = useRef<HTMLAnchorElement>(null);

  function handleMouse(e: React.MouseEvent) {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    btn.style.setProperty('--shine-x', `${e.clientX - rect.left}px`);
    btn.style.setProperty('--shine-y', `${e.clientY - rect.top}px`);
  }

  const base = variant === 'primary'
    ? 'shiny-btn bg-accent hover:bg-accent-light text-[#0B1D3A]'
    : 'shiny-btn glass text-text-primary hover:border-border-hover';

  return (
    <motion.a
      ref={btnRef}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener' : undefined}
      className={`${base} relative overflow-hidden px-8 py-4 rounded-xl font-bold transition-colors inline-flex items-center justify-center gap-2 ${className}`}
      onMouseMove={handleMouse}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.a>
  );
}
