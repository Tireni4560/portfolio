import '../styles/global.css';

export const metadata = {
  metadataBase: new URL('https://leye.me'),
  title: 'Webs rápidas para fontaneros, electricistas y clínicas | Daniel Adeleye',
  description:
    'Hago webs rápidas y modernas para fontaneros, electricistas y clínicas, para que más clientes te encuentren y te llamen. Web lista en 5–7 días. Sin tecnicismos.',
  alternates: {
    canonical: '/',
    languages: {
      es: 'https://leye.me/',
      en: 'https://leye.me/?lang=en',
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
    title: 'Webs rápidas para fontaneros, electricistas y clínicas | Daniel Adeleye',
    description:
      'Hago webs rápidas y modernas para fontaneros, electricistas y clínicas, para que más clientes te encuentren y te llamen. Web lista en 5–7 días. Sin tecnicismos.',
    locale: 'es_ES',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Daniel Adeleye — webs para negocios de servicios',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webs rápidas para fontaneros, electricistas y clínicas | Daniel Adeleye',
    description:
      'Hago webs rápidas y modernas para fontaneros, electricistas y clínicas. Web lista en 5–7 días. Sin tecnicismos.',
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
    <html lang="es" suppressHydrationWarning>
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