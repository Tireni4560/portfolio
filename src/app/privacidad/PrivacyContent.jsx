'use client';

import { useI18n } from '../../i18n/I18nProvider';

// The Spanish copy is the original, unchanged. The English copy is a faithful
// translation. The page follows the language active in this session (resolved
// by <I18nProvider /> after mount) and falls back to English.
const COPY = {
  es: {
    title: 'Política de privacidad y cookies',
    updated: 'Última actualización: enero de 2026.',
    sections: [
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
    ],
    back: '← Volver a leye.me',
  },
  en: {
    title: 'Privacy and cookie policy',
    updated: 'Last updated: January 2026.',
    sections: [
      {
        heading: 'Who I am',
        body: 'This website belongs to Daniel Adeleye. You can reach me by WhatsApp or email from the contact page.',
      },
      {
        heading: 'What data I collect',
        body: 'There are no forms that store data. If you write to me by WhatsApp or email, I hold those details directly and only use them to talk about your website.',
      },
      {
        heading: 'Cookies',
        body: 'This website does not use advertising or tracking cookies, so no consent notice is needed. The only preference stored in your browser is the language you chose (Spanish or English) and, if you arrive from an email with tracking parameters, those parameters to know which email worked.',
      },
      {
        heading: 'Statistics',
        body: 'I use an anonymous, cookieless analytics service that does not identify you: it only counts how many visits there were and which pages were viewed. Clicks on WhatsApp, email and buttons are counted the same way, without storing who made them.',
      },
      {
        heading: 'Your rights',
        body: 'You can ask me for the data I have about you or ask me to delete it. I only have what you send me yourself by WhatsApp or email.',
      },
    ],
    back: '← Back to leye.me',
  },
};

export default function PrivacyContent() {
  const { lang } = useI18n();
  const copy = COPY[lang] ?? COPY.en;

  return (
    <main style={{ padding: '6rem 1.5rem', maxWidth: '48rem', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{copy.title}</h1>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2.5rem' }}>
        {copy.updated}
      </p>

      {copy.sections.map((section) => (
        <section key={section.heading} style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{section.heading}</h2>
          <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>{section.body}</p>
        </section>
      ))}

      <a href="/" style={{ color: 'var(--color-accent)' }}>
        {copy.back}
      </a>
    </main>
  );
}