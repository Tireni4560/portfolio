import { motion, useReducedMotion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const milestoneGroups = [
  {
    years: '2022 + 2023',
    title: 'Built the foundation and sharpened core frontend craft',
    description:
      'Started with HTML, CSS, and responsive layout principles, then progressed into React patterns, UI structure, and product-oriented interface work.',
  },
  {
    years: '2024 + 2025',
    title: 'Moved from interfaces into production-ready systems',
    description:
      'Shipped more ambitious project experiences with stronger architecture, cleaner interaction design, and a sharper focus on scale and polish.',
  },
];

const today = {
  years: 'Today',
  title: 'Designing stronger products with higher standards',
  description:
    'Refining motion, storytelling, and frontend systems to build digital experiences that feel premium, durable, and startup-ready.',
};

function Journey() {
  const prefersReducedMotion = useReducedMotion();

  const cardVariants = {
    hidden: { opacity: 0, y: 32, scale: 0.97 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.75,
        ease: [0.25, 0.1, 0.25, 1],
        delay: prefersReducedMotion ? 0 : index * 0.1,
      },
    }),
  };

  const connectorVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: '100%',
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
        delay: 0.3,
      },
    },
  };

  return (
    <section id="journey" className="section journey-section" data-reveal>
      <div className="container">
        <SectionHeader
          title="A progression built on learning, shipping, and growth."
          description="From first principles through production systems, tracking the evolution of a frontend engineer building toward ambitious products."
          small="Journey"
        />

        <div className="journey-grid">
          {/* Timeline connector line - visual element */}
          <motion.div 
            className="journey-connector"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={connectorVariants}
          />

          {milestoneGroups.map((item, index) => (
            <motion.article
              key={item.years}
              className="journey-card"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={cardVariants}
              whileHover={!prefersReducedMotion ? { 
                y: -6, 
                transition: { duration: 0.3 } 
              } : undefined}
              transition={{ type: 'spring', stiffness: 160, damping: 20 }}
            >
              <div className="journey-card-inner">
                <motion.span 
                  className="journey-year"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.1 + 0.2,
                    type: 'spring',
                    stiffness: 300,
                    damping: 20
                  }}
                >
                  {item.years}
                </motion.span>
                <h3 className="journey-title">{item.title}</h3>
                <p className="journey-description">{item.description}</p>
              </div>
            </motion.article>
          ))}

          {/* Today Card - Special Highlight */}
          <motion.article
            className="journey-card journey-card-today"
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={cardVariants}
            whileHover={!prefersReducedMotion ? { 
              y: -8,
              scale: 1.01,
              transition: { duration: 0.3 } 
            } : undefined}
            transition={{ type: 'spring', stiffness: 160, damping: 20 }}
          >
            <div className="journey-card-inner">
              <motion.span 
                className="journey-year journey-year-today"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: 0.3,
                  type: 'spring',
                  stiffness: 300,
                  damping: 20
                }}
              >
                {today.years}
              </motion.span>
              <h3 className="journey-title">{today.title}</h3>
              <p className="journey-description">{today.description}</p>
              
              {/* Animated indicator for "current" status */}
              <motion.div 
                className="journey-current-indicator"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: 'easeInOut' 
                }}
              />
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

export default Journey;