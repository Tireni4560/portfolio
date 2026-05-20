import { useEffect, useState, lazy, Suspense } from 'react';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';

const About = lazy(() => import('./components/About.jsx'));
const Skills = lazy(() => import('./components/Skills.jsx'));
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
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual';
      if (!window.location.hash) {
        window.scrollTo(0, 0);
      }
    }
  }, []);

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
    const revealCallback = (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          try { obs.unobserve(entry.target); } catch (e) {}
        }
      });
    };

    const observer = new IntersectionObserver(revealCallback, { threshold: 0.18 });

    const observeElement = (el) => {
      if (!el || el._observed) return;
      el._observed = true;
      observer.observe(el);
    };

    // Observe initial elements
    const elements = document.querySelectorAll('[data-reveal]');
    elements.forEach((element) => observeElement(element));

    // Watch for newly added nodes (lazy-loaded components)
    const mo = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType !== 1) return;
          if (node.matches && node.matches('[data-reveal]')) observeElement(node);
          if (node.querySelectorAll) {
            const nested = node.querySelectorAll('[data-reveal]');
            nested.forEach((n) => observeElement(n));
          }
        });
      });
    });

    mo.observe(document.body, { childList: true, subtree: true });

    setLoaded(true);
    return () => {
      try { observer.disconnect(); } catch (e) {}
      try { mo.disconnect(); } catch (e) {}
    };
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
          <Skills />
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
