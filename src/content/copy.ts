// Landing copy - single source of truth.
// Fuente: blueprint-landing.md (juez sobre 3 variantes, angulo ganador: control-orden).

export interface Feature {
  id: string;
  kicker: string;
  title: string;
  body: string;
  bullets: string[];
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
      'Stock con IMEI valuado en USD y pesos, reparaciones ordenadas, plan canje y tu ganancia real en un solo lugar. Probá GoBecker 15 días gratis sin tarjeta.',
  },
  hero: {
    badge: 'Hecho en Argentina para casas de tecnología',
    headline: 'Cada equipo, cada peso, cada reparación: bajo control',
    subheadline:
      'El gestor para casas de tecnología: stock con IMEI valuado en USD y pesos, reparaciones ordenadas y tu ganancia real, en un solo lugar.',
    cta_primary: 'Probalo gratis 15 días',
    cta_secondary: 'Escribinos por WhatsApp',
    micro: '15 días gratis · Sin tarjeta · Cancelás cuando quieras',
  },
  social_proof: {
    title: 'Nacido atrás del mostrador, no en una oficina',
    items: [
      'Dólar blue, plan canje y fiados son parte del sistema, no un parche',
      'Soporte humano directo por WhatsApp, sin bots ni tickets',
      'Facturación AFIP/ARCA opcional: funciona completo con o sin certificados',
      '15 días gratis, sin tarjeta de crédito y sin permanencia',
    ],
  },
  demo: {
    kicker: 'Producto',
    title: 'Así se ve por dentro',
    sub: 'Capturas reales de una tienda demo. Lo que ves es el producto, sin retoques.',
    videos: [
      {
        id: 'recorrida',
        title: 'Recorrida completa por GoBecker',
        poster: '/shots/reparaciones.webp',
        src: '/videos/recorrida.mp4',
      },
      {
        id: 'venta',
        title: 'Una venta de punta a punta',
        poster: '/shots/venta-modal.webp',
        src: '/videos/venta.mp4',
      },
    ],
    gallery: [
      { shot: '/shots/analytics.webp', caption: 'Reportes: total operado del mes, ventas y servicio técnico' },
      { shot: '/shots/venta-detalle.webp', caption: 'Cada venta con su cliente, su pago y su PDF' },
    ],
  },
  features: [
    {
      id: 'inventario',
      kicker: 'Inventario',
      title: 'Sabé qué tenés y cuánto vale hoy',
      body:
        'Cada equipo entra con su IMEI o número de serie y no se pierde más de vista. El stock se valoriza en USD y pesos con la cotización blue actualizada en vivo: abrís el inventario y sabés cuánta plata tenés parada en el mostrador.',
      bullets: [
        'IMEI o número de serie por cada unidad',
        'Valorización en USD y ARS con el blue en vivo',
        'Celulares, notebooks, PCs y accesorios en un mismo stock',
      ],
      shot: '/shots/inventario-deep.webp',
    },
    {
      id: 'reparaciones',
      kicker: 'Servicio técnico',
      title: 'Cada reparación en su lugar, siempre',
      body:
        'Una reparación olvidada es plata que no entra. En el board del taller cada equipo pasa por seis estados, de recibido a entregado, con su orden de trabajo y un certificado de garantía en PDF con tu logo. El cliente pregunta y respondés al toque, sin revolver el cuaderno.',
      bullets: [
        'Board por estados: de recibido a entregado, todo a la vista',
        'Orden de trabajo por cada equipo que entra',
        'Certificado de garantía en PDF con el logo de tu taller',
      ],
      shot: '/shots/reparaciones.webp',
    },
    {
      id: 'pos',
      kicker: 'Ventas',
      title: 'Venta en segundos, comprobante con tu logo',
      body:
        'Un punto de venta pensado para el mostrador: buscás el equipo por IMEI, cargás el pago y listo. El comprobante, el remito y la garantía llevan el logo de tu negocio, no el de un sistema genérico. La imagen de una cadena, aunque atiendas vos solo.',
      bullets: [
        'Venta por IMEI o número de serie, unidad por unidad',
        'Comprobantes, remitos y garantías con tu marca',
        'Facturación AFIP/ARCA opcional; sin certificados, comprobantes internos igual de prolijos',
      ],
      shot: '/shots/venta-modal.webp',
    },
  ] as (Feature & { shot: string })[],
  features_cards: [
    {
      id: 'canje',
      kicker: 'Plan canje',
      title: 'Tomá usados como parte de pago',
      body:
        'El canje es pan de todos los días, pero mal registrado te come el margen. Con GoBecker el usado entra al stock con su IMEI, valorizado en USD y pesos, y la diferencia queda registrada en la misma venta. Deja de ser un cálculo mental arriba del mostrador.',
      bullets: [
        'El usado entra al inventario con su IMEI desde el primer momento',
        'Valor del usado descontado del total, claro para el cliente',
        'Todo el circuito del canje queda documentado en la misma operación',
      ],
    },
    {
      id: 'control',
      kicker: 'Números reales',
      title: 'Cuánto ganás de verdad, sin adivinar',
      body:
        'El dashboard separa flujo de caja, dinero líquido, reinvertido y ganancia real. Los fiados quedan en cuentas corrientes por cliente, y las comisiones de vendedores y técnicos se calculan solas, usuario por usuario. Los números claros, aunque el dólar se mueva.',
      bullets: [
        'Dashboard con caja, dinero líquido, reinvertido y ganancia real',
        'Cuentas corrientes: se acabaron los fiados sin control',
        'Multi-usuario con comisiones por vendedor y técnico',
      ],
    },
  ] as Feature[],
  para_quien: {
    kicker: 'Para quién es',
    title: 'Si vendés o reparás tecnología, es para vos',
    cards: [
      {
        title: 'Revendedor de iPhone',
        body:
          'Comprás y vendés en dólares, cobrás en pesos y el blue no para. Con stock valorizado en vivo e IMEI por unidad, sabés cuánto ganás en cada equipo, de verdad.',
      },
      {
        title: 'Tienda multi-marca',
        body:
          'Celulares, notebooks, PCs y accesorios en un solo sistema. Vendés rápido en el mostrador, tomás usados en parte de pago y cada comprobante sale con el logo de tu tienda.',
      },
      {
        title: 'Servicio técnico',
        body:
          'Cada equipo que entra al taller tiene su orden de trabajo, su estado y su historia. El cliente retira con certificado de garantía en PDF y tu taller queda como un negocio serio.',
      },
    ],
  },
  pricing: {
    kicker: 'Precio',
    title: 'Un solo plan, todo incluido',
    sub: 'Todas las funciones desde el primer día. Sin módulos que se cobren aparte, sin costos escondidos, sin permanencia.',
    plan_name: 'Plan único GoBecker',
    includes: [
      'POS de venta rápida con IMEI y número de serie',
      'Inventario valorizado en USD y ARS con dólar blue en vivo',
      'Board de reparaciones con órdenes de trabajo y garantías en PDF',
      'Plan canje: usados como parte de pago',
      'Cuentas corrientes e historial completo por cliente',
      'Comprobantes, remitos y garantías con tu logo',
      'Multi-usuario con comisiones de vendedores y técnicos',
      'Facturación AFIP/ARCA opcional y soporte humano por WhatsApp',
    ],
    trial_line: '15 días gratis, sin tarjeta',
    cta: 'Empezar prueba gratis',
    micro: 'Sin tarjeta de crédito · Sin permanencia · Cancelás cuando quieras',
  },
  faq: [
    {
      q: '¿Es difícil de aprender? Yo me manejo con Excel y cuaderno',
      a: 'No. Está pensado para gente que atiende un mostrador, no para contadores. Cargás tu primer equipo en minutos y vendés el mismo día. Y si te trabás, escribís al WhatsApp de soporte y te responde una persona real, no un bot.',
    },
    {
      q: '¿Mis datos están seguros?',
      a: 'Sí. Cada negocio tiene su espacio propio: tus datos son tuyos y nadie más los ve. La información viaja cifrada y queda guardada en la nube, no en una compu que se puede romper o perder. Entrás con tu usuario desde cualquier dispositivo.',
    },
    {
      q: '¿Necesito facturar con AFIP/ARCA sí o sí?',
      a: 'No. Si tenés certificados fiscales, facturás directo desde el sistema. Si no, emitís comprobantes internos igual de prolijos, con tu logo. Vos decidís cuándo dar ese paso: el sistema funciona completo en los dos casos.',
    },
    {
      q: '¿Cuánto sale?',
      a: 'Es un plan único con todo incluido: sin módulos aparte, sin costos escondidos y sin permanencia. Arrancás con 15 días gratis sin tarjeta y ves el precio claro antes de pagar. Si querés el número ya, escribinos por WhatsApp y te lo pasamos al toque.',
    },
    {
      q: '¿Funciona en el celular?',
      a: 'Sí. Anda en el navegador de cualquier dispositivo: celular, tablet o computadora, sin instalar nada. Podés cargar una venta parado en el mostrador o mirar la caja desde tu casa.',
    },
    {
      q: '¿Qué pasa cuando se terminan los 15 días de prueba?',
      a: 'Nada raro: como nunca pusiste tarjeta, no hay cobro automático. Si te sirvió, contratás el plan y seguís justo donde estabas, con todos tus datos cargados. Si no, no pagás nada y no te perseguimos.',
    },
    {
      q: 'Tengo todo en Excel y cuadernos, ¿cómo hago para pasarme?',
      a: 'De a poco y sin drama. Arrancá cargando el stock que tenés hoy y las reparaciones abiertas; el resto lo sumás con el día a día. Si necesitás una mano con la carga inicial, escribinos por WhatsApp y te acompañamos.',
    },
  ] as FaqItem[],
  cta_final: {
    title: 'Ordená tu negocio de una vez',
    sub: 'En 15 días sabés si es para vos. Sin tarjeta, sin permanencia y con una persona real del otro lado del WhatsApp.',
    cta: 'Crear mi cuenta gratis',
  },
};
