// English copy (default language for the site, served on first visit).
// Every user-facing string lives in the i18n folder so the copy can be
// reviewed and translated in one place.

const en = {
  siteUrl: 'https://leye.me',

  nav: {
    home: 'Home',
    product: 'Product',
    services: 'Services',
    projects: 'Work',
    stack: 'What you get',
    contact: 'Contact',
    cta: 'Message me',
    toggleAria: 'Switch language',
    menuAria: 'Open or close the menu',
    brandAria: 'Go to home',
    floatingCta: "Let's talk",
  },

  loading: {
    aria: "Loading Daniel Adeleye's website",
    text: 'Loading…',
  },

  hero: {
    overline: 'Tirenify founder · Security products',
    title: 'I build security products. One of them is live, and I built it alone.',
    subtext:
      'Tirenify founder. React, Node, Supabase. Landing pages in 5 days, MVP front ends in 7.',
    chips: ['React', 'Node.js', 'Supabase', 'Resend', 'Vercel'],
    ctaPrimary: 'Work with me',
    ctaSecondary: "What I'm building",
    tertiary: '',
    scroll: 'scroll',
  },

  services: {
    label: '02 — Services',
    heading: 'What I build for you',
    intro: 'Landing pages in 5 days, MVP front ends in 7, and full-stack slices scoped after a short call.',
    remote: 'Clear scope, direct communication, and a working build you can ship.',
    primary: 'Work with me',
    secondary: 'See what I’m building',
    call: 'Talk through the scope',
    stats: [
      { value: '5–7', label: 'Day turnaround' },
      { value: '24 h', label: 'To reply to you' },
      { value: '100 %', label: 'Site and domain yours' },
    ],
    marquee: [
      'Landing pages',
      'MVP front ends',
      'Full-stack slices',
      'React',
      'Node',
      'Supabase',
      'Fast shipping',
      'Clear scope',
    ],
  },

  product: {
    label: '01 — Product',
    heading: 'Breach Guard is live and free',
    points: [
      'Email breach checks',
      'Weekly re-check and email alerts',
      'Built solo end to end',
      'React, Node.js, Supabase, Resend, and Vercel',
    ],
    caseStudy: {
      type: 'Case study · Dashboard',
      title: 'Business control panel',
      description:
        'A dashboard that shows an owner their sales, new customers and reviews at a glance, without asking anyone for the numbers.',
      bullets: [
        'Sales, new customers and reviews on one screen, always up to date',
        'Date filters to look at any period',
        'Works on mobile, nothing to install',
      ],
      link: 'View the dashboard ↗',
    },
    ctaLine: "Have something to ship? Let's talk.",
  },

  about: {
    label: '03 — About',
    quote: 'I ship security products alone, and I ship them fast.',
    noteLabel: 'Who I am',
    note:
      "I'm Daniel. I build and ship security products from Nigeria.",
    body: [
      'Founder proof comes first: Breach Guard is live and free.',
      'I also build focused client work with a clear scope and timeline.',
      'The price and delivery plan are confirmed before work starts.',
    ],
    stats: [
      { value: '5–7', label: 'Day turnaround' },
      { value: '24 h', label: 'To reply to you' },
      { value: '100 %', label: 'Site and domain yours' },
    ],
    photoAlt: 'Daniel Adeleye, founder and product builder',
    statCards: [
      { number: '5–7', label: 'Days' },
      { number: '24 h', label: 'Reply' },
      { number: '100 %', label: 'Yours' },
    ],
  },
  projects: {
    label: '04 — Work',
    heading: 'Selected UI work',
    intro: 'A selection of interfaces and product surfaces built for real use.',
    noteLabel: 'A note on these builds',
    note:
      'Selected interface work across product, dashboard, and commerce projects.',
    viewProject: 'View the site',
    liveDemo: 'Open ↗',
    imageAltSuffix: '— website built by Daniel Adeleye',
  },

  whoWorkWith: {
    badge: "What I'm building",
    name: 'Tirenify',
    tagline: 'Tirenify builds digital security tools for everyday internet users.',
    status: '',
    details: [
      'First product is Safeyard by Tirenify — breach checks, clear next steps, practical tools.',
      'Built solo; shipping in public; more products over time.',
    ],
    tags: [
      'React',
      'Node.js',
      'Supabase',
      'Resend',
      'Vercel',
    ],
    ctaPrimary: 'Work with me',
    ctaSecondary: 'See selected work →',
    productLink: 'Explore Product →',
    homepageLink: 'Homepage →',
    metrics: [
      { value: '5–7', label: 'Day turnaround' },
      { value: '24 h', label: 'Reply' },
      { value: '100 %', label: 'Yours' },
    ],
    pipeline: 'I ship security products alone, and I ship them fast.',
    imageAlt: 'Screenshot of a Tirenify security product',
  },

  process: {
    label: '05 — How it works',
    heading: 'How it works',
    intro: 'A short path from scope to a working build.',
    steps: [
      {
        number: '01',
        title: 'We scope the work',
        description: 'You share what you need to ship and who it is for.',
      },
      {
        number: '02',
        title: 'I shape the build',
        description: 'We agree on the smallest useful version and the timeline.',
      },
      {
        number: '03',
        title: 'I build the slice',
        description: 'Focused implementation with clear progress and direct updates.',
      },
      {
        number: '04',
        title: 'You get a working build',
        description: 'Landing pages in 5 days, MVP front ends in 7.',
      },
    ],
  },
  skills: {
    label: '06 — What you get',
    heading: 'What you get',
    categories: [
      {
        name: 'Always included',
        skills: [
          'Mobile-first design',
          'Responsive interface',
          'Clear project scope',
          'Working forms and integrations',
          'Production-ready handoff',
        ],
      },
      {
        name: 'For a useful first release',
        skills: [
          'Focused user flow',
          'Mobile-first behavior',
          'Room to iterate',
        ],
      },
      {
        name: 'Scoped separately',
        skills: [
          'Large product roadmaps',
          'Ongoing maintenance',
          'Unscoped feature work',
        ],
      },
    ],
  },

  work: {
    label: '07 — Pricing',
    heading: 'Clear pricing.',
    intro: 'You know the delivery window before we start. The final scope and price are confirmed up front.',
    offerings: [
      {
        title: 'Landing page',
        price: '€300–500',
        timeline: '5 days',
        forWho: 'A focused page for a clear offer.',
      },
      {
        title: 'MVP front end',
        price: '€700–1,200',
        timeline: '7 days',
        forWho: 'A working front end for your first release.',
      },
      {
        title: 'Full-stack slice',
        price: '€150–400',
        timeline: 'Scoped after a short call',
        forWho: 'A focused product slice with the right backend pieces.',
      },
    ],
    noteLabel: 'Fixed price',
    noteCopy:
      'You know the final price before we start. If the scope changes, you tell me and we talk. Final price confirmed after our 15-minute call.',
    cta: 'Work with me',
  },
  contact: {
    bg: "LET'S TALK",
    label: '08 — Contact',
    title: 'Have something to ship?',
    subtext: 'Write me with the scope.',
    availability: 'Available · I reply in under 24 hours',
    promise: 'I reply in under 24 hours.',
    emailAria: 'Email Daniel Adeleye',
    whatsappAria: 'WhatsApp Daniel Adeleye',
    cta: 'Message me on WhatsApp',
    productLine: 'Have something to ship? Write me with the scope.',
    trust: [
      '📍 I ship security products alone',
      '⚡ Landing pages in 5 days',
      '✓ I reply in under 24 hours',
    ],
  },

  footer: {
    privacy: 'Privacy and cookie policy',
    backTop: 'Back to top ↑',
  },

  waMessages: {
    hero: 'Hi Daniel, here is the link to my website: ',
    review: 'Hi Daniel, here is the link to my website and I would like a free review: ',
    contact: 'Hi Daniel, here is the link to my website: ',
    pricing: 'Hi Daniel, I would like a free review of my website: ',
    product: "Hi Daniel, I'd like to talk about a product project.",
  },

  mail: {
    subject: 'Free review of my website',
    body: 'Hi Daniel,\n\nHere is my website: ',
    productSubject: 'Product idea',
    productEmail: 'daniel@tirenify.app',
  },
};

export default en;