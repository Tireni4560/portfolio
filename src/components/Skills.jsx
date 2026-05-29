import { motion, useReducedMotion } from 'framer-motion';
import { skills } from '../data/skills';
import SectionHeader from './SectionHeader';

// Icon components for skill categories
const SkillIcons = {
  'Frontend Focus': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  ),
  'Product & Systems': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>
  ),
};

function Skills() {
  const prefersReducedMotion = useReducedMotion();

  const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
        delay: prefersReducedMotion ? 0 : index * 0.1,
      },
    }),
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.05,
      },
    }),
  };

  return (
    <section id="skills" className="section skills-section" data-reveal>
      <div className="container">
        <SectionHeader
          title="Tech skills and frontend toolkit."
          description="A balanced stack built for polished interfaces, responsive systems, and business-ready web experiences."
          small="Skills"
        />

        <div className="skills-grid">
          {skills.map((category, index) => (
            <motion.div
              key={category.title}
              className="skill-card"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover={!prefersReducedMotion ? { y: -6, transition: { duration: 0.3 } } : undefined}
              transition={{ type: 'spring', stiffness: 160, damping: 18 }}
            >
              <div className="skill-card-head">
                <div className="skill-icon" aria-hidden="true">
                  {SkillIcons[category.title]}
                </div>
                <h3>{category.title}</h3>
              </div>

              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {category.items.map((item, itemIndex) => (
                  <motion.li 
                    key={item} 
                    custom={itemIndex}
                    variants={listItemVariants}
                    whileHover={!prefersReducedMotion ? { x: 4 } : undefined}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Visualization */}
        <motion.div 
          className="skills-visualization"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="skills-flow">
            {['Design Systems', 'Component Architecture', 'Performance', 'Accessibility', 'Animation', 'Testing'].map((skill, index) => (
              <motion.div
                key={skill}
                className="skill-flow-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.08,
                  type: 'spring',
                  stiffness: 200,
                  damping: 15
                }}
                whileHover={!prefersReducedMotion ? { scale: 1.1, y: -4 } : undefined}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;