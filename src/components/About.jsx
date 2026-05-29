import { motion, useReducedMotion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const focusAreas = [
  'Responsive product interfaces for digital-first businesses and startups',
  'Modern UI systems with intentional hierarchy and structure',
  'Production-ready builds that stay polished across all devices',
];

const toolkit = ['React', 'JavaScript', 'CSS Architecture', 'Responsive Design', 'Frontend Systems', 'Product UI'];

const stats = [
  { value: '4+', label: 'production projects' },
  { value: '3 yrs', label: 'frontend focus' },
  { value: 'Growing', label: 'systems expertise' },
];

function About() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      }
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section id="about" className="section about-section" data-reveal>
      <div className="container about-grid">
        <motion.div
          className="about-copy"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
        >
          <SectionHeader
            title="A product-first frontend practice built for scalability and polish."
            description="I combine interface craftsmanship, responsive systems architecture, and performance-focused engineering for teams building the next generation of products."
            small="About"
          />
          
          <motion.p
            variants={fadeUp}
            custom={1}
          >
            I'm Daniel Adeleye, a frontend engineer specializing in building premium digital products with intentional design, strong structure, and long-term usability in mind.
          </motion.p>
          
          <motion.p
            variants={fadeUp}
            custom={2}
          >
            Since 2022, I've evolved from foundational interface work into building product-ready systems, shipping responsive, scalable frontends that support business growth across every device.
          </motion.p>
          
          <motion.p
            variants={fadeUp}
            custom={3}
          >
            My focus is on high-performance frontend architecture that feels effortless to use, scales cleanly as products grow, and maintains polish across all contexts.
          </motion.p>
        </motion.div>

        <motion.aside 
          className="about-sidebar"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div
            className="profile-card"
            variants={fadeUp}
          >
            <span>What I create</span>
            <ul className="about-focus-list">
              {focusAreas.map((item) => (
                <motion.li 
                  key={item}
                  whileHover={!prefersReducedMotion ? { x: 4 } : undefined}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="skill-card about-skill-card"
            variants={fadeUp}
          >
            <span>Core expertise</span>
            <div className="skill-pill-grid">
              {toolkit.map((item) => (
                <motion.span 
                  key={item}
                  whileHover={!prefersReducedMotion ? { scale: 1.05, y: -2 } : undefined}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="stats-grid about-stats-grid"
            variants={fadeUp}
          >
            {stats.map((stat) => (
              <motion.div 
                key={stat.label}
                whileHover={!prefersReducedMotion ? { y: -3, scale: 1.03 } : undefined}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.aside>
      </div>
    </section>
  );
}

export default About;