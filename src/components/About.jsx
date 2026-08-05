"use client";

import { motion } from 'framer-motion';
import ScrambleText from './ScrambleText';

function About() {
  const stats = [
    { value: '78+', label: 'Active users on Tirenify' },
    { value: '3', label: 'Months to launch' },
    { value: '5+', label: 'Products shipped' },
  ];

  return (
    <section id="about" className="section" data-reveal>
      <div className="container">
        <div className="section-header">
          <ScrambleText text="01 — About" className="section-label" />
        </div>

        <div className="about-grid">
          {/* Left Column - Text Content */}
          <motion.div
            className="about-text"
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <blockquote className="about-pullquote">
              I'm a founder. I build products that solve real problems for real people.
            </blockquote>

            <div className="about-body">
              <p>
                I'm the founder of Tirenify, a digital security product for African internet users.
                I started it because the threats Africans face online are different — and the tools
                available weren't built for them.
              </p>

              <p>
                Tirenify taught me that shipping matters more than perfection. Every line of code
                is a decision about whether it moves the user closer to their goal. That's how I
                approach every project.
              </p>

              <p>
                I take on select client work with founders who ship fast. Not because I need to —
                because building with early-stage teams sharpens my product instincts and keeps me
                close to the market.
              </p>
            </div>

            {/* Stats Callouts */}
            <div className="about-stats">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="about-stat"
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <span className="about-stat-value">{stat.value}</span>
                  <span className="about-stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Photo */}
          <motion.div
            className="about-visual"
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="about-photo-wrapper">
              <div className="about-photo">
                <img
                  src="/images/Daniel.jpg"
                  alt="Daniel Adeleye — Founder and product builder"
                  loading="lazy"
                />
              </div>

              {/* Floating Stat Cards */}
              <motion.div
                className="stat-card stat-card-1"
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <span className="number">78+</span>
                <span className="label">Tirenify Users</span>
              </motion.div>

              <motion.div
                className="stat-card stat-card-2"
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.32, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <span className="number">3</span>
                <span className="label">Months to Launch</span>
              </motion.div>

              <motion.div
                className="stat-card stat-card-3"
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.44, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <span className="number">Tirenify</span>
                <span className="label">Current Venture</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;