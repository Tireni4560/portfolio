"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

function Hero() {
  const heroRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [scrollVisible, setScrollVisible] = useState(true);

  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [0, 20]);
  const orb1Y = useTransform(scrollY, [0, 800], [0, 100]);

  // Smooth spring for parallax
  const smoothParallaxY = useSpring(parallaxY, { stiffness: 100, damping: 30 });
  const smoothOrb1Y = useSpring(orb1Y, { stiffness: 50, damping: 30 });

  useEffect(() => {
    // Trigger entrance animations after a short delay
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollVisible(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="hero-section"
      aria-label="Introduction"
    >
      {/* Ambient Orbs */}
      <motion.div
        className="hero-orb hero-orb-1"
        style={{ y: smoothOrb1Y }}
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        className="container hero-grid"
        style={{ y: smoothParallaxY }}
      >
        <div className="hero-copy">
          {/* Overline */}
          <motion.div
            className="hero-overline"
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0 }}
          >
            <span className="dot" />
            Founder at Tirenify
          </motion.div>

          {/* Headline */}
          <motion.h1
            className={`hero-title ${loaded ? 'loaded' : ''}`}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            initial={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Building Tirenify. Digital security for African users.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className={`hero-subtext ${loaded ? 'loaded' : ''}`}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            initial={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I build products people return to. Available for select projects with founders who ship fast.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className={`hero-actions ${loaded ? 'loaded' : ''}`}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            initial={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <a
              href="https://tirenify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary"
            >
              Explore Tirenify
            </a>
            <a href="#contact" className="button button-secondary">
              Let's Talk
            </a>
          </motion.div>

          {/* Proof Stats */}
          <motion.div
            className="hero-stats"
            animate={loaded ? { opacity: 1 } : {}}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="hero-stat">
              <span className="hero-stat-value">78+</span>
              <span className="hero-stat-label">Active Users on Tirenify</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">3</span>
              <span className="hero-stat-label">Months to Launch</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">5+</span>
              <span className="hero-stat-label">Products Shipped</span>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className={`hero-social ${loaded ? 'loaded' : ''}`}
            animate={loaded ? { opacity: 1 } : {}}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <a href="https://www.linkedin.com/in/daniel-adeleye-45b37141b?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              LinkedIn
            </a>
            <a href="https://twitter.com/danieladeleye_" target="_blank" rel="noopener noreferrer" aria-label="X">
              X
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className={`scroll-indicator ${scrollVisible ? '' : 'hidden'}`}
        aria-hidden="true"
      >
        <span>scroll</span>
        <div className="scroll-line" />
      </motion.div>

      {/* Tech tag marquee — decorative */}
      <div className="hero-marquee" aria-hidden="true">
        <div className="hero-marquee-track">
          {[
            'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion',
            'Next.js', 'Node.js', 'Vite', 'Supabase',
            'Product Thinking', 'Digital Security', 'Startup Builder',
            'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion',
            'Next.js', 'Node.js', 'Vite', 'Supabase',
            'Product Thinking', 'Digital Security', 'Startup Builder',
          ].map((tag, i) => (
            <span key={i} className="hero-marquee-tag">{tag}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;