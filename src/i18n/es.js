// Spanish copy (default language for the site).
// Every user-facing string lives in the i18n folder so the copy can be
// reviewed and translated in one place. Warm, plain Spain Spanish, "tú".

const es = {
  siteUrl: 'https://leye.me',

  nav: {
    home: 'Inicio',
    about: 'Sobre mí',
    projects: 'Trabajos',
    stack: 'Qué incluye',
    contact: 'Contacto',
    cta: 'Escríbeme',
    toggleAria: 'Cambiar de idioma',
    menuAria: 'Abrir o cerrar el menú',
    brandAria: 'Ir al inicio',
    floatingCta: 'Hablemos',
  },

  loading: {
    aria: 'Cargando la web de Daniel Adeleye',
    text: 'Cargando…',
  },

  hero: {
    overline: 'Webs para negocios de servicios',
    title:
      'Hago webs rápidas y modernas para fontaneros, electricistas y clínicas, para que más clientes te encuentren y te llamen.',
    subtext:
      'Trabajo en remoto, casi en tu mismo horario. Web lista en 5–7 días. Sin tecnicismos.',
    primary: 'Escríbeme por WhatsApp',
    secondary: 'Pídeme una revisión gratuita',
    call: 'Llámame',
    scroll: 'baja',
    stats: [
      { value: '5–7', label: 'Días de entrega' },
      { value: '24 h', label: 'Para responderte' },
      { value: '100 %', label: 'Web y dominio tuyos' },
    ],
    marquee: [
      'Fontanería',
      'Electricidad',
      'Cubiertas',
      'Climatización',
      'Clínicas dentales',
      'Más llamadas',
      'Webs rápidas',
      'Reseñas reales',
    ],
  },

  about: {
    label: '01 — Sobre mí',
    quote:
      'Hago webs para negocios que viven de la confianza y las recomendaciones. Tu web es la primera impresión, y ahora mismo puede estar costándote llamadas.',
    noteLabel: 'Quién soy',
    note:
      'Soy Daniel, hago webs. Vivo en Nigeria y trabajo en remoto con negocios de servicios de España, casi en tu horario.',
    body: [
      'Cómo funciona el pago: pagas la mitad para empezar y la otra mitad cuando apruebes el diseño. Si no te gusta el diseño, no pagas la segunda parte.',
      'La web y el dominio son tuyos. No dependes de mí.',
      'El precio que te doy es el que pagas, sin extras sorpresa.',
    ],
    stats: [
      { value: '5–7', label: 'Días de entrega' },
      { value: '24 h', label: 'Para responderte' },
      { value: '100 %', label: 'Web y dominio tuyos' },
    ],
    photoAlt: 'Daniel, creador de webs para negocios de servicios',
    statCards: [
      { number: '5–7', label: 'Días' },
      { number: '24 h', label: 'Respuesta' },
      { number: '100 %', label: 'Tuyo' },
    ],
  },
  projects: {
    label: '02 — Trabajos',
    heading: 'Webs reales, sin plantillas.',
    intro:
      'Estas son webs de referencia que he creado para mostrarte cómo podría ser la tuya. Cada una está pensada para que el dueño reciba más llamadas. ¿Quieres ver una con tu nombre y tu teléfono? Escríbeme.',
    noteLabel: 'Una nota sobre estos trabajos',
    note:
      'Estas webs son ejemplos de mi trabajo, no plantillas. Si te gusta el estilo, escríbeme y haré lo mismo para tu negocio.',
    viewProject: 'Ver la web',
    liveDemo: 'Abrir ↗',
    imageAltSuffix: '— web hecha por Daniel Adeleye',
  },

  whoWorkWith: {
    label: 'Proyecto de fundador',
    heading: 'Tirenify',
    intro:
      'Seguridad digital creada para usuarios de internet en África.',
    badge: 'Proyecto actual',
    name: 'Tirenify',
    tagline:
      'Un comprobador de filtraciones creado específicamente para usuarios de internet en África. Detecta la exposición a amenazas relevantes en el panorama del cibercrimen africano.',
    status: 'Más de 78 usuarios activos · Lanzado en solitario en 3 meses',
    details: [
      'Producto de seguridad digital centrado en el usuario de internet africano.',
      'Desarrollo completo: React, Node.js, Supabase y Resend.',
      'Próximamente: alertas en tiempo real, monitorización de la dark web y alianzas con empresas.',
    ],
    tags: [
      'React',
      'Node.js',
      'Supabase',
      'Resend',
      'Vercel',
    ],
    ctaPrimary: 'Pídeme una revisión gratuita',
    ctaSecondary: 'Ver trabajos →',
    productLink: 'Explorar producto →',
    homepageLink: 'Página de inicio →',
    leadIn: 'Esto es a lo que me refiero:',
    metrics: [
      { value: '5–7', label: 'Días de entrega' },
      { value: '24 h', label: 'Respuesta' },
      { value: '100 %', label: 'Tuya' },
    ],
    pipeline:
      'No soy solo un desarrollador web. También soy fundador de una startup, así que sé lo que significa llevar un negocio que depende de la confianza, de cada cliente y de cumplir lo que prometes. Sé lo que vale una buena reputación, lo poco tiempo libre que tienes y que cada llamada perdida es dinero que se va. Por eso trato tu web como si fuera mi propio negocio: precios claros, respuestas directas y entrega en el plazo acordado.',
    imageAlt: 'Captura de una web hecha por Daniel Adeleye',
  },

  process: {
    label: '04 — Cómo funciona',
    heading: 'Cómo funciona',
    intro: 'Cuatro pasos, sin tecnicismos. En una semana tienes la web.',
    steps: [
      {
        number: '01',
        title: 'Hablamos 15 minutos',
        description: 'Me cuentas a qué te dedicas y quién es tu cliente.',
      },
      {
        number: '02',
        title: 'Reviso tu web actual',
        description:
          'Si tienes web, te digo qué está roto o lento. Si no, empezamos de cero.',
      },
      {
        number: '03',
        title: 'Construyo tu web',
        description: 'Rápida, pensada para el móvil y con un botón grande para llamar.',
      },
      {
        number: '04',
        title: 'La tienes en 5–7 días',
        description: 'Sin complicaciones y sin tecnicismos.',
      },
    ],
  },
  skills: {
    label: '05 — Qué incluye',
    heading: 'Qué incluye tu web',
    categories: [
      {
        name: 'Incluye siempre',
        skills: [
          'Diseñada para el móvil',
          'Botón para llamar y para WhatsApp',
          'Google Maps y horario de apertura',
          'Espacio para tus reseñas de Google',
          'Formulario de contacto',
          'Aviso legal, privacidad y cookies',
        ],
      },
      {
        name: 'Para que te encuentren',
        skills: [
          'Preparada para búsquedas como «fontanero en [ciudad]»',
          'Datos de contacto de tu zona',
          'Fotos de tus trabajos',
        ],
      },
      {
        name: 'No incluye',
        skills: [
          'Hosting y mantenimiento mensual',
          'Fotos profesionales',
          'Campañas de publicidad',
          'Gestión de redes sociales',
        ],
      },
    ],
  },

  work: {
    label: '06 — Precios',
    heading: 'Precios claros, sin sorpresas.',
    intro:
      'Sabes lo que cuesta antes de empezar. Si el trabajo es más grande de lo normal, te lo digo en la llamada de 15 minutos.',
    offerings: [
      {
        title: 'Web de una página',
        price: '300–500 €',
        timeline: '3–5 días',
        forWho: 'Para un negocio que solo necesita que le llamen.',
      },
      {
        title: 'Web completa (5–7 páginas)',
        price: '700–1.200 €',
        timeline: '5–7 días',
        forWho: 'Para negocios con varios servicios, blog y fichas.',
      },
      {
        title: 'Arreglar tu web actual',
        price: '150–400 €',
        timeline: '2–3 días',
        forWho: 'Si ya tienes web y solo va lenta o no se entiende.',
      },
    ],
    noteLabel: 'Precio cerrado',
    noteCopy:
      'Sabrás el precio final antes de empezar. Si el alcance cambia, me lo dices y lo hablamos. Precio final confirmado tras la llamada de 15 minutos.',
    cta: 'Pídeme una revisión gratuita',
  },
  contact: {
    bg: 'HABLEMOS',
    label: '07 — Contacto',
    title: 'Vamos a conseguirte más llamadas.',
    subtext:
      'Mándame el enlace de tu web actual. Te envío 3 cosas que cambiaría, gratis y sin compromiso.',
    availability: 'Disponible · Respondo en menos de 24 horas',
    promise: 'Respondo en menos de 24 horas.',
    emailAria: 'Escribir un email a Daniel Adeleye',
    whatsappAria: 'Escribir por WhatsApp a Daniel Adeleye',
    cta: 'Escríbeme por WhatsApp',
    trust: [
      '📍 Trabajo en remoto, casi en tu horario',
      '⚡ Web lista en 5–7 días',
      '✓ Respondo en menos de 24 horas',
    ],
  },

  footer: {
    privacy: 'Política de privacidad y cookies',
    backTop: 'Volver arriba ↑',
  },

  waMessages: {
    hero: 'Hola Daniel, te paso el enlace de mi web: ',
    review: 'Hola Daniel, te paso el enlace de mi web y me gustaría una revisión gratuita: ',
    contact: 'Hola Daniel, te paso el enlace de mi web: ',
    pricing: 'Hola Daniel, quiero una revisión gratuita de mi web: ',
  },

  mail: {
    subject: 'Revisión gratuita de mi web',
    body: 'Hola Daniel,\n\nEsta es mi web: ',
  },
};

export default es;
