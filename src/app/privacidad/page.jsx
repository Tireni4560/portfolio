import '../../styles/global.css';

export const metadata = {
  title: 'Política de privacidad y cookies | Daniel Adeleye',
  description:
    'Política de privacidad y aviso de cookies de leye.me. Sin cookies publicitarias ni de seguimiento.',
  alternates: { canonical: '/privacidad' },
  robots: { index: true, follow: true },
};

const SECTIONS = [
  {
    heading: 'Quién soy',
    body: 'Esta web es de Daniel Adeleye. Puedes escribirme por WhatsApp o por email desde la página de contacto.',
  },
  {
    heading: 'Qué datos recojo',
    body: 'No hay formularios que guarden datos. Si me escribes por WhatsApp o por email, esos datos los tengo yo directamente y solo los uso para hablar de tu web.',
  },
  {
    heading: 'Cookies',
    body: 'Esta web no usa cookies publicitarias ni de seguimiento, por lo que no hace falta mostrarte ningún aviso de consentimiento. La única preferencia que se guarda en tu navegador es el idioma que elegiste (español o inglés) y, si llegas desde un email con parámetros de seguimiento, esos parámetros para saber qué email funcionó.',
  },
  {
    heading: 'Estadísticas',
    body: 'Uso un servicio de estadísticas anónimo y sin cookies que no te identifica: solo cuenta cuántas visitas hubo y qué páginas se miraron. Los clics en WhatsApp, en el email y en los botones se cuentan igual, sin guardarse quién los hizo.',
  },
  {
    heading: 'Tus derechos',
    body: 'Puedes pedirme los datos que tengo tuyos o que los borre. Solo tengo lo que me envías tú por WhatsApp o email.',
  },
];

export default function PrivacidadPage() {
  return (
    <main style={{ padding: '6rem 1.5rem', maxWidth: '48rem', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Política de privacidad y cookies</h1>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2.5rem' }}>
        Última actualización: enero de 2026.
      </p>

      {SECTIONS.map((section) => (
        <section key={section.heading} style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{section.heading}</h2>
          <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>{section.body}</p>
        </section>
      ))}

      <a href="/" style={{ color: 'var(--color-accent)' }}>
        ← Volver a leye.me
      </a>
    </main>
  );
}