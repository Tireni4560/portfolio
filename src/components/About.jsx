"use client";

import { motion } from 'framer-motion';
import ExpertiseBar from './ExpertiseBar';
import ScrambleText from './ScrambleText';

function About() {
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
              I care less about what technology I'm using and more about whether
              the product I'm building moves the user closer to their goal.
            </blockquote>

            <div className="about-body">
              <p>
                I'm a founder building Tirenify, a digital security product for African internet users.
                I'm also a developer who helps other founders ship fast.
              </p>

              <p>
                Tirenify taught me that shipping matters more than perfection.
                Every line of code is a decision about whether it moves the user closer to their goal.
                That's how I approach every project whether it's landing pages for founders or full-stack MVPs.
              </p>

              <p>
                I think about retention, conversion, and business logic the same way I think about component architecture.
                Most developers build what they're asked to build.
                I spend time understanding what should actually exist and whether it's worth building at all.
              </p>
            </div>

            <div className="about-expertise">
              {[
                { skill: 'React & Frontend', level: 90 },
                { skill: 'UI Engineering', level: 88 },
                { skill: 'Product Thinking', level: 82 },
                { skill: 'Performance & DX', level: 78 },
              ].map((item, index) => (
                <ExpertiseBar key={item.skill} skill={item.skill} level={item.level} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Right Column - Photo with Floating Stats */}
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
                <span className="number">3+</span>
                <span className="label">Years Building</span>
              </motion.div>

              <motion.div
                className="stat-card stat-card-2"
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.32, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <span className="number">4</span>
                <span className="label">Products Shipped</span>
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