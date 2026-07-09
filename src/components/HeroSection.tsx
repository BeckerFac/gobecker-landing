import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import MeshGradientBackground from './MeshGradientBackground';
import HeroVideoReveal from './HeroVideoReveal';

const WA = '5491131762296';
const WA_MSG = encodeURIComponent('Hola! Me interesa GoBecker para mi negocio. Quiero más información.');

// Shared spring physics — snappy but natural
const spring = { type: 'spring' as const, stiffness: 80, damping: 20 };

// Staggered blur-in entrance: each element clears blur + fades + rises
// Delays: badge 0.1, headline 0.25, sub 0.45, CTAs 0.65, trust 0.85
function blurIn(delay: number) {
  return {
    initial: { opacity: 0, y: 24, filter: 'blur(10px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { ...spring, delay },
  };
}

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const gradientOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-dvh flex flex-col items-center justify-center pt-28 pb-12 overflow-hidden"
    >
      {/* Layer 0: Premium dark gradient */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          opacity: gradientOpacity,
          background: 'linear-gradient(160deg, #08111F 0%, #0B1928 30%, #0E1F35 60%, #0B1928 100%)',
        }}
      />

      {/* Layer 0.5: Subtle depth lines */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(43,108,176,0.07) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(201,150,59,0.04) 0%, transparent 40%)',
        }}
      />

      {/* Layer 0.75: Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] z-[2]"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(201,150,59,0.3) 50%, transparent 100%)',
        }}
      />

      {/* Layer 1: Noise texture for depth */}
      <div className="noise-overlay absolute inset-0 z-[1] pointer-events-none" />

      {/* Layer 3: Content */}
      <motion.div
        className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center"
        style={{ y: textY, opacity: textOpacity }}
      >
        {/* Badge — enters first */}
        <motion.div
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-10"
          style={{ background: 'rgba(201,150,59,0.08)', border: '1px solid rgba(201,150,59,0.2)' }}
          {...blurIn(0.1)}
        >
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="text-sm text-accent-light tracking-wide font-medium">
            Mas de 400 PyMEs ya gestionan con GoBecker
          </span>
        </motion.div>

        {/* Headline — serif + sans mix for elegance */}
        <motion.h1
          className="mb-8"
          {...blurIn(0.25)}
        >
          <span
            className="block text-white font-light tracking-wide uppercase"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(0.85rem, 1.2vw, 1rem)', letterSpacing: '0.25em', marginBottom: '1.2rem', opacity: 0.6 }}
          >
            Gestion comercial inteligente
          </span>
          <span
            className="block text-white leading-[1.05] tracking-[-0.02em]"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.8rem, 5.5vw, 4.8rem)', fontWeight: 800 }}
          >
            Factura, cobra y controla
          </span>
          <span
            className="block leading-[1.05] tracking-[-0.02em]"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.8rem, 5.5vw, 4.8rem)', fontWeight: 800 }}
          >
            <span className="text-white">tu negocio </span>
            <span className="text-[#D97706] italic">sin esfuerzo</span>
          </span>
        </motion.h1>

        {/* Sub-headline — concrete benefits */}
        <motion.p
          className="text-lg md:text-xl text-[#8B9DC3] max-w-2xl mx-auto mb-6 leading-relaxed"
          {...blurIn(0.4)}
        >
          El sistema de gestion que conecta tu facturacion AFIP, tus cobranzas y tus pedidos en un solo lugar.{' '}
          <strong className="text-white">Sin planillas. Sin errores. Sin perder ventas.</strong>
        </motion.p>

        {/* Value metrics — concrete numbers */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-8 mb-10"
          {...blurIn(0.55)}
        >
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-accent">-70%</p>
            <p className="text-xs text-[#8B9DC3] mt-1">tiempo en facturar</p>
          </div>
          <div className="w-px h-10 bg-[#1E3454]" />
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-white">100%</p>
            <p className="text-xs text-[#8B9DC3] mt-1">integrado con AFIP</p>
          </div>
          <div className="w-px h-10 bg-[#1E3454]" />
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-accent">24/7</p>
            <p className="text-xs text-[#8B9DC3] mt-1">asistente IA por WhatsApp</p>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          {...blurIn(0.65)}
        >
          <motion.a
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener"
            className="bg-[#D97706] hover:bg-[#B45309] text-white px-10 py-4 rounded-lg text-base font-bold transition-all w-full sm:w-auto flex items-center justify-center gap-2.5 shadow-lg shadow-[#D97706]/25"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Solicitar demo gratuita
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </motion.a>
          <motion.a
            href="#demo"
            className="text-[#8B9DC3] hover:text-white px-7 py-4 rounded-lg text-base font-medium transition-all flex items-center gap-2 border border-[#1E3454] hover:border-[#2B6CB0]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
            </svg>
            Ver como funciona
          </motion.a>
        </motion.div>

        {/* Trust bar — credentials */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 text-xs"
          {...blurIn(0.8)}
        >
          <span className="flex items-center gap-1.5 text-[#5A7A9E]">
            <svg className="w-3.5 h-3.5 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
            Certificado AFIP
          </span>
          <span className="text-[#1E3454]">|</span>
          <span className="flex items-center gap-1.5 text-[#5A7A9E]">
            <svg className="w-3.5 h-3.5 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
            </svg>
            Datos encriptados
          </span>
          <span className="text-[#1E3454]">|</span>
          <span className="flex items-center gap-1.5 text-[#5A7A9E]">
            <svg className="w-3.5 h-3.5 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zm0 13a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zm0-8a3 3 0 100 6 3 3 0 000-6zm5.657-1.596a.75.75 0 010 1.06l-1.061 1.06a.75.75 0 11-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zm-9.193 9.192a.75.75 0 010 1.06l-1.06 1.061a.75.75 0 11-1.061-1.06l1.06-1.061a.75.75 0 011.061 0z" />
            </svg>
            14 dias gratis
          </span>
        </motion.div>
      </motion.div>

      {/* Video with 3D scroll reveal — below the fold */}
      <div className="relative z-10 w-full mt-16">
        <HeroVideoReveal scrollYProgress={scrollYProgress} />
      </div>
    </section>
  );
}
