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
  const [activeSection, setActiveSection] = useState('#home');
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
      { threshold: 0.33, rootMargin: '-20% 0px -55% 0px' }
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
          <div className="header-actions">
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
      <button className="theme-toggle-fixed" onClick={toggleTheme} aria-label="Toggle theme">
        <span className="sr-only">Toggle theme</span>
        {isDark ? 'Light' : 'Dark'}
      </button>
      <div className="site-background" aria-hidden>
        <div className="bg-grid"></div>
        <div className="bg-motion">
          <span className="motion-line" style={{'--i': 0}}></span>
          <span className="motion-line" style={{'--i': 1}}></span>
          <span className="motion-line" style={{'--i': 2}}></span>
          <span className="motion-line" style={{'--i': 3}}></span>
          <span className="motion-line" style={{'--i': 4}}></span>
          <span className="motion-line" style={{'--i': 5}}></span>
        </div>
      </div>
    </div>
  );
}

export default App;
