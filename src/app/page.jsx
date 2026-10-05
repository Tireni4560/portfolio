import App from '../App';

// Only accurate facts are published here: no ratings, no invented review counts,
// no fake business locations.
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Daniel Adeleye',
  url: 'https://leye.me/',
  jobTitle: 'Creador de webs para negocios de servicios',
  description:
    'Creo webs rápidas y modernas para fontaneros, electricistas, empresas de cubiertas, técnicos de climatización y clínicas dentales en España. Trabajo en remoto, casi en el horario del cliente, y entrego la web en 5–7 días.',
  knowsAbout: [
    'Webs para fontaneros',
    'Webs para electricistas',
    'Webs para clínicas dentales',
    'Diseño-web para móvil',
    'Webs para negocios de servicios',
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
  name: 'Daniel Adeleye — Webs para negocios de servicios',
  url: 'https://leye.me/',
  image: 'https://leye.me/og-image.png',
  description:
    'Webs rápidas y modernas para fontaneros, electricistas y clínicas. Web lista en 5–7 días. Sin tecnicismos.',
  areaServed: { '@type': 'Country', name: 'España' },
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