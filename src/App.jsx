import { useEffect, useState, useRef, useMemo } from 'react';
import { AnimatePresence, motion, useScroll, useReducedMotion } from 'framer-motion';
import Lenis from 'lenis';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Founder from './components/Founder';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#founder', label: 'Founder' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
];

function App() {
  const prefersReducedMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });
  const [cursorRingHover, setCursorRingHover] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const appRef = useRef(null);

  const { scrollY, scrollYProgress } = useScroll();

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  // Scroll progress
  useEffect(() => {
    return scrollYProgress.onChange((progress) => {
      setScrollProgress(progress);
    });
  }, [scrollYProgress]);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
  }, [menuOpen]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    const handlePointerMove = (event) => {
      setCursor({ x: event.clientX, y: event.clientY, visible: true });
    };
    const handlePointerLeave = () => setCursor((current) => ({ ...current, visible: false }));
    const handlePointerOver = (event) => {
      if (event.target.closest('a, button, [role="button"]')) {
        setCursorRingHover(true);
      } else {
        setCursorRingHover(false);
      }
    };
    const handlePointerOut = () => setCursorRingHover(false);

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerover', handlePointerOver, { passive: true });
    window.addEventListener('pointerout', handlePointerOut, { passive: true });
    window.addEventListener('pointerleave', handlePointerLeave);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  // Active section detection
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

  // Scroll reveal observer
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('data-revealed');
            entry.target.dataset.revealed = 'true';
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
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLoadingComplete = () => {
    setLoadingComplete(true);
  };

  // Background orbs configuration
  const backgroundOrbs = useMemo(
    () => [
      { left: '12%', top: '18%', size: 260, delay: 0 },
      { left: '78%', top: '14%', size: 220, delay: 0.8 },
      { left: '82%', top: '68%', size: 280, delay: 1.4 },
      { left: '18%', top: '76%', size: 180, delay: 1.1 },
    ],
    []
  );

  if (!loadingComplete) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="app-shell" ref={appRef}>
      {/* Background System */}
      <div className="site-background" aria-hidden="true">
        <div className="bg-grid" />
        <div className="bg-noise" />
        <div className="bg-mesh" />

        <div className="bg-orbs">
          {backgroundOrbs.map((orb, index) => (
            <motion.div
              key={`${orb.left}-${orb.top}-${index}`}
              className="bg-orb"
              style={{
                left: orb.left,
                top: orb.top,
                width: orb.size,
                height: orb.size,
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
                delay: orb.delay,
              }}
            />
          ))}
        </div>
      </div>

      {/* Custom Cursor Dot */}
      <motion.div
        className="cursor-dot"
        aria-hidden="true"
        animate={{
          x: cursor.x - 4,
          y: cursor.y - 4,
          opacity: cursor.visible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 35, mass: 0.1 }}
      />

      {/* Cursor ring — lags behind */}
      <motion.div
        className={`cursor-ring${cursorRingHover ? ' cursor-ring--hover' : ''}`}
        aria-hidden="true"
        animate={{
          x: cursor.x - 18,
          y: cursor.y - 18,
          opacity: cursor.visible && !prefersReducedMotion ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 120, damping: 22, mass: 0.5 }}
      />

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
        {/* Scroll Progress Bar */}
        <motion.div
          className="scroll-progress"
          style={{ scaleX: scrollProgress }}
          aria-hidden="true"
        />

        <div className="header-inner">
          <a
            href="#home"
            className="brand-link"
            onClick={(e) => handleNavClick(e, '#home')}
            aria-label="Go to home"
          >
            Daniel Adeleye
          </a>

          {/* Desktop Navigation */}
          <nav className="site-nav" aria-label="Primary navigation">
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
            <a
              href="#contact"
              className="nav-cta"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Let's Talk
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
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

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="mobile-nav-overlay open"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <motion.button
                className="mobile-close"
                onClick={closeMenu}
                aria-label="Close navigation menu"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
              >
                ×
              </motion.button>
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className={activeSection === item.href ? 'active' : ''}
                  onClick={(e) => handleNavClick(e, item.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.06 },
                  }}
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="mobile-nav-social" style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem' }}>
                <a href="https://github.com/Tireni4560" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com/in/danieladeleye" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://twitter.com/danieladeleye_" target="_blank" rel="noopener noreferrer">Twitter</a>
              </div>
            </motion.div>
            <motion.button
              className="mobile-backdrop"
              aria-label="Close navigation menu"
              onClick={closeMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <motion.main
        id="main-content"
        initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }
        }
      >
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Founder />
        <Process />
        <Contact />
      </motion.main>

      <Footer />
    </div>
  );
}

export default App;