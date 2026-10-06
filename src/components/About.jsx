"use client";

import { motion } from 'framer-motion';
import ScrambleText from './ScrambleText';
import { useI18n } from '../i18n/I18nProvider';

function About() {
  const { t } = useI18n();
  const stats = t.about.stats;

  return (
    <section id="about" className="section" data-reveal>
      <div className="container">
        <div className="section-header">
          <ScrambleText text={t.about.label} className="section-label" />
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
              {t.about.quote}
            </blockquote>
            <motion.div
              className="about-whoami-note"
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="about-whoami-note-label">{t.about.noteLabel}</span>
              <p>{t.about.note}</p>
            </motion.div>

            <div className="about-body">
              {/* Founder paragraph (moved from above the Tirenify card). */}
              <p>{t.whoWorkWith.pipeline}</p>
              {t.about.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
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
                  alt={t.about.photoAlt}
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
                <span className="number">{t.about.statCards[0].number}</span>
                <span className="label">{t.about.statCards[0].label}</span>
              </motion.div>

              <motion.div
                className="stat-card stat-card-2"
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.32, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <span className="number">{t.about.statCards[1].number}</span>
                <span className="label">{t.about.statCards[1].label}</span>
              </motion.div>

              <motion.div
                className="stat-card stat-card-3"
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.44, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <span className="number">{t.about.statCards[2].number}</span>
                <span className="label">{t.about.statCards[2].label}</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;