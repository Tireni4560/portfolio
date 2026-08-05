"use client";

import { motion } from 'framer-motion';
import AnimatedHeading from './AnimatedHeading';
import ScrambleText from './ScrambleText';

const offerings = [
  {
    title: 'Landing pages & pitch sites',
    price: '$400–900',
    timeline: '5–7 days',
  },
  {
    title: 'MVP & proof-of-concept',
    price: '$1,500–5,000',
    timeline: '2–4 weeks',
  },
  {
    title: 'Retainer partnerships',
    price: '$150–400',
    timeline: 'Per month',
  },
];

function Work() {
  return (
    <section id="work" className="section" data-reveal>
      <div className="container">
        <div className="section-header">
          <ScrambleText text="03 — Availability" className="section-label" />
          <h2>
            <AnimatedHeading text="Selective freelance build slots." />
          </h2>
          <p>
            I take on 2–3 projects each month to fund Tirenify. Best fit: founders and startups
            that need to ship quickly.
          </p>
        </div>

        <div className="offerings-grid">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.title}
              className="offering-card"
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <h3 className="offering-title">{offering.title}</h3>
              <div className="offering-price">{offering.price}</div>
              <div className="offering-timeline">{offering.timeline}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="availability-message"
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="availability-message-label">Founder builds only</span>
          <span className="availability-message-copy">
            If you have a deadline and a half-finished Figma, let's turn it into something real.
          </span>
        </motion.div>

        <motion.div
          className="availability-cta"
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <a href="#contact" className="button button-primary">
            Start a project
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Work;