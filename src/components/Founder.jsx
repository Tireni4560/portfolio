"use client";

import { motion } from 'framer-motion';
import AnimatedHeading from './AnimatedHeading';
import ScrambleText from './ScrambleText';
import { useI18n } from '../i18n/I18nProvider';
import { whatsappLink, trackEvent } from '../lib/contact';

function Founder() {
  const { t } = useI18n();

  return (
    <section id="founder" className="section founder-section" data-reveal>
      <div className="container">
        <div className="section-header">
          <ScrambleText text={t.founder.label} className="section-label" />
          <h2>
            <AnimatedHeading text={t.founder.heading} />
          </h2>
          <p>{t.founder.intro}</p>
        </div>

        {/* Featured card */}
        <motion.div
          className="founder-card-wrapper founder-featured-grid"
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="founder-card">
            {/* Example site */}
            <div className="founder-screenshot">
              <img
                src="/images/tirenify.png"
                alt={t.founder.imageAlt}
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="founder-content">
              <div className="founder-grid">
                {/* Left Column - Info */}
                <div className="founder-info">
                  <span className="founder-badge">{t.founder.badge}</span>

                  <h3 className="founder-name">{t.founder.name}</h3>

                  <p className="founder-tagline">{t.founder.tagline}</p>

                  <div className="founder-status">
                    <span className="dot" />
                    {t.founder.status}
                  </div>

                  <ul className="founder-details">
                    {t.founder.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>

                  <div className="founder-tech">
                    {t.founder.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="founder-links">
                    <a
                      href={whatsappLink(t.waMessages.review)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button-primary"
                      onClick={() => trackEvent('WhatsApp', { location: 'who-i-work-with' })}
                    >
                      {t.founder.ctaPrimary}
                    </a>
                    <a
                      href="#projects"
                      className="project-link"
                    >
                      {t.founder.ctaSecondary}
                    </a>
                  </div>
                </div>

                {/* Right Column - Metrics */}
                <div className="founder-metrics">
                  {t.founder.metrics.map((metric) => (
                    <div className="founder-metric" key={metric.label}>
                      <span className="founder-metric-value">{metric.value}</span>
                      <span className="founder-metric-label">{metric.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <p className="founder-pipeline">{t.founder.pipeline}</p>
      </div>
    </section>
  );
}

export default Founder;