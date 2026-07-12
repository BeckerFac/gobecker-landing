// Landing copy v2 - single source of truth.
// Fuente: blueprint-v2 (3 variantes + juez, angulo ganador: plata visible). Precio US$ 70/mes.

export interface BentoFeature {
  id: string;
  kicker: string;
  title: string;
  body: string;
  bullets: string[];
  accent: string;
  shot?: string;
  span: 'lg' | 'sm';
}

export interface FaqItem {
  q: string;
  a: string;
}

export const REGISTER_URL = 'https://app.gobecker.com.ar/register';
export const LOGIN_URL = 'https://app.gobecker.com.ar';
export const WA_NUMBER = '5491131762296';
export const WA_URL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  'Hola! Tengo una casa de tecnologia y quiero saber mas de GoBecker.'
)}`;

export const copy = {
  meta_seo: {
    title: 'GoBecker | Gestor para casas de tecnología en Argentina',
    description:
      'Stock con IMEI valorizado al blue en USD y ARS, POS, reparaciones y plan canje. 7 días gratis sin tarjeta. US$ 70/mes, plan único todo incluido.',
  },
  hero: {
    badge: 'Cotización blue en vivo',
    headline: 'Toda la plata del local, en un número.',
    subheadline:
      'Abrís GoBecker y ves cuánto vale tu stock hoy, en dólares y en pesos al blue. Equipo por equipo, cada uno con su IMEI.',
    cta_primary: 'Probalo 7 días gratis',
    cta_secondary: 'Escribinos por WhatsApp',
    micro: '7 días gratis · Sin tarjeta · Después US$ 70/mes',
  },
  social_proof: {
    title: 'Lo que podés verificar antes de pagar',
    items: [
      'Precio publicado: US$ 70 por mes, plan único',
      '7 días de prueba sin pedir tarjeta',
      'Sin permanencia: te vas cuando quieras',
      'Soporte por WhatsApp, atiende una persona',
    ],
  },
  demo: {
    kicker: 'Producto',
    title: 'Miralo andando, no en un folleto',
    sub: 'Videos y capturas reales de una tienda demo. Sin retoques y sin pedirte el mail para verlo.',
    videos: [
      {
        id: 'recorrida',
        title: 'Recorrida: dashboard, stock, taller y reportes',
        poster: '/shots/reparaciones.webp',
        src: '/videos/recorrida.mp4',
      },
      {
        id: 'venta',
        title: 'Una venta: buscás el IMEI y cobrás',
        poster: '/shots/venta-modal.webp',
        src: '/videos/venta.mp4',
      },
    ],
    gallery: [
      { shot: '/shots/analytics.webp', caption: 'Reportes: total operado del mes, ventas y servicio técnico' },
      { shot: '/shots/ventas-lista.webp', caption: 'Cada venta con su cliente, su pago y su estado' },
    ],
  },
  features: [
    {
      id: 'inventario',
      kicker: 'Stock',
      title: 'Tu stock, valorizado al blue',
      body:
        'Cada equipo entra con su IMEI o serie y se valoriza al blue en vivo, en dólares y pesos. Abrís el stock y ves cuánta plata hay adentro, hoy.',
      bullets: ['Cotización blue en vivo', 'IMEI o serie por equipo'],
      accent: 'var(--color-green)',
      shot: '/shots/inventario.webp',
      span: 'lg',
    },
    {
      id: 'reparaciones',
      kicker: 'Taller',
      title: 'El taller sin papelitos',
      body:
        'Cada reparación avanza por estados, de recibido a entregado, con su orden de trabajo y garantía en PDF. El cliente pregunta, vos mirás la pantalla.',
      bullets: ['OT por cada equipo', 'Certificado de garantía en PDF'],
      accent: 'var(--color-acc-orange)',
      shot: '/shots/reparaciones.webp',
      span: 'sm',
    },
    {
      id: 'pos',
      kicker: 'Mostrador',
      title: 'Cargás el IMEI y cobrás',
      body:
        'Buscás por IMEI, cobrás y sale el comprobante con el logo de tu negocio. El stock se descuenta solo.',
      bullets: ['Venta rápida por IMEI', 'Comprobantes con tu logo'],
      accent: 'var(--color-acc-blue)',
      shot: '/shots/venta-modal.webp',
      span: 'sm',
    },
    {
      id: 'canje',
      kicker: 'Plan canje',
      title: 'El usado entra como pago',
      body:
        'El usado entra derecho al stock con su IMEI, listo para revender. Queda anotado quién lo trajo y a cuánto lo tomaste.',
      bullets: ['Entra al stock con IMEI', 'Historial de cada canje'],
      accent: 'var(--color-acc-purple)',
      span: 'sm',
    },
    {
      id: 'control',
      kicker: 'Números',
      title: 'Ganancia real, no la del cuaderno',
      body:
        'Ingresos, costos, ganancia bruta y neta, y cuánto reinvertiste. Cuentas corrientes y comisiones de vendedores y técnicos, calculadas solas.',
      bullets: ['Ganancia bruta y neta', 'Comisiones por vendedor y técnico'],
      accent: 'var(--color-acc-pink)',
      shot: '/shots/analytics.webp',
      span: 'sm',
    },
  ] as BentoFeature[],
  para_quien: {
    kicker: 'Para quién es',
    title: 'Tres mostradores, el mismo problema',
    cards: [
      {
        title: 'Revendedor de iPhone',
        body:
          'Comprás en dólares, cobrás en pesos y el blue no para: tu stock queda valorizado en vivo, cada equipo con su IMEI.',
      },
      {
        title: 'Tienda multi-marca',
        body:
          'Celulares, notebooks y accesorios en un solo stock, con venta rápida por mostrador y cuentas corrientes por cliente.',
      },
      {
        title: 'Servicio técnico',
        body:
          'Cada equipo que entra tiene su orden de trabajo, su estado en el board y su garantía en PDF para el cliente.',
      },
    ],
  },
  pricing: {
    kicker: 'Precio a la vista',
    title: 'Un plan. Un precio. Todo adentro.',
    sub: 'Otros gestores te hacen pedir una demo para saber cuánto salen. Acá lo ves de entrada, sin sorpresas.',
    plan_name: 'Plan único',
    price_line: 'US$ 70',
    includes: [
      'Equipos ilimitados con IMEI',
      'Stock valorizado con blue en vivo',
      'POS, remitos y garantías con tu logo',
      'Board de reparaciones con OT',
      'Plan canje de usados',
      'Tablero de ganancia y costos',
      'Cuentas corrientes y comisiones',
      'Facturación AFIP/ARCA opcional',
    ],
    trial_line: 'Probalo 7 días gratis. Sin tarjeta, sin permanencia.',
    cta: 'Empezar gratis',
    micro: 'Cancelás cuando quieras. Soporte humano por WhatsApp.',
  },
  faq: [
    {
      q: '¿Es difícil de aprender?',
      a: 'No. Si manejás WhatsApp, manejás GoBecker. Cargás un equipo, lo vendés y sale el comprobante. Eso es todo. Anda en el navegador de la compu, la tablet o el celular, sin instalar nada. Y si te trabás, te contesta una persona por WhatsApp, no un bot.',
    },
    {
      q: '¿Mis datos están seguros?',
      a: 'Sí. Tus datos quedan en tu cuenta, en la nube, no en una compu que se puede romper. Solo entra tu equipo, cada uno con su propia clave y sus permisos. Tus números son tuyos.',
    },
    {
      q: '¿Estoy obligado a facturar con AFIP/ARCA?',
      a: 'No. GoBecker funciona completo sin certificados. La facturación AFIP/ARCA es opcional: si un día la querés, la activás. Mientras tanto vendés igual, con tus comprobantes y garantías.',
    },
    {
      q: '¿Por qué cobran en dólares y cuánto sale?',
      a: 'Sale US$ 70 por mes, plan único, todo incluido. Sin extras ni planes escondidos. Está en dólares por lo mismo que tu stock: los equipos se cotizan en dólares, así el precio no salta con cada corrida del peso.',
    },
    {
      q: '¿Qué pasa cuando se terminan los 7 días?',
      a: 'Nada raro. Como no dejaste tarjeta, no hay cobro sorpresa. Si te sirvió, pagás US$ 70 por mes y seguís con todo lo que cargaste. Si no, no pagás nada y listo.',
    },
    {
      q: 'Uso Excel y cuaderno hace años. ¿Cómo paso todo?',
      a: 'Arrancás cargando los equipos que tenés hoy: IMEI, costo y listo. En una tarde tenés el stock adentro, valorizado en dólares y pesos. Los clientes y las cuentas los sumás de a poco. Y si te complicás, te damos una mano por WhatsApp.',
    },
  ] as FaqItem[],
  cta_final: {
    title: '¿Cuánta plata hay en tu local hoy?',
    sub: 'Cargá tus equipos esta tarde y a la noche ya tenés el número. 7 días gratis, sin tarjeta.',
    cta: 'Probar GoBecker gratis',
  },
};
