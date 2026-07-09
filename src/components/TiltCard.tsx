import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  glowColor?: string;
}

export default function TiltCard({ children, className = '', delay = 0, glowColor = 'rgba(99,102,241,0.15)' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [6, -6]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-6, 6]), { stiffness: 200, damping: 20 });
  const glowX = useTransform(x, [0, 1], ['0%', '100%']);
  const glowY = useTransform(y, [0, 1], ['0%', '100%']);

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  }

  function handleLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      className={`glass rounded-2xl relative overflow-hidden ${className}`}
      style={{
        perspective: '800px',
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0, y: 50, rotateX: 10 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ type: 'spring', stiffness: 80, damping: 18, delay }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      whileHover={{
        boxShadow: `0 20px 40px rgba(0,0,0,0.3), 0 0 40px ${glowColor}`,
      }}
    >
      {/* Dynamic glow that follows cursor */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([gx, gy]) => `radial-gradient(300px circle at ${gx} ${gy}, ${glowColor}, transparent 70%)`
          ),
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
