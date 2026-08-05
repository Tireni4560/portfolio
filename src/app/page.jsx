import App from '../App';

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Daniel Adeleye',
  url: 'https://dan-lac.vercel.app/',
  jobTitle: 'Founder & Product Builder',
  description:
    'Founder building Tirenify — digital security for African internet users. Available for select projects with founders who ship fast.',
  sameAs: ['https://x.com/tirenify', 'https://tirenify.app'],
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