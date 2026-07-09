import { useEffect, useState, type CSSProperties } from 'react';
import { motion, type MotionValue } from 'framer-motion';
import { useDeviceCapability } from '../hooks/useDeviceCapability';

interface Props {
  className?: string;
  opacity?: MotionValue<number>;
}

// Lazy-load the mesh gradient to avoid SSR issues
function MeshCanvas() {
  const [MeshGradient, setMeshGradient] = useState<React.ComponentType<any> | null>(null);

  useEffect(() => {
    import('@mesh-gradient/react').then((mod) => {
      setMeshGradient(() => mod.MeshGradient ?? mod.default);
    }).catch(() => {
      // If import fails, fallback will show
    });
  }, []);

  if (!MeshGradient) return null;

  return (
    <MeshGradient
      colors={[
        '#0B1D3A', // navy deep (brand primary)
        '#162D50', // navy medium
        '#2B6CB0', // blue intelligent
        '#1A3A5C', // navy mid
        '#0F2341', // navy hero
        '#C9963B', // gold accent (subtle)
        '#0B1D3A', // navy deep repeat
        '#1E3A5F', // blue-navy
        '#0F2341', // navy base
      ]}
      speed={0.3}
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  );
}

// CSS fallback gradient (matches the existing .stripe-gradient style)
function CSSFallback() {
  const style: CSSProperties = {
    position: 'absolute',
    inset: 0,
    background: `
      radial-gradient(ellipse at 20% 50%, rgba(43,108,176,0.15) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 20%, rgba(201,150,59,0.08) 0%, transparent 50%),
      radial-gradient(ellipse at 40% 80%, rgba(22,45,80,0.12) 0%, transparent 50%),
      radial-gradient(ellipse at 70% 60%, rgba(43,108,176,0.06) 0%, transparent 50%)
    `,
  };

  return <div style={style} />;
}

export default function MeshGradientBackground({ className = '', opacity }: Props) {
  const { supportsWebGL, isLowEndDevice, prefersReducedMotion } = useDeviceCapability();

  const canRenderMesh = supportsWebGL && !isLowEndDevice && !prefersReducedMotion;

  return (
    <motion.div
      className={`absolute inset-0 z-0 overflow-hidden ${className}`}
      style={{ opacity: opacity ?? 1 }}
    >
      {canRenderMesh ? <MeshCanvas /> : <CSSFallback />}
    </motion.div>
  );
}
