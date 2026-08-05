import '../styles/global.css';

export const metadata = {
  metadataBase: new URL('https://dan-lac.vercel.app/'),
  title: 'Daniel Adeleye | Founder Building Tirenify',
  description:
    'Daniel Adeleye is a founder building Tirenify — a digital security product for African internet users. Available for select projects with founders who ship fast.',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'Daniel Adeleye' }],
  applicationName: 'Daniel Adeleye',
  openGraph: {
    type: 'website',
    url: 'https://dan-lac.vercel.app/',
    siteName: 'Daniel Adeleye',
    title: 'Daniel Adeleye | Founder Building Tirenify',
    description:
      'Founder building Tirenify — digital security for African internet users. Available for select projects with founders who ship fast.',
    locale: 'en_GB',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Daniel Adeleye — Founder Building Tirenify',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@tirenify',
    creator: '@tirenify',
    title: 'Daniel Adeleye | Founder Building Tirenify',
    description:
      'Founder building Tirenify — digital security for African internet users. Available for select projects with founders who ship fast.',
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