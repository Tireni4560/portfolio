import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const highlights = ['React', 'Motion systems', 'Responsive UI', 'Frontend architecture'];
const metrics = [
  { value: '4+', label: 'shipped products' },
  { value: '2022', label: 'frontend start' },
  { value: '100%', label: 'detail-oriented' },
  { value: '24/7', label: 'product mindset' },
];

function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax transforms for hero elements
  const heroY = useTransform(scrollY, [0, 500], [0, 100]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const bgFloatY = useTransform(scrollY, [0, 400], [0, -60]);

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemReveal = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const itemRevealDelay = (delay) => ({
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
        delay,
      },
    },
  });

  return (
    <section id="home" className="section hero-section" ref={containerRef}>
      <motion.div 
        className="container hero-grid"
        style={{ opacity: heroOpacity, y: heroY }}
      >
        <motion.div
          className="hero-copy"
          data-reveal
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.span 
            className="eyebrow"
            variants={itemReveal}
          >
            Frontend engineer · product-focused design systems
          </motion.span>
          
          <motion.h1 variants={itemRevealDelay(0.1)}>
            Frontend experiences engineered for modern brands.
          </motion.h1>
          
          <motion.p variants={itemRevealDelay(0.2)}>
            I design and build premium interfaces that feel calm, sharp, and conversion-ready.
            The focus is always the same — fast interaction, strong visual hierarchy, and a polished
            product story that makes ambitious businesses look established.
          </motion.p>

          <motion.div className="hero-actions" variants={itemRevealDelay(0.3)}>
            <a href="#projects" className="button button-primary">
              View selected work
            </a>
            <a href="#contact" className="button button-secondary">
              Start a project
            </a>
          </motion.div>

          <motion.div 
            className="hero-chips" 
            aria-label="Core specialties"
            variants={itemRevealDelay(0.4)}
          >
            {highlights.map((item) => (
              <motion.span 
                key={item} 
                className="hero-chip"
                whileHover={!prefersReducedMotion ? { scale: 1.05, y: -2 } : undefined}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                {item}
              </motion.span>
            ))}
          </motion.div>

          <motion.div 
            className="hero-summary" 
            aria-label="Key profile metrics"
            variants={itemRevealDelay(0.5)}
          >
            {metrics.map((metric, index) => (
              <motion.div 
                key={metric.label}
                whileHover={!prefersReducedMotion ? { y: -3, scale: 1.02 } : undefined}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <span>{metric.value}</span>
                <p>{metric.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.aside
          className="hero-panel"
          data-reveal
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.9, 
            ease: [0.25, 0.1, 0.25, 1], 
            delay: prefersReducedMotion ? 0 : 0.3 
          }}
          style={{ y: bgFloatY }}
        >
          <motion.div
            className="hero-panel-card"
            whileHover={!prefersReducedMotion ? { y: -8, transition: { duration: 0.3 } } : undefined}
            transition={{ type: 'spring', stiffness: 150, damping: 20 }}
          >
            <div className="hero-profile">
              <motion.div 
                className="hero-profile-image"
                whileHover={!prefersReducedMotion ? { scale: 1.05, rotate: 2 } : undefined}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              >
                <img src="/images/Daniel.jpg" alt="Portrait of Daniel Adeleye" loading="eager" decoding="async" />
              </motion.div>
              <div>
                <p className="hero-profile-label">Daniel Adeleye</p>
                <h2>Developer brand experience with product-level polish</h2>
              </div>
            </div>

            <p className="hero-panel-copy">
              I build elegant frontend systems for ambitious founders, startups, and product teams
              who need a digital presence that feels credible, modern, and technically sharp from
              the first interaction.
            </p>

            <motion.div className="hero-panel-list">
              <motion.div
                whileHover={!prefersReducedMotion ? { x: 4 } : undefined}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <strong>Intentional motion</strong>
                <span>Subtle animation, parallax depth, and smooth transitions that support the story.</span>
              </motion.div>
              <motion.div
                whileHover={!prefersReducedMotion ? { x: 4 } : undefined}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <strong>Systems thinking</strong>
                <span>Reusable UI patterns and scalable layouts designed to stay polished as the product grows.</span>
              </motion.div>
            </motion.div>

            <div className="hero-panel-links">
              <a href="https://x.com/danieladeleye_" target="_blank" rel="noreferrer" className="button button-secondary">
                X / Twitter
              </a>
              <a href="https://wa.me/2349063626099" target="_blank" rel="noreferrer" className="button button-tertiary">
                WhatsApp
              </a>
            </div>
          </motion.div>
        </motion.aside>
      </motion.div>
    </section>
  );
}

export default Hero;