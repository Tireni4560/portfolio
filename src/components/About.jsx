import { motion } from 'framer-motion';
import { useState } from 'react';
import ExpertiseBar from './ExpertiseBar';
import ScrambleText from './ScrambleText';

function About() {
  const [imageLoaded, setImageLoaded] = useState(false);

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
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <blockquote className="about-pullquote">
              I care less about what technology I'm using and more about whether
              the product I'm building is worth someone's attention.
            </blockquote>

            <div className="about-body">
              <p>
                I'm a frontend developer based in Nigeria with a product-builder mindset.
                I've spent the last few years shipping web interfaces that don't just look good 
                they serve a real purpose for the people who use them.
              </p>

              <p>
                Outside of client work, I'm building Tirenify, a product I believe has
                real market potential. That experience has changed how I approach every project 
                I now think about retention, conversion, and business logic the same way I think
                about component architecture.
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
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="about-photo-wrapper">
              <div className="about-photo">
                <img
                  src="/images/Daniel.jpg"
                  alt="Daniel Adeleye — Frontend Developer and Product Builder"
                  loading="lazy"
                  onLoad={() => setImageLoaded(true)}
                  style={{ opacity: imageLoaded ? 1 : 0 }}
                />
              </div>

              {/* Floating Stat Cards */}
              <motion.div
                className="stat-card stat-card-1"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <span className="number">3+</span>
                <span className="label">Years Building</span>
              </motion.div>

              <motion.div
                className="stat-card stat-card-2"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.32, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <span className="number">4</span>
                <span className="label">Products Shipped</span>
              </motion.div>

              <motion.div
                className="stat-card stat-card-3"
                initial={{ opacity: 0, scale: 0.85 }}
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