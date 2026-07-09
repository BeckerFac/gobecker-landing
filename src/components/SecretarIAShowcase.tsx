import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const spring = { type: 'spring', stiffness: 80, damping: 18 };

interface Message {
  from: 'ai' | 'user';
  text: string;
  time: string;
  attachment?: string;
}

const conversation: Message[] = [
  {
    from: 'ai',
    text: '☀️ Buenos dias! Tu resumen del dia:\n\n📊 Ventas ayer: $1.847.200 (+12% vs semana pasada)\n⚠️ 3 facturas vencidas por $341.000\n📦 Stock bajo: Resma A4 (quedan 8 un.)\n🔄 Pipeline: 2 oportunidades por cerrar\n💰 Cheque de Martinez vence mañana ($180.000)',
    time: '08:00',
  },
  {
    from: 'user',
    text: 'Cuanto me debe Gonzalez?',
    time: '08:02',
  },
  {
    from: 'ai',
    text: 'Papelera Gonzalez S.R.L. tiene un saldo pendiente de $247.500:\n\n• FC A-0001-00234: $127.500 (vencida hace 15 dias)\n• FC A-0001-00241: $120.000 (vence en 5 dias)\n\nQueres que le envie un recordatorio?',
    time: '08:02',
  },
  {
    from: 'user',
    text: 'Si, y mandame la factura 234',
    time: '08:03',
  },
  {
    from: 'ai',
    text: 'Listo! Recordatorio enviado a Gonzalez.\n📎 FC A-0001-00234 adjunta:',
    time: '08:03',
    attachment: 'Factura_A-0001-00234.pdf',
  },
];

function ChatBubble({ msg, index }: { msg: Message; index: number }) {
  const isAI = msg.from === 'ai';

  return (
    <motion.div
      className={`flex ${isAI ? 'justify-start' : 'justify-end'}`}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ ...spring, delay: 0.8 + index * 0.4 }}
    >
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
          isAI
            ? 'bg-[#1a1a2e] text-text-primary rounded-tl-md'
            : 'bg-accent/20 text-text-primary rounded-tr-md'
        }`}
      >
        <pre className="whitespace-pre-wrap font-sans">{msg.text}</pre>
        {msg.attachment && (
          <div className="mt-2 flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
            <svg className="w-5 h-5 text-red-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8" fill="none" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span className="text-xs text-text-secondary">{msg.attachment}</span>
          </div>
        )}
        <div className={`text-[10px] mt-1 ${isAI ? 'text-text-muted' : 'text-accent-light/60'}`}>
          {msg.time}
        </div>
      </div>
    </motion.div>
  );
}

export default function SecretarIAShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [showMessages, setShowMessages] = useState(false);

  useEffect(() => {
    if (isInView) setShowMessages(true);
  }, [isInView]);

  return (
    <section ref={ref} className="py-28 px-6 section-alt">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ ...spring, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full mb-5">
              <span className="w-2 h-2 bg-accent-secondary rounded-full animate-pulse" />
              <span className="text-xs text-accent-secondary font-medium">Exclusivo GoBecker</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Tu secretaria de negocios.{' '}
              <span className="text-accent-light">En tu WhatsApp.</span>
            </h2>

            <p className="text-text-secondary leading-relaxed mb-8">
              SecretarIA es una inteligencia artificial que conoce tu negocio entero.
              Te avisa lo importante, responde tus consultas y te envia documentos.
              Todo desde el chat que ya usas todos los dias.
            </p>

            <ul className="space-y-4">
              {[
                {
                  icon: '📊',
                  title: 'Resumen matutino automatico',
                  desc: 'Cada manana recibis ventas, cobros pendientes, stock bajo y oportunidades abiertas.',
                },
                {
                  icon: '💬',
                  title: 'Consultas por texto o voz',
                  desc: '"Cuanto me debe Perez?", "Cuantas resmas vendi este mes?" — responde en segundos.',
                },
                {
                  icon: '📎',
                  title: 'Envia documentos al instante',
                  desc: 'Facturas, remitos, reportes Excel. Pedilo por chat y te lo manda como PDF.',
                },
                {
                  icon: '🔔',
                  title: 'Alertas proactivas',
                  desc: 'Cheques por vencer, clientes morosos, stock critico. Te avisa antes de que sea tarde.',
                },
              ].map((item, i) => (
                <motion.li
                  key={item.title}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ ...spring, delay: 0.4 + i * 0.1 }}
                >
                  <span className="text-lg mt-0.5">{item.icon}</span>
                  <div>
                    <div className="text-sm font-semibold text-text-primary">{item.title}</div>
                    <div className="text-sm text-text-secondary">{item.desc}</div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: WhatsApp Chat Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ ...spring, delay: 0.3 }}
          >
            <div className="glass-card rounded-2xl overflow-hidden max-w-sm mx-auto lg:ml-auto">
              {/* WhatsApp Header */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-[#0a0a1a]">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-text-primary">SecretarIA</div>
                  <div className="text-[10px] text-success">en linea</div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="p-4 space-y-3 max-h-[480px] overflow-y-auto bg-[#050510]/50">
                {showMessages &&
                  conversation.map((msg, i) => (
                    <ChatBubble key={i} msg={msg} index={i} />
                  ))}
              </div>

              {/* Input Bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-t border-border bg-[#0a0a1a]">
                <div className="flex-1 bg-white/5 rounded-full px-4 py-2 text-xs text-text-muted">
                  Escribi un mensaje...
                </div>
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-accent-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
