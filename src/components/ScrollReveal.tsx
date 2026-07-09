import { motion, useInView } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

type Variant = 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scale' | 'rotate3d';

const variants: Record<Variant, { hidden: object; visible: object }> = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
  rotate3d: {
    hidden: { opacity: 0, rotateX: 10, y: 50, filter: 'blur(4px)' },
    visible: { opacity: 1, rotateX: 0, y: 0, filter: 'blur(0px)' },
  },
};

interface Props {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.7,
  className = '',
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={variant === 'rotate3d' ? { perspective: '800px' } : undefined}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants[variant]}
      transition={{
        type: 'spring',
        stiffness: 80,
        damping: 18,
        delay,
        duration,
      }}
    >
      {children}
    </motion.div>
  );
}
