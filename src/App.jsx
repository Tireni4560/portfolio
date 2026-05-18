import { useEffect, useState, lazy, Suspense } from 'react';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';
import './styles/global.css';

const About = lazy(() => import('./components/About.jsx'));
const Skills = lazy(() => import('./components/Skills.jsx'));
const Projects = lazy(() => import('./components/Projects.jsx'));
const Journey = lazy(() => import('./components/Journey.jsx'));
const Services = lazy(() => import('./components/Services.jsx'));
const Vision = lazy(() => import('./components/Vision.jsx'));
const Testimonials = lazy(() => import('./components/Testimonials.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#journey', label: 'Journey' },
  { href: '#contact', label: 'Contact' },
];

function App() {
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('portfolio-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(storedTheme ? storedTheme === 'dark' : prefersDark);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('light-mode', !isDark);
    root.classList.toggle('dark-mode', isDark);
    window.localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

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
      { threshold: 0.2 }
    );

    elements.forEach((element) => observer.observe(element));
    setLoaded(true);
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => setIsDark((current) => !current);
  const toggleMenu = () => setMenuOpen((current) => !current);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={`app-shell ${loaded ? 'page-loaded' : ''}`}>
      <header className="site-header" data-reveal>
        <div className="container header-inner">
          <a href="#home" className="brand-link" onClick={closeMenu}>
            DA
          </a>
          <nav className={`site-nav ${menuOpen ? 'open' : ''}`} aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {isDark ? 'Light' : 'Dark'}
            </button>
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
        </div>
      </header>

      <Hero />

      <main>
        <Suspense fallback={<div className="skeleton-loader">Loading premium content…</div>}>
          <About />
          <Skills />
          <Projects />
          <Journey />
          <Services />
          <Vision />
          <Testimonials />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
