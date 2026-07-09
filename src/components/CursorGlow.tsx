import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    // Only enable on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      el.style.display = 'none';
      return;
    }

    function handleMove(e: MouseEvent) {
      el!.style.setProperty('--glow-x', `${e.clientX}px`);
      el!.style.setProperty('--glow-y', `${e.clientY}px`);
      el!.style.opacity = '1';
    }

    function handleLeave() {
      el!.style.opacity = '0';
    }

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseleave', handleLeave);
    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="cursor-glow-overlay"
      style={{ opacity: 0 }}
      aria-hidden="true"
    />
  );
}
