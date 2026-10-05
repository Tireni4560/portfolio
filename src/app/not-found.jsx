import '../styles/global.css';

export const metadata = {
  title: 'Esta página no existe | Daniel Adeleye',
  description: 'Esta página no existe. Vuelve a leye.me y pide una revisión gratuita de tu web.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <html lang="es">
      <body>
        <main
          className="section"
          style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}
        >
          <div className="container" style={{ textAlign: 'center' }}>
            <p className="section-label">Error 404</p>
            <h1
              className="contact-title"
              style={{ marginBottom: '1rem' }}
            >
              Esta página no existe.
            </h1>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
              Pero tu web sí. Si tarda en abrir o no te trae llamadas, te la reviso gratis.
            </p>
            <a href="/" className="button button-primary">
              Volver al inicio
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}