"use client";

import { motion } from 'framer-motion';
import AnimatedHeading from './AnimatedHeading';
import ScrambleText from './ScrambleText';
import { useI18n } from '../i18n/I18nProvider';

function WhoWorkWith() {
  const { t } = useI18n();

  return (
    <section id="sectores" className="section trades-section" data-reveal>
      <div className="container">
        <div className="section-header">
          <ScrambleText text={t.whoWorkWith.label} className="section-label" />
          <h2>
            <AnimatedHeading text={t.whoWorkWith.heading} />
          </h2>
          <p>{t.whoWorkWith.intro}</p>
        </div>

        <p className="trades-pipeline">{t.whoWorkWith.pipeline}</p>
        <p className="section-label trades-lead-in">{t.whoWorkWith.leadIn}</p>

        {/* Featured card */}
        <motion.div
          className="trades-card-wrapper trades-featured-grid"
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="trades-card">
            {/* Example site */}
            <div className="trades-screenshot">
              <img
                src="/images/tirenify.png"
                alt={t.whoWorkWith.imageAlt}
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="trades-content">
              <div className="trades-grid">
                {/* Left Column - Info */}
                <div className="trades-info">
                  <span className="trades-badge">{t.whoWorkWith.badge}</span>

                  <h3 className="trades-name">{t.whoWorkWith.name}</h3>

                  <p className="trades-tagline">{t.whoWorkWith.tagline}</p>

                  <div className="trades-status">
                    <span className="dot" />
                    {t.whoWorkWith.status}
                  </div>

                  <ul className="trades-details">
                    {t.whoWorkWith.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>

                  <div className="trades-tags">
                    {t.whoWorkWith.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="trades-links">
                    <a
                      href="https://check.tirenify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button-primary"
                    >
                      {t.whoWorkWith.productLink}
                    </a>
                    <a
                      href="https://tirenify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      {t.whoWorkWith.homepageLink}
                    </a>
                  </div>
                </div>

                {/* Right Column - Metrics */}
                <div className="trades-metrics">
                  {t.whoWorkWith.metrics.map((metric) => (
                    <div className="trades-metric" key={metric.label}>
                      <span className="trades-metric-value">{metric.value}</span>
                      <span className="trades-metric-label">{metric.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default WhoWorkWith;