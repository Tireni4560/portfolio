import App from '../App';

// Only accurate facts are published here: no ratings, no invented review counts,
// no fake business locations.
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Daniel Adeleye',
  url: 'https://leye.me/',
  jobTitle: 'Security product founder',
  description:
    'I build security products. One of them is live, and I built it alone.',
  knowsAbout: [
    'Security products',
    'Email breach checks',
    'MVP front ends',
    'Landing pages',
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
  name: 'Daniel Adeleye — Security product founder',
  url: 'https://leye.me/',
  image: 'https://leye.me/og-image.png',
  description:
    'I build security products. One of them is live, and I built it alone.',
  areaServed: { '@type': 'Country', name: 'Nigeria' },
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