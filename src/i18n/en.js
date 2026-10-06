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
    overline: 'Full-Stack Product Development',
    title: 'I build full-stack products, end to end.',
    subtext:
      'Founder of Tirenify. I design, build and ship dashboards, platforms and apps from database to UI.',
    chips: ['React', 'Node.js', 'Supabase', 'Resend', 'Vercel'],
    ctaPrimary: 'See Tirenify',
    ctaSecondary: 'Product work: get in touch',
    tertiary: 'Also built: a business dashboard and an online store',
    scroll: 'scroll',
  },

  services: {
    label: '02 — Services',
    heading: 'Websites for service businesses',
    intro:
      'I build fast, modern websites for Spanish plumbers, electricians and clinics, so more customers find you and call you.',
    remote:
      'I work remotely, almost on your schedule. Your site ready in 5–7 days from when I get your info. No tech jargon.',
    primary: 'Message me on WhatsApp',
    secondary: 'Get a free review of your site',
    call: 'Call me',
    stats: [
      { value: '5–7', label: 'Day turnaround' },
      { value: '24 h', label: 'To reply to you' },
      { value: '100 %', label: 'Site and domain yours' },
    ],
    marquee: [
      'Plumbing',
      'Electrical',
      'Roofing',
      'HVAC',
      'Dental clinics',
      'More calls',
      'Fast websites',
      'Real reviews',
    ],
  },

  product: {
    label: '01 — Product',
    heading: 'Full-Stack Product Development',
    points: [
      'Built and launched Tirenify solo in 3 months: 78+ active users, live product',
      'Dashboards, platforms and apps, end to end',
      'React, Node.js, Supabase, databases, APIs',
      'Fast turnaround, shipping-focused',
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
    ctaLine: "Have a product idea? Let's talk.",
  },

  about: {
    label: '03 — About',
    quote:
      'I build for businesses that run on trust and referrals. Your website is the first impression, and right now it might be costing you calls.',
    noteLabel: 'Who I am',
    note:
      "I'm Daniel. I build websites. I live in Nigeria and work remotely with service businesses in Spain, almost on your hours.",
    body: [
      "How payment works: you pay half to start and half when you approve the design. If you don't like the design, you don't pay the second half.",
      "You own the site and the domain. You're never tied to me.",
      'The price I quote is the price you pay, with no surprise extras.',
    ],
    stats: [
      { value: '5–7', label: 'Day turnaround' },
      { value: '24 h', label: 'To reply to you' },
      { value: '100 %', label: 'Site and domain yours' },
    ],
    photoAlt: 'Daniel, website builder for service businesses',
    statCards: [
      { number: '5–7', label: 'Days' },
      { number: '24 h', label: 'Reply' },
      { number: '100 %', label: 'Yours' },
    ],
  },
  projects: {
    label: '04 — Work',
    heading: 'Real builds. No templates.',
    intro:
      'These are reference websites I built to show you what your site could look like. Each one is designed to get the owner more calls. Want to see one with your own name and phone number? Message me.',
    noteLabel: 'A note on these builds',
    note:
      "These sites are examples of my work, not templates. If you like the style, message me and I'll build the same quality for your business.",
    viewProject: 'View the site',
    liveDemo: 'Open ↗',
    imageAltSuffix: '— website built by Daniel Adeleye',
  },

  whoWorkWith: {
    badge: 'Current Venture',
    name: 'Tirenify',
    tagline:
      'A breach checker specifically built for African internet users. Detects exposure in threats relevant to the African cybercrime landscape.',
    status: '78+ active users · Shipped solo in 3 months',
    details: [
      'Digital security product focused on the African internet user.',
      'Full-stack build: React, Node.js, Supabase, and Resend.',
      'Next: real-time alerts, dark web monitoring, and enterprise partnerships.',
    ],
    tags: [
      'React',
      'Node.js',
      'Supabase',
      'Resend',
      'Vercel',
    ],
    ctaPrimary: 'Get a free review of your site',
    ctaSecondary: 'See recent builds →',
    productLink: 'Explore Product →',
    homepageLink: 'Homepage →',
    metrics: [
      { value: '5–7', label: 'Day turnaround' },
      { value: '24 h', label: 'Reply' },
      { value: '100 %', label: 'Yours' },
    ],
    pipeline:
      "I'm not just a web developer. I'm also a startup founder, so I know what it means to run a business that depends on trust, on every single customer, and on showing up when you say you will. I know how much a good reputation is worth, how little free time you have, and that every missed call is money lost. That's why I treat your website like it's my own business: clear prices, straight answers, and work delivered on time.",
    imageAlt: 'Screenshot of a website built by Daniel Adeleye',
  },

  process: {
    label: '05 — How it works',
    heading: 'How it works',
    intro: 'Four steps, no jargon. Your site is live in a week.',
    steps: [
      {
        number: '01',
        title: 'We talk for 15 minutes',
        description: 'You tell me about your business and your customers.',
      },
      {
        number: '02',
        title: 'I look at your current site',
        description:
          'If you have one, I show you what is broken or slow. If not, we start from scratch.',
      },
      {
        number: '03',
        title: 'I build your site',
        description: 'Fast, built for mobile, with a big button to call you.',
      },
      {
        number: '04',
        title: 'You get it in 5–7 days',
        description: 'No headaches, no jargon.',
      },
    ],
  },
  skills: {
    label: '06 — What you get',
    heading: 'What your website includes',
    categories: [
      {
        name: 'Always included',
        skills: [
          'Mobile-first design',
          'Click-to-call and WhatsApp buttons',
          'Google Maps and opening hours',
          'Space for your real Google reviews',
          'Contact form',
          'Legal notice, privacy policy and cookie notice',
        ],
      },
      {
        name: 'So people find you',
        skills: [
          'Set up for searches like "plumber in [city]"',
          'Your local contact details',
          'Photos of your actual jobs',
        ],
      },
      {
        name: 'Not included',
        skills: [
          'Hosting and monthly maintenance',
          'Professional photography',
          'Paid advertising',
          'Social media management',
        ],
      },
    ],
  },

  work: {
    label: '07 — Pricing',
    heading: 'Clear pricing.',
    intro:
      'You know the cost before we start. If the job is bigger than usual, I tell you on the 15-minute call.',
    offerings: [
      {
        title: 'Single-page site',
        price: '€300–500',
        timeline: '3–5 days',
        forWho: 'For a business that only needs people to call.',
      },
      {
        title: 'Full site (5–7 pages)',
        price: '€700–1,200',
        timeline: '5–7 days',
        forWho: 'For businesses with several services, a blog and service pages.',
      },
      {
        title: 'Fix an existing site',
        price: '€150–400',
        timeline: '2–3 days',
        forWho: 'If you already have a site and it is just slow or unclear.',
      },
    ],
    noteLabel: 'Fixed price',
    noteCopy:
      'You know the final price before we start. If the scope changes, you tell me and we talk. Final price confirmed after our 15-minute call.',
    cta: 'Get a free review of your site',
  },
  contact: {
    bg: "LET'S TALK",
    label: '08 — Contact',
    title: "Let's get you more calls.",
    subtext:
      "Email me a link to your current site. I'll send you 3 things I'd fix — free, no strings.",
    availability: 'Available · I reply in under 24 hours',
    promise: 'I reply in under 24 hours.',
    emailAria: 'Email Daniel Adeleye',
    whatsappAria: 'WhatsApp Daniel Adeleye',
    cta: 'Message me on WhatsApp',
    productLine: "Have a full-stack project? Write to me with what you're building.",
    trust: [
      '📍 I work remotely, almost on your hours',
      '⚡ Site ready in 5–7 days',
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