import { useEffect, useState, lazy, Suspense } from 'react';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';
import './styles/global.css';

const About = lazy(() => import('./components/About.jsx'));
const Projects = lazy(() => import('./components/Projects.jsx'));
const Journey = lazy(() => import('./components/Journey.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Work' },
  { href: '#journey', label: 'Journey' },
  { href: '#contact', label: 'Contact' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
  }, [menuOpen]);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.35, rootMargin: '-20% 0px -50% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    elements.forEach((element) => observer.observe(element));
    setLoaded(true);
    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => setMenuOpen((current) => !current);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={`app-shell ${loaded ? 'page-loaded' : ''}`}>
      <header className="site-header" data-reveal>
        <div className="container header-inner">
          <a href="#home" className="brand-link" onClick={closeMenu}>
            <span className="brand-mark">DA</span>
            <span className="brand-text">Daniel Adeleye</span>
          </a>

          <nav className={`site-nav ${menuOpen ? 'open' : ''}`} aria-label="Primary navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={activeSection === item.href ? 'active' : ''}
                aria-current={activeSection === item.href ? 'page' : undefined}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            className={`nav-toggle ${menuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <Hero />

      <main>
        <Suspense fallback={<div className="skeleton-loader">Loading premium content…</div>}>
          <About />
          <Projects />
          <Journey />
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
