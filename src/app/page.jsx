import App from '../App';

// Only accurate facts are published here: no ratings, no invented review counts,
// no fake business locations.
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Daniel Adeleye',
  url: 'https://leye.me/',
  jobTitle: 'Website creator for service businesses',
  description:
    'I build fast, modern websites for plumbers, electricians, roofing companies, HVAC technicians and dental clinics in Spain. I work remotely, almost on your schedule, and deliver the site in 5–7 days.',
  knowsAbout: [
    'Websites for plumbers',
    'Websites for electricians',
    'Websites for dental clinics',
    'Mobile web design',
    'Websites for service businesses',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Akure',
    addressCountry: 'NG',
  },
};

const professionalServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Daniel Adeleye — Websites for service businesses',
  url: 'https://leye.me/',
  image: 'https://leye.me/og-image.png',
  description:
    'Fast, modern websites for plumbers, electricians and clinics. Site ready in 5–7 days. No tech jargon.',
  areaServed: { '@type': 'Country', name: 'Spain' },
  availableLanguage: ['es', 'en'],
  priceRange: '€€',
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
      />
      <App />
    </>
  );
}