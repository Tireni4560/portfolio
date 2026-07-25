"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import StatCounter from './StatCounter';

const resumePdf = '/images/resume.pdf';

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

  // Split headline into words for staggered animation
  const headlineLine1 = ['Building', 'products'];
  const headlineLine2 = ['people', 'open', 'twice.'];

  const Word = ({ text, index, isLast }) => (
    <>
      <span className="word" style={{ '--word-delay': `${index * 40}ms` }}>
        <span className="word-inner" style={{ transitionDelay: `${index * 40}ms` }}>
          {text}
        </span>
      </span>
      {!isLast && ' '}
    </>
  );

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
          {/* Availability Badge */}
          <motion.div
            className="hero-availability"
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0 }}
          >
            <span className="dot" />
            Available for Projects
          </motion.div>

          {/* Headline */}
          <motion.h1
            className={`hero-title ${loaded ? 'loaded' : ''}`}
            animate={loaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="line-1">
              {headlineLine1.map((word, i) => (
                <Word key={`l1-${i}`} text={word} index={i} isLast={i === headlineLine1.length - 1} />
              ))}
            </span>
            <span className="line-2">
              {headlineLine2.map((word, i) => (
                <Word key={`l2-${i}`} text={word} index={i} isLast={i === headlineLine2.length - 1} />
              ))}
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className={`hero-subtext ${loaded ? 'loaded' : ''}`}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            I build web products with the precision of a developer
            and the intent of a founder.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className={`hero-actions ${loaded ? 'loaded' : ''}`}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <a href="#projects" className="button button-primary">
              View My Work
            </a>
            <a href={resumePdf} className="button button-secondary" target="_blank" rel="noopener noreferrer" aria-label="Open resume in new tab">
              View Resume
            </a>
          </motion.div>

          <motion.div
            className="hero-stats"
            animate={loaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.85 }}
          >
            <StatCounter value={3} suffix="+" label="Years Building" />
            <StatCounter value={40} suffix="+" label="Products Shipped" />
            <StatCounter value={100} suffix="%" label="Passion for Craft" />
          </motion.div>

          {/* Social Links */}
          <motion.div
            className={`hero-social ${loaded ? 'loaded' : ''}`}
            animate={loaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.9 }}
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
            'GSAP', 'Next.js', 'Node.js', 'Vite', 'Supabase',
            'Product Thinking', 'UI Engineering', 'Startup Builder',
            'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion',
            'GSAP', 'Next.js', 'Node.js', 'Vite', 'Supabase',
            'Product Thinking', 'UI Engineering', 'Startup Builder',
          ].map((tag, i) => (
            <span key={i} className="hero-marquee-tag">{tag}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;