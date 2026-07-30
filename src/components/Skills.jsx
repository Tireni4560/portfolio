"use client";

import { motion } from 'framer-motion';
import AnimatedHeading from './AnimatedHeading';
import ScrambleText from './ScrambleText';

const skillCategories = [
  {
    name: 'Frontend',
    icon: (
      <svg className="skill-category-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'HTML/CSS'],
  },
  {
    name: 'Backend',
    icon: (
      <svg className="skill-category-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    skills: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'Supabase', 'Firebase'],
  },
  {
    name: 'Design',
    icon: (
      <svg className="skill-category-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M14.31 8l5.74 9.94" />
        <path d="M9.69 8h11.48" />
        <path d="M7.38 12l5.74-9.94" />
        <path d="M9.69 16L3.95 6.06" />
        <path d="M14.31 16H2.83" />
        <path d="M16.62 12l-5.74 9.94" />
      </svg>
    ),
    skills: ['Figma', 'UI/UX', 'Component Systems', 'Responsive Design', 'Design Tokens'],
  },
  {
    name: 'Tools',
    icon: (
      <svg className="skill-category-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    skills: ['Git', 'Vercel', 'Vite', 'VS Code', 'Lenis', 'Performance Auditing'],
  },
];

const marqueeRow1 = ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Figma', 'Node.js', 'Supabase'];
const marqueeRow2 = ['GSAP', 'Vite', 'PostgreSQL', 'Git', 'Vercel', 'REST APIs', 'Firebase', 'Lenis'];

function Skills() {
  return (
    <section id="skills" className="section" data-reveal>
      <div className="container">
        <div className="section-header">
          <ScrambleText text="04 — Stack" className="section-label" />
          <h2>
            <AnimatedHeading text="What I build with." />
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
                {category.icon}
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
                      delay: categoryIndex * 0.1 + skillIndex * 0.025,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                    whileHover={{
                      borderColor: 'var(--border-accent)',
                      y: -1,
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

        {/* Horizontal Marquee */}
        <div className="skills-marquee" aria-hidden="true">
          <div className="marquee-row marquee-row-1">
            {[...marqueeRow1, ...marqueeRow1].map((item, i) => (
              <span key={`${item}-${i}`} className="marquee-item">
                {i > 0 && i % marqueeRow1.length === 0 && (
                  <span className="marquee-separator">·</span>
                )}
                {item}
              </span>
            ))}
          </div>
          <div className="marquee-row marquee-row-2">
            {[...marqueeRow2, ...marqueeRow2].map((item, i) => (
              <span key={`${item}-${i}`} className="marquee-item">
                {i > 0 && i % marqueeRow2.length === 0 && (
                  <span className="marquee-separator">·</span>
                )}
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;