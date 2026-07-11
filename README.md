# GoBecker — Landing (Astro)

Landing estática de GoBecker (`https://gobecker.com.ar`). Astro + Tailwind, SSG puro (páginas estáticas, sin client routing). Se despliega como **static site** en Render (`srv-d97ui0po3t8c738bbso0`): build `npm install && npm run build`, publish `dist/`.

## Comandos

| Comando           | Acción                                    |
| :---------------- | :---------------------------------------- |
| `npm install`     | Instala dependencias                      |
| `npm run dev`     | Dev server en `localhost:4321`            |
| `npm run build`   | Build de producción a `./dist/`           |
| `npm run preview` | Previsualiza el build local               |

Requiere Node `>=22.12.0` (ver `engines` en `package.json`).

## Meta Pixel — activación

El Meta Pixel y todos sus eventos están implementados **detrás de la env var `PUBLIC_META_PIXEL_ID`**:

- **Sin la env var** (estado actual): no se inyecta nada. El HTML no contiene `fbevents` / `connect.facebook.net` — no-op limpio.
- **Con la env var**: se inyecta el snippet base (`fbq init` + `PageView`) + `<noscript>` en el `<head>` de las 3 páginas, y quedan activos los eventos `Contact` (WhatsApp), `Lead` (CTAs de registro) y `ViewContent` (sección precios).

La propagación de UTMs (`utm_*` + `fbclid`) a los CTAs hacia `app.gobecker.com.ar` corre **siempre**, con o sin pixel.

### Cómo setear el Pixel ID en Render (cuando M1 lo tenga)

1. Render Dashboard → static site **gobecker-landing** → **Environment** → **Add Environment Variable**.
   - Key: `PUBLIC_META_PIXEL_ID`
   - Value: el ID numérico del pixel (dataset de Events Manager).
2. Guardar → Render redeploya solo. (Si no dispara, triggerear deploy manual por la API de Render.)
3. Verificar en producción: el `<head>` de `https://gobecker.com.ar` debe contener `connect.facebook.net/en_US/fbevents.js` y `fbq('init','<ID>')`. Con la extensión **Meta Pixel Helper** o en **Events Manager → Test Events** deberían verse `PageView`, y al interactuar `ViewContent` / `Contact` / `Lead`.

> Nota: el `_fbp`/`_fbc` viajan solos entre `gobecker.com.ar` y `app.gobecker.com.ar` por compartir dominio raíz — no hay que tocar nada. El `event_id` (UUID) del evento `Lead` queda listo para deduplicar contra la Conversions API (CAPI) del backend (fase M3).

## Archivos relevantes del pixel

- `src/components/MetaPixel.astro` — snippet base gateado por la env var (va en cada `<head>`).
- `src/components/MetaEvents.astro` — eventos (`Contact`/`Lead`/`ViewContent`) + propagación de UTMs (script inline al final del `<body>` de `index.astro`).
- CTAs tageados con `data-meta="lead|contact"` + `data-meta-name` en `src/components/sections/*`.
