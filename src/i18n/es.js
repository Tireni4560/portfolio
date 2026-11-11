// Spanish copy (opt-in: the ES/EN switcher, a ?lang=es URL, or the language hint).
// Every user-facing string lives in the i18n folder so the copy can be
// reviewed and translated in one place. Warm, plain Spain Spanish, "tú".

const es = {
  siteUrl: 'https://leye.me',

  nav: {
    home: 'Inicio',
    product: 'Producto',
    services: 'Servicios',
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
    overline: 'Fundador de Tirenify · Productos de seguridad',
    title: 'Construyo productos de seguridad. Uno ya está en producción y lo hice solo.',
    subtext:
      'Fundador de Tirenify. React, Node, Supabase. Landing pages en 5 días, front ends de MVP en 7.',
    chips: ['React', 'Node.js', 'Supabase', 'Resend', 'Vercel'],
    ctaPrimary: 'Trabaja conmigo',
    ctaSecondary: 'Qué estoy construyendo',
    tertiary: '',
    scroll: 'baja',
  },

  services: {
    label: '02 — Servicios',
    heading: 'Lo que construyo para ti',
    intro: 'Landing pages en 5 días, front ends de MVP en 7 y slices full-stack definidos tras una llamada breve.',
    remote: 'Alcance claro, comunicación directa y un producto funcional que puedes lanzar.',
    primary: 'Trabaja conmigo',
    secondary: 'Mira lo que estoy construyendo',
    call: 'Hablemos del alcance',
    stats: [
      { value: '5–7', label: 'Días de entrega' },
      { value: '24 h', label: 'Para responderte' },
      { value: '100 %', label: 'Web y dominio tuyos' },
    ],
    marquee: [
      'Landing pages',
      'Front ends de MVP',
      'Slices full-stack',
      'React',
      'Node',
      'Supabase',
      'Lanzamiento rápido',
      'Alcance claro',
    ],
  },

  product: {
    label: '01 — Producto',
    heading: 'Breach Guard está disponible y es gratis',
    points: [
      'Comprobaciones de filtraciones de email',
      'Revisión semanal y alertas por email',
      'Construido solo de principio a fin',
      'React, Node.js, Supabase, Resend y Vercel',
    ],
    caseStudy: {
      type: 'Caso práctico · Dashboard',
      title: 'Panel de control del negocio',
      description:
        'Un dashboard que muestra al dueño sus ventas, clientes nuevos y reseñas de un vistazo, sin tener que pedirle los números a nadie.',
      bullets: [
        'Ventas, clientes nuevos y reseñas en una sola pantalla, siempre al día',
        'Filtros por fecha para ver cualquier periodo',
        'Funciona en el móvil, sin instalar nada',
      ],
      link: 'Ver el dashboard ↗',
    },
    ctaLine: '¿Tienes algo que lanzar? Hablemos.',
  },

  about: {
    label: '03 — Sobre mí',
    quote: 'Lanzo productos de seguridad solo y los lanzo rápido.',
    noteLabel: 'Quién soy',
    note: 'Soy Daniel. Construyo y lanzo productos de seguridad desde Nigeria.',
    body: [
      'La prueba principal es Breach Guard, disponible y gratis.',
      'También construyo trabajo de cliente enfocado, con alcance y calendario claros.',
      'El precio y el plan de entrega se confirman antes de empezar.',
    ],
    stats: [
      { value: '5–7', label: 'Días de entrega' },
      { value: '24 h', label: 'Para responderte' },
      { value: '100 %', label: 'Web y dominio tuyos' },
    ],
    photoAlt: 'Daniel Adeleye, fundador y creador de productos',
    statCards: [
      { number: '5–7', label: 'Días' },
      { number: '24 h', label: 'Respuesta' },
      { number: '100 %', label: 'Tuyo' },
    ],
  },
  projects: {
    label: '04 — Trabajos',
    heading: 'Trabajo de interfaz seleccionado',
    intro: 'Una selección de interfaces y superficies de producto construidas para uso real.',
    noteLabel: 'Una nota sobre estos trabajos',
    note: 'Trabajo de interfaz seleccionado en proyectos de producto, dashboards y comercio.',
    viewProject: 'Ver la web',
    liveDemo: 'Abrir ↗',
    imageAltSuffix: '— web hecha por Daniel Adeleye',
  },

  whoWorkWith: {
    badge: 'Qué estoy construyendo',
    name: 'Tirenify',
    tagline: 'Tirenify construye herramientas de seguridad digital para usuarios cotidianos de internet.',
    status: '',
    details: [
      'El primer producto es Safeyard de Tirenify: comprobaciones de filtraciones, próximos pasos claros y herramientas prácticas.',
      'Construido solo; lanzando en público; más productos con el tiempo.',
    ],
    tags: [
      'React',
      'Node.js',
      'Supabase',
      'Resend',
      'Vercel',
    ],
    ctaPrimary: 'Trabaja conmigo',
    ctaSecondary: 'Ver trabajo seleccionado →',
    productLink: 'Explorar producto →',
    homepageLink: 'Página de inicio →',
    metrics: [
      { value: '5–7', label: 'Días de entrega' },
      { value: '24 h', label: 'Respuesta' },
      { value: '100 %', label: 'Tuya' },
    ],
    pipeline: 'Lanzo productos de seguridad solo y los lanzo rápido.',
    imageAlt: 'Captura de un producto de seguridad de Tirenify',
  },

  process: {
    label: '05 — Cómo funciona',
    heading: 'Cómo funciona',
    intro: 'Un camino corto desde el alcance hasta un producto funcional.',
    steps: [
      {
        number: '01',
        title: 'Definimos el alcance',
        description: 'Me cuentas qué necesitas lanzar y para quién es.',
      },
      {
        number: '02',
        title: 'Doy forma al producto',
        description: 'Acordamos la versión útil más pequeña y el calendario.',
      },
      {
        number: '03',
        title: 'Construyo el slice',
        description: 'Implementación enfocada, con avances claros y comunicación directa.',
      },
      {
        number: '04',
        title: 'Recibes un producto funcional',
        description: 'Landing pages en 5 días y front ends de MVP en 7.',
      },
    ],
  },
  skills: {
    label: '06 — Qué incluye',
    heading: 'Qué recibes',
    categories: [
      {
        name: 'Incluye siempre',
        skills: [
          'Interfaz responsive',
          'Alcance claro del proyecto',
          'Formularios e integraciones funcionales',
          'Entrega lista para producción',
        ],
      },
      {
        name: 'Para una primera versión útil',
        skills: [
          'Flujo de usuario enfocado',
          'Comportamiento mobile-first',
          'Espacio para iterar',
        ],
      },
      {
        name: 'Se define aparte',
        skills: [
          'Roadmaps grandes',
          'Mantenimiento continuo',
          'Trabajo fuera del alcance',
        ],
      },
    ],
  },

  work: {
    label: '07 — Precios',
    heading: 'Precios claros, sin sorpresas.',
    intro: 'Conoces el plazo antes de empezar. El alcance y el precio final se confirman por adelantado.',
    offerings: [
      {
        title: 'Landing page',
        price: '300–500 €',
        timeline: '5 días',
        forWho: 'Una página enfocada para una oferta clara.',
      },
      {
        title: 'Front end de MVP',
        price: '700–1.200 €',
        timeline: '7 días',
        forWho: 'Un front end funcional para tu primera versión.',
      },
      {
        title: 'Slice full-stack',
        price: '150–400 €',
        timeline: 'Definido tras una llamada breve',
        forWho: 'Una parte de producto con las piezas de backend necesarias.',
      },
    ],
    noteLabel: 'Precio cerrado',
    noteCopy:
      'Sabrás el precio final antes de empezar. Si el alcance cambia, me lo dices y lo hablamos. Precio final confirmado tras la llamada de 15 minutos.',
    cta: 'Trabaja conmigo',
  },
  contact: {
    bg: 'HABLEMOS',
    label: '08 — Contacto',
    title: '¿Tienes algo que lanzar?',
    subtext: 'Escríbeme con el alcance.',
    availability: 'Disponible · Respondo en menos de 24 horas',
    promise: 'Respondo en menos de 24 horas.',
    emailAria: 'Escribir un email a Daniel Adeleye',
    whatsappAria: 'Escribir por WhatsApp a Daniel Adeleye',
    cta: 'Escríbeme por WhatsApp',
    productLine: '¿Tienes algo que lanzar? Escríbeme con el alcance.',
    trust: [
      '📍 Lanzo productos de seguridad solo',
      '⚡ Landing pages en 5 días',
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
    product: 'Hola Daniel, me gustaría hablar de un proyecto de producto.',
  },

  mail: {
    subject: 'Revisión gratuita de mi web',
    body: 'Hola Daniel,\n\nEsta es mi web: ',
    productSubject: 'Idea de producto',
    productEmail: 'daniel@tirenify.app',
  },
};

export default es;
