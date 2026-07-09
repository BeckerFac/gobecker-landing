import { motion, useTransform, type MotionValue } from 'framer-motion';
import { useDeviceCapability } from '../hooks/useDeviceCapability';

interface Props {
  scrollYProgress: MotionValue<number>;
}

export default function HeroVideoReveal({ scrollYProgress }: Props) {
  const { isTouchDevice } = useDeviceCapability();

  // 3D perspective transforms driven by scroll
  const rotateX = useTransform(scrollYProgress, [0.05, 0.5], [8, 0]);
  const scale = useTransform(scrollYProgress, [0.05, 0.5], [0.92, 1]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.15], [0.7, 1]);
  const shadowSpread = useTransform(scrollYProgress, [0.05, 0.5], [20, 60]);

  // On mobile, skip 3D transforms
  const mobileStyle = isTouchDevice
    ? {}
    : {
        rotateX,
        scale,
      };

  return (
    <div
      className="w-full max-w-5xl mx-auto mt-12 md:mt-16 px-4"
      style={{ perspective: isTouchDevice ? 'none' : '1200px' }}
    >
      <motion.div
        className="video-frame glass rounded-2xl overflow-hidden"
        style={{
          opacity: videoOpacity,
          ...mobileStyle,
          transformOrigin: 'center top',
        }}
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-3 px-5 py-3 border-b border-border">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
          </div>
          <div className="flex-1 bg-bg-primary/50 rounded-md px-4 py-1.5 text-xs text-text-muted font-mono">
            app.gobecker.com.ar
          </div>
        </div>

        {/* Video */}
        <div className="relative bg-bg-primary">
          <video
            id="demo-video"
            className="w-full block"
            preload="metadata"
            controls
            playsInline
          >
            <source src="/demo.mp4" type="video/mp4" />
          </video>
          <div
            id="play-overlay"
            className="absolute inset-0 flex items-center justify-center bg-bg-primary/40 cursor-pointer transition-opacity hover:bg-bg-primary/20"
          >
            <div className="w-20 h-20 rounded-full bg-accent/90 flex items-center justify-center shadow-lg shadow-accent/40 transition-transform hover:scale-110">
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
