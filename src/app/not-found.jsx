import '../styles/global.css';

export const metadata = {
  title: 'This page does not exist | Daniel Adeleye',
  description:
    'This page does not exist. Go back to leye.me and ask for a free review of your site.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <html lang="en">
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
              This page does not exist.
            </h1>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
              But your website should. If it loads slowly or doesn't bring you calls,
              I'll review it for free.
            </p>
            <a href="/" className="button button-primary">
              Back to home
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}