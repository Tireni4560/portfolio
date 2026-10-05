"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useI18n } from '../i18n/I18nProvider';
import { whatsappLink, telLink, trackEvent } from '../lib/contact';

function Hero() {
  const { t } = useI18n();
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
      aria-label={t.hero.overline}
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
            {t.hero.overline}
          </motion.div>

          {/* Headline */}
          <motion.h1
            className={`hero-title ${loaded ? 'loaded' : ''}`}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            initial={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {t.hero.title}
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className={`hero-subtext ${loaded ? 'loaded' : ''}`}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            initial={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {t.hero.subtext}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className={`hero-actions ${loaded ? 'loaded' : ''}`}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            initial={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <a
              href={whatsappLink(t.waMessages.hero)}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary"
              onClick={() => trackEvent('WhatsApp', { location: 'hero' })}
            >
              {t.hero.primary}
            </a>
            <a
              href="#contact"
              className="button button-secondary"
              onClick={() => trackEvent('Free review', { location: 'hero' })}
            >
              {t.hero.secondary}
            </a>
            <a
              href={telLink()}
              className="button button-secondary hero-call-button"
              onClick={() => trackEvent('Click to call', { location: 'hero' })}
            >
              {t.hero.call}
            </a>
          </motion.div>

          {/* Proof Stats */}
          <motion.div
            className="hero-stats"
            animate={loaded ? { opacity: 1 } : {}}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {t.hero.stats.map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <span className="hero-stat-value">{stat.value}</span>
                <span className="hero-stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            className={`hero-social ${loaded ? 'loaded' : ''}`}
            animate={loaded ? { opacity: 1 } : {}}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <a
              href="https://www.linkedin.com/in/daniel-adeleye-45b37141b?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href={whatsappLink(t.waMessages.hero)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.contact.whatsappAria}
              onClick={() => trackEvent('WhatsApp', { location: 'hero-social' })}
            >
              WhatsApp
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className={`scroll-indicator ${scrollVisible ? '' : 'hidden'}`}
        aria-hidden="true"
      >
        <span>{t.hero.scroll}</span>
        <div className="scroll-line" />
      </motion.div>

      {/* Industry tag marquee — decorative */}
      <div className="hero-marquee" aria-hidden="true">
        <div className="hero-marquee-track">
          {[...t.hero.marquee, ...t.hero.marquee].map((tag, i) => (
            <span key={i} className="hero-marquee-tag">{tag}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;