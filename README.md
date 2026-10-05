# leye.me — Webs para negocios de servicios

Web de una página para Daniel Adeleye. Público: fontaneros, electricistas, empresas de
cubiertas, técnicos de climatización y clínicas dentales en España.

## Features

- Diseño responsive (sin cambios de diseño: el copy es lo único que se toca)
- Copy en español (por defecto) e inglés, con conmutador en la navegación (`src/i18n/`)
- Componentes React reutilizables
- Animaciones de scroll y revelado
- Endpoint de contacto en `/api/contact`
- Analítica sin cookies (Plausible, opcional vía `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`)
- Parámetros UTM guardados en `localStorage` para saber qué email funciona
- Configuración de despliegue para Vercel

## Local development

1. Install dependencies:

```bash
npm install
```

2. Start the app:

```bash
npm run dev
```

3. Build for release:

```bash
npm run build
```

## Deployment

Este proyecto está configurado para Vercel usando `vercel.json`.
La web se compila con Next.js y el endpoint de contacto está en `/api/contact`.

## Copy

Todo el texto en español está en `src/i18n/es.js` y el inglés en `src/i18n/en.js`.
Para revisión nativa hay una lista en `copy-review.md`.
