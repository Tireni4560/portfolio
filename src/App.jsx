import { useEffect, useMemo, useState, useRef } from 'react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform, useSpring } from 'framer-motion';
import Lenis from 'lenis';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Journey from './components/Journey.jsx';
import Contact from './components/Contact.jsx';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Work' },
  { href: '#journey', label: 'Journey' },
  { href: '#contact', label: 'Contact' },
];

const backgroundLines = [0, 1, 2, 3, 4];

function App() {
  const prefersReducedMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });
  const [lenisInstance, setLenisInstance] = useState(null);
  const appRef = useRef(null);

  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 1000], [0, -50]);
  const parallaxX = useTransform(scrollY, [0, 1000], [0, 30]);

  const backgroundDots = useMemo(
    () => [
      { left: '12%', top: '18%', size: 260, delay: 0 },
      { left: '78%', top: '14%', size: 220, delay: 0.8 },
      { left: '82%', top: '68%', size: 280, delay: 1.4 },
      { left: '18%', top: '76%', size: 180, delay: 1.1 },
    ],
    []
  );

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    setLenisInstance(lenis);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
  }, [menuOpen]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    window.history.scrollRestoration = 'manual';
    if (!window.location.hash) window.scrollTo(0, 0);

    const handleScroll = () => setIsScrolled(window.scrollY > 18);
    const handlePointerMove = (event) => {
      setCursor({ x: event.clientX, y: event.clientY, visible: true });
    };
    const handlePointerLeave = () => setCursor((current) => ({ ...current, visible: false }));

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerleave', handlePointerLeave);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
    };
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
      { threshold: 0.4, rootMargin: '-18% 0px -48% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
    );

    const observeTargets = () => {
      document.querySelectorAll('[data-reveal]').forEach((element) => {
        if (!element.dataset.observed) {
          element.dataset.observed = 'true';
          revealObserver.observe(element);
        }
      });
    };

    observeTargets();

    const mutationObserver = new MutationObserver(() => observeTargets());
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      revealObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  const toggleMenu = () => setMenuOpen((current) => !current);
  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    closeMenu();
    const element = document.querySelector(href);
    if (element && lenisInstance) {
      lenisInstance.scrollTo(element);
    } else if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-shell" ref={appRef}>
      {/* Background System */}
      <div className="site-background" aria-hidden="true">
        <div className="bg-grid" />
        <div className="bg-noise" />
        <div className="bg-mesh" />
        
        <div className="bg-orbs">
          {backgroundDots.map((dot, index) => (
            <motion.div
              key={`${dot.left}-${dot.top}-${index}`}
              className="bg-orb"
              style={{
                left: dot.left,
                top: dot.top,
                width: dot.size,
                height: dot.size,
              }}
              animate={
                prefersReducedMotion
                  ? { opacity: 0.18 }
                  : {
                      y: [0, -25, 0],
                      x: [0, 15, 0],
                      opacity: [0.12, 0.25, 0.12],
                      scale: [1, 1.05, 1],
                    }
              }
              transition={{
                duration: 16 + index * 3,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut',
                delay: dot.delay,
              }}
            />
          ))}
        </div>

        <div className="bg-motion">
          {backgroundLines.map((line) => (
            <motion.span
              key={line}
              className="motion-line"
              style={{ top: `${12 + line * 16}%` }}
              animate={prefersReducedMotion ? { x: 0 } : { x: ['-8%', '8%', '-8%'] }}
              transition={{
                duration: 32 + line * 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>

      {/* Cursor Glow Effect */}
      <motion.div
        className="cursor-glow"
        aria-hidden="true"
        animate={{
          x: cursor.x - 200,
          y: cursor.y - 200,
          opacity: cursor.visible && !prefersReducedMotion ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 22, mass: 0.3 }}
      />

      {/* Header / Navigation */}
      <motion.header
        className={`site-header ${isScrolled ? 'scrolled' : ''}`}
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="container header-inner">
          <a href="#home" className="brand-link" onClick={(e) => handleNavClick(e, '#home')} aria-label="Go to home">
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
                onClick={(e) => handleNavClick(e, item.href)}
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
      </motion.header>

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>

      <Footer />

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <motion.button
            className="mobile-backdrop"
            aria-label="Close navigation menu"
            onClick={closeMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;