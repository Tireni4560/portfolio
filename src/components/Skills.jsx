"use client";

import { motion } from 'framer-motion';
import AnimatedHeading from './AnimatedHeading';
import ScrambleText from './ScrambleText';

import { useI18n } from '../i18n/I18nProvider';

function Skills() {
  const { t } = useI18n();
  const skillCategories = t.skills.categories;

  return (
    <section id="stack" className="section" data-reveal>
      <div className="container">
        <div className="section-header">
          <ScrambleText text={t.skills.label} className="section-label" />
          <h2>
            <AnimatedHeading text={t.skills.heading} />
          </h2>
        </div>

        {/* Categorized Skills Grid */}
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              className="skill-category"
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: categoryIndex * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="skill-category-header">
                <span className="skill-category-title">{category.name}</span>
              </div>

              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                    whileHover={{
                      borderColor: 'var(--color-accent)',
                      transition: { duration: 0.15 },
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;