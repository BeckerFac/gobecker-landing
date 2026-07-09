import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  {
    label: 'Elegí el cliente',
    description: 'CUIT se valida automaticamente contra AFIP',
    visual: (
      <div className="space-y-2">
        <div className="glass rounded-lg p-3 flex items-center gap-3 border-accent/30" style={{ borderColor: 'rgba(99,102,241,0.3)' }}>
          <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-xs font-bold text-accent">PG</div>
          <div className="flex-1">
            <div className="text-sm font-medium">Papelera Gonzalez S.R.L.</div>
            <div className="text-xs text-text-muted">CUIT: 30-71234567-8</div>
          </div>
          <span className="text-success text-xs flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            Validado
          </span>
        </div>
        <div className="glass rounded-lg p-3 flex items-center gap-3 opacity-50">
          <div className="w-8 h-8 rounded bg-accent-secondary/20 flex items-center justify-center text-xs font-bold text-accent-secondary">ML</div>
          <div className="flex-1">
            <div className="text-sm font-medium">Martinez Luis</div>
            <div className="text-xs text-text-muted">CUIT: 20-34567891-5</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: 'Agregá productos',
    description: 'Precios, IVA y stock se calculan automaticamente',
    visual: (
      <div className="space-y-2">
        <div className="glass rounded-lg p-3 flex items-center justify-between">
          <div>
            <div className="text-sm font-medium">Resma A4 75g x500</div>
            <div className="text-xs text-text-muted">Stock: 142 | IVA 21%</div>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium">$4.200</div>
            <div className="text-xs text-text-muted">x 10</div>
          </div>
        </div>
        <div className="glass rounded-lg p-3 flex items-center justify-between">
          <div>
            <div className="text-sm font-medium">Toner HP 85A</div>
            <div className="text-xs text-text-muted">Stock: 23 | IVA 21%</div>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium">$18.500</div>
            <div className="text-xs text-text-muted">x 2</div>
          </div>
        </div>
        <div className="border-t border-border pt-2 flex justify-between text-sm">
          <span className="text-text-muted">Total con IVA:</span>
          <span className="font-bold text-text-primary">$93.654,00</span>
        </div>
      </div>
    ),
  },
  {
    label: 'Factura emitida',
    description: 'CAE obtenido de AFIP en 3 segundos',
    visual: (
      <div className="glass rounded-lg p-4 border-success/30 text-center" style={{ borderColor: 'rgba(16,185,129,0.3)' }}>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
        >
          <div className="w-14 h-14 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-3">
            <svg className="w-7 h-7 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
          </div>
        </motion.div>
        <div className="text-success font-bold text-sm mb-1">Factura A emitida</div>
        <div className="text-xs text-text-muted space-y-0.5">
          <div>CAE: 74521340827156</div>
          <div>Vto: 27/03/2026</div>
          <div className="text-text-secondary font-medium mt-1">Tiempo: 3.2 segundos</div>
        </div>
      </div>
    ),
  },
];

export default function AfipMiniDemo() {
  const [step, setStep] = useState(0);

  return (
    <div className="glass rounded-2xl p-6 md:p-8">
      <div className="text-center mb-6">
        <span className="text-accent text-xs font-semibold uppercase tracking-widest">Demo interactiva</span>
        <h3 className="text-xl font-bold mt-1">Probá crear una factura</h3>
      </div>

      {/* Step indicators */}
      <div className="flex items-center justify-center gap-2 mb-6">
        {steps.map((s, i) => (
          <button
            key={i}
            onClick={() => setStep(i)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              i === step
                ? 'bg-accent/20 text-accent-light border border-accent/30'
                : i < step
                  ? 'text-success'
                  : 'text-text-muted'
            }`}
          >
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
              i === step ? 'bg-accent text-white' : i < step ? 'bg-success/20 text-success' : 'bg-white/5'
            }`}>
              {i < step ? '✓' : i + 1}
            </span>
            <span className="hidden sm:inline">{s.label}</span>
          </button>
        ))}
      </div>

      {/* Step content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
          transition={{ type: 'spring', stiffness: 150, damping: 20 }}
        >
          <p className="text-text-secondary text-sm text-center mb-4">{steps[step].description}</p>
          <div className="max-w-sm mx-auto">{steps[step].visual}</div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex justify-center gap-3 mt-6">
        {step < 2 ? (
          <motion.button
            onClick={() => setStep(step + 1)}
            className="bg-accent hover:bg-accent-light text-white px-6 py-2 rounded-lg text-sm font-semibold transition-colors"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            {step === 0 ? 'Agregar productos' : 'Emitir factura'}
          </motion.button>
        ) : (
          <motion.button
            onClick={() => setStep(0)}
            className="glass text-text-primary px-6 py-2 rounded-lg text-sm font-medium"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Volver a empezar
          </motion.button>
        )}
      </div>
    </div>
  );
}
