"use client";

import { motion } from 'framer-motion';
import AnimatedHeading from './AnimatedHeading';
import ScrambleText from './ScrambleText';

const availabilityItems = [
  'Landing pages & pitch sites: $400–900 (5–7 days)',
  'MVP builds & proof-of-concept: $1,500–5,000 (2–4 weeks)',
  'High-conversion product sites: $800–2,000 (1–2 weeks)',
  'Retainer partnerships: $150–400/month (ongoing support)',
];

const founderBenefits = [
  'Fast turnaround: landing pages in 5–7 days because I understand early-stage urgency.',
  'Security-first thinking: built a digital security product, so that lens shows up in every project.',
  'Conversion-focused: I optimize for what users actually do, not just how polished the layout looks.',
  'Product thinking: I do not just build what you ask. I ask whether it is the right thing to build.',
  'Retention-first: every project is built with long-term engagement and scalability in mind.',
];

function Work() {
  return (
    <section id="work" className="section" data-reveal>
      <div className="container">
        <div className="section-header">
          <ScrambleText text="03 — Work" className="section-label" />
          <h2>
            <AnimatedHeading text="How I work with founders." />
          </h2>
          <p>
            I work with founders who need to ship fast and think about retention from day one.
          </p>
        </div>

        <div className="skills-grid">
          <motion.div
            className="skill-category"
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="skill-category-header">
              <span className="skill-category-title">Available for client work</span>
            </div>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
              I keep the scope tight, the turnaround fast, and the expectations clear.
            </p>
            <ul className="founder-details" style={{ marginBottom: 0 }}>
              {availabilityItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="skill-category"
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="skill-category-header">
              <span className="skill-category-title">Why work with me</span>
            </div>
            <ul className="founder-details" style={{ marginBottom: 0 }}>
              {founderBenefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="section-header" style={{ marginTop: '2.5rem' }}>
          <p>
            I am selective about projects. I work best with founders who are shipping products,
            not vanity sites.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Work;