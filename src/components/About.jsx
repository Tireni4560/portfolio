"use client";

import { motion } from 'framer-motion';
import ScrambleText from './ScrambleText';

function About() {
  const stats = [
    { value: '78+', label: 'Active users on Tirenify' },
    { value: '3', label: 'Months to launch' },
    { value: '20+', label: 'Builds shipped while learning' },
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
              I'm building Tirenify because African internet users deserve security tools built for
              their reality, not adapted from somewhere else.
            </blockquote>
            <motion.div
              className="about-founder-note"
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="about-founder-note-label">Founder-first</span>
              <p>
                Tirenify is the priority. Client work is selective, deliberate, and there to fund
                the company while I keep shipping.
              </p>
            </motion.div>

            <div className="about-body">
              <p>
                I'm the founder of Tirenify, a digital security company for African internet users.
                I started it because the threats people face online here are different, and the
                tools available were not built with that reality in mind.
              </p>

              <p>
                I teach myself whatever I need to build it. I ship quickly, listen closely, and
                make decisions from evidence instead of ego. That mindset shapes everything I
                build.
              </p>

              <p>
                I take on select client work to fund Tirenify and stay close to ambitious founders
                who need to move fast. I care about solving meaningful problems, not collecting
                projects.
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
                <span className="number">Founder</span>
                <span className="label">Mode</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;