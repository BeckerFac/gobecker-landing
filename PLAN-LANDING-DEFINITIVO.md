# Plan de Implementacion: Landing GoBecker Definitiva

Basado en analisis de 13 competidores (Stripe, Notion, Odoo, Colppy, Xubio, Tango, Aconpy, etc.)
Documento de research: `/docs/landing-page-competitive-analysis.md` (957 lineas)

---

## Principios rectores (derivados del analisis)

1. **Light mode.** TODOS los ERPs exitosos para PyMEs usan light mode. Dark mode es para devs/tech. Un dueno de 50+ quiere ver algo parecido a una planilla o un documento, no una app gamer.
2. **Headline de dolor, no de feature.** "Cobra mas rapido" gana a "Sistema de gestion con IA".
3. **Pricing visible.** NINGUN competidor argentino lo muestra = oportunidad de diferenciacion brutal.
4. **Screenshot real.** El producto SE MUESTRA. No arte abstracto, no gradientes. Un dashboard real.
5. **Numeros concretos.** Cada afirmacion tiene un numero detras.
6. **WhatsApp prominente.** Es el canal #1 en Argentina para B2B PyME.
7. **Maximo 10 secciones.** Mas = fatiga. Menos = incompleto.

---

## Paleta definitiva (Light Mode Premium)

```
Fondo principal:     #FFFFFF (blanco puro, como Stripe/Xero/Colppy)
Fondo secundario:    #F8FAFC (gris azulado ultra-sutil para secciones alternas)
Fondo hero:          #0B1928 (navy profundo, SOLO hero section)
Texto principal:     #1E293B (slate 800 - legible, no negro puro)
Texto secundario:    #64748B (slate 500)
Primario (brand):    #1E40AF (azul profundo - confianza, AFIP, bancos)
Primario hover:      #1E3A8A
Acento (CTA):        #D97706 (amber oscuro - accion, urgencia sin agresion)
Acento hover:        #B45309
Acento suave:        #FEF3C7 (amber 100 - fondo de badges)
Borde:               #E2E8F0 (slate 200)
Exito:               #16A34A
Texto hero:          #FFFFFF (blanco sobre navy)
Texto hero sub:      #94A3B8 (slate 400)
```

Racional: Stripe, QuickBooks, Xero, Zoho TODAS usan azul + blanco. Funciona. No reinventar. El amber como acento diferencia (vs verde Xero, purpura Colppy). Light mode para el 90% de la pagina, dark navy SOLO en el hero (como lo hacen los mejores: hero oscuro = impacto, resto claro = contenido).

---

## Wireframe: 10 secciones exactas

### S1: HERO (dark navy background)
```
[Nav: Logo GoBecker | Funciones | Precios | Soporte | CTA "Probalo gratis"]
[                                                                           ]
[     Badge: "Integrado con AFIP - Mas de 400 PyMEs ya lo usan"           ]
[                                                                           ]
[     HEADLINE:                                                             ]
[     "Cobra mas rapido.                                                    ]
[      Factura sin errores.                                                 ]
[      Dormi tranquilo."                                                    ]
[                                                                           ]
[     SUB: El sistema de gestion para PyMEs argentinas que                  ]
[     conecta AFIP, cobranzas y stock en un solo lugar.                    ]
[                                                                           ]
[     [CTA: Probalo 14 dias gratis ->] [CTA outline: Ver precios]          ]
[                                                                           ]
[     Metricas: -70% tiempo admin | 100% AFIP | Soporte humano            ]
[                                                                           ]
[     [===== SCREENSHOT del dashboard en laptop + mobile =====]            ]
```

### S2: CONFIANZA INMEDIATA (fondo blanco)
```
[  "Empresas que ya confian en GoBecker"  ]
[  [Logo] [Logo] [Logo] [Logo] [Logo]     ]
[  + "Facturacion electronica certificada AFIP" badge                      ]
```

### S3: 3 PROBLEMAS -> 3 SOLUCIONES (fondo gris sutil)
```
[  Card 1: Facturacion                    ]
[  icono + "Emiti facturas AFIP en        ]
[  30 segundos. Sin errores, sin          ]
[  rechazos."                             ]
[                                          ]
[  Card 2: Cobranzas                      ]
[  icono + "Sabe cuanto te deben.         ]
[  Cobra mas rapido con recordatorios     ]
[  automaticos."                          ]
[                                          ]
[  Card 3: Control total                  ]
[  icono + "Pedidos, stock, rentabilidad  ]
[  y cuenta corriente. Todo en una        ]
[  pantalla."                             ]
```

### S4: PRODUCTO EN ACCION (fondo blanco)
```
[  "Mira como funciona"                   ]
[  [Screenshot/Video del flujo real:      ]
[   Crear pedido -> Facturar -> Cobrar]   ]
[  [CTA: Agenda una demo personalizada]   ]
```

### S5: PARA QUIEN (fondo gris sutil)
```
[  "Para duenos de empresa"   |  "Para contadores"     ]
[  - Controla tu negocio      |  - Gana clientes       ]
[    desde el celular         |    con facturacion      ]
[  - Sabe cuanto te deben     |    automatica           ]
[  - Toma decisiones con      |  - Libro IVA al dia     ]
[    datos reales             |  - Multi-empresa         ]
```

### S6: TESTIMONIOS CON NUMEROS (fondo blanco)
```
[  "Lo que dicen nuestros clientes"       ]
[  [Foto] Juan Garcia, Ferreteria X       ]
[  "Antes tardaba 2 horas en facturar.    ]
[   Ahora lo hago en 15 minutos."         ]
[  [Foto] Maria Lopez, Distribuidora Y    ]
[  "Cobro 40% mas rapido desde que        ]
[   uso GoBecker."                        ]
```

### S7: PRICING TRANSPARENTE (fondo gris sutil)
```
[  "Precios claros. Sin sorpresas."       ]
[  [Toggle: Mensual | Anual (ahorra 32%)]  ]
[                                          ]
[  GRATIS     |  ESTANDAR    |  PREMIUM   ]
[  $0/mes     |  $XX.XXX/mes |  $XX.XXX   ]
[  5 facturas |  Ilimitado   |  Ilimitado  ]
[  1 usuario  |  5 usuarios  |  Sin limite ]
[  AFIP OK    |  Reportes    |  IA + WA    ]
[  [Empezar]  |  [Elegir]    |  [Elegir]   ]
[                                          ]
[  "Sin tarjeta de credito. Cancelar      ]
[   cuando quieras."                      ]
```

### S8: INTEGRACIONES (fondo blanco)
```
[  "Se integra con las herramientas       ]
[   que ya usas"                          ]
[  [AFIP] [MercadoPago] [Bancos]          ]
[  [TiendaNube] [WhatsApp]               ]
```

### S9: FAQ (fondo gris sutil)
```
[  "Preguntas frecuentes"                 ]
[  > Es seguro?                           ]
[  > Puedo migrar desde Excel/Tango?      ]
[  > Quien me ayuda si tengo problemas?   ]
[  > Funciona desde el celular?           ]
[  > Necesito saber de tecnologia?        ]
```

### S10: CTA FINAL (fondo navy oscuro)
```
[  "Empeza a gestionar tu negocio         ]
[   como corresponde"                     ]
[  [CTA: Probalo 14 dias gratis ->]       ]
[  "Sin tarjeta. Sin compromiso.          ]
[   Soporte humano incluido."             ]
[  WhatsApp: +54 9 11 XXXX-XXXX          ]
```

### ELEMENTOS FLOTANTES
- WhatsApp button (esquina inferior derecha, SIEMPRE visible)
- Scroll progress bar (top, sutil)

---

## Tipografia

- Headlines: Inter 800 (extra-bold) - 48px desktop, 32px mobile
- Subtitulos: Inter 600 - 24px desktop, 20px mobile
- Body: Inter 400 - 18px desktop, 16px mobile (legible para 50+)
- Botones: Inter 600 - 16px
- Line height: 1.6 (body), 1.1 (headlines)

---

## Implementacion tecnica

1. Cambiar global.css: nueva paleta (light mode base, dark hero only)
2. Reescribir HeroSection.tsx: nuevo copy, screenshot mockup, metricas
3. Reescribir index.astro: 10 secciones exactas segun wireframe
4. Crear componentes: PricingTable, TestimonialCard, FAQAccordion, IntegrationsGrid
5. Agregar screenshots reales del producto (mockup con Figma/browser frame)
6. Tipografia: reemplazar Plus Jakarta Sans por Inter
