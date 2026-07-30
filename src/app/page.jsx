import App from '../App';

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Daniel Adeleye',
  url: 'https://dan-lac.vercel.app/',
  jobTitle: 'Founder & Product Builder',
  description:
    'Founder building Tirenify and developer helping early-stage founders ship MVPs and landing pages.',
  sameAs: ['https://x.com/tirenify', 'https://breachchecker-rho.vercel.app', 'https://tirenify.netlify.app'],
  knowsAbout: ['Frontend Development', 'React', 'Product Design', 'Digital Security', 'African Tech'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Akure',
    addressCountry: 'NG',
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <App />
    </>
  );
}