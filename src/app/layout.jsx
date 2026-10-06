import '../styles/global.css';

export const metadata = {
  metadataBase: new URL('https://leye.me'),
  title: 'Daniel Adeleye | Full-Stack Developer & Founder of Tirenify',
  description:
    'Full-stack developer and founder of Tirenify. I build products, dashboards and apps end to end, plus fast websites for plumbers, electricians and clinics. Site ready in 5–7 days.',
  alternates: {
    canonical: '/',
    languages: {
      en: 'https://leye.me/',
      es: 'https://leye.me/?lang=es',
      'x-default': 'https://leye.me/',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'Daniel Adeleye' }],
  applicationName: 'Daniel Adeleye',
  openGraph: {
    type: 'website',
    url: 'https://leye.me/',
    siteName: 'Daniel Adeleye',
    title: 'Daniel Adeleye | Full-Stack Developer & Founder of Tirenify',
    description:
      'Full-stack developer and founder of Tirenify. I build products, dashboards and apps end to end, plus fast websites for plumbers, electricians and clinics. Site ready in 5–7 days.',
    locale: 'en_US',
    alternateLocale: ['es_ES'],
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Daniel Adeleye — full-stack developer',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daniel Adeleye | Full-Stack Developer & Founder of Tirenify',
    description:
      'Full-stack developer and founder of Tirenify. I build products, dashboards and apps end to end, plus fast websites for plumbers, electricians and clinics. Site ready in 5–7 days.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export const viewport = {
  themeColor: '#0a0a0a',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Privacy-friendly, cookieless analytics. No tracking cookies, so no
            cookie banner is needed. Set NEXT_PUBLIC_PLAUSIBLE_DOMAIN to enable. */}
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
          />
        )}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}