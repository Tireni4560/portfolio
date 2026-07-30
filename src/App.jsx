"use client";

import { useEffect, useState, useRef } from 'react';
import { AnimatePresence, motion, useScroll, useReducedMotion } from 'framer-motion';
import Lenis from 'lenis';
import ParticleNetwork from './components/ParticleNetwork';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Founder from './components/Founder';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#work', label: 'Work' },
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
  const appRef = useRef(null);
  const cursorGlowRef = useRef(null);

  const { scrollYProgress } = useScroll();

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

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
  }, [menuOpen]);

  // Scroll + pointer tracking done imperatively (no React state per event) —
  // avoids re-rendering the whole app tree on every scroll/mousemove tick.
  useEffect(() => {
    if (typeof window === 'undefined' || prefersReducedMotion) return undefined;

    let ticking = false;
    let pointerX = 0;
    let pointerY = 0;

    const applyFrame = () => {
      ticking = false;
      setIsScrolled(window.scrollY > 80);
      const el = cursorGlowRef.current;
      if (el) {
        el.style.transform = `translate3d(${pointerX - 200}px, ${pointerY - 200}px, 0)`;
      }
    };

    const requestFrame = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(applyFrame);
      }
    };

    const handleScroll = () => requestFrame();
    const handlePointerMove = (event) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      const el = cursorGlowRef.current;
      if (el) el.style.opacity = '1';
      requestFrame();
    };
    const handlePointerLeave = () => {
      const el = cursorGlowRef.current;
      if (el) el.style.opacity = '0';
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerleave', handlePointerLeave);

    setIsScrolled(window.scrollY > 80);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, [prefersReducedMotion]);

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

  return (
    <div className="app-shell" ref={appRef}>
      {/* Background System */}
      <div className="site-background" aria-hidden="true">
        <div className="bg-grid" />
        <div className="bg-noise" />
        <div className="bg-mesh" />
        <ParticleNetwork />
      </div>

      {/* Cursor Glow Effect — position/opacity set imperatively via ref, not React state */}
      {!prefersReducedMotion && (
        <div ref={cursorGlowRef} className="cursor-glow" aria-hidden="true" style={{ opacity: 0 }} />
      )}

      {/* Header / Navigation */}
      <motion.header
        className={`site-header ${isScrolled ? 'scrolled' : ''}`}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Scroll Progress Bar — bound directly to the motion value, no React state hop */}
        <motion.div
          className="scroll-progress"
          style={{ scaleX: scrollYProgress }}
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
                <a href="https://www.linkedin.com/in/daniel-adeleye-45b37141b?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://twitter.com/danieladeleye_" target="_blank" rel="noopener noreferrer">X</a>
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
        animate={{ opacity: 1, y: 0 }}
        transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      >
        <Hero />
        <About />
        <Projects />
        <Work />
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