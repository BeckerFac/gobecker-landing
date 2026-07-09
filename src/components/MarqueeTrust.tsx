import { motion } from 'framer-motion';

const items = [
  'Factura A/B/C',
  'CAE automatico',
  'AFIP/ARCA certificado',
  'Stock en tiempo real',
  'Portal de clientes',
  'Reportes live',
  'Validacion CUIT',
  'NC/ND',
  'Multi-empresa',
  'Import Excel',
  'Cotizaciones',
  'Timer produccion',
];

export default function MarqueeTrust() {
  return (
    <div className="relative overflow-hidden py-6 border-y border-border">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg-primary to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg-primary to-transparent z-10" />

      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-2 text-sm text-text-muted">
            <svg className="w-4 h-4 text-accent/50 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
