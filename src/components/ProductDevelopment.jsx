"use client";

import { motion } from 'framer-motion';
import AnimatedHeading from './AnimatedHeading';
import ScrambleText from './ScrambleText';
import { useI18n } from '../i18n/I18nProvider';

// Live Tirenify product URL (same target as the hero "See Tirenify" link).
const TIRENIFY_PRODUCT_URL = 'https://check.tirenify.app/';
// Case-study URL: the same link as the "Business control panel" card in the
// Work section (see src/data/projects.js, id 'bizdash').
const DASHBOARD_URL = 'https://bizdash-pi.vercel.app';

// Section 01 — Product: fact bullets, the Tirenify card (moved here unchanged),
// the business-dashboard case study, and the product CTA.
function ProductDevelopment() {
  const { t } = useI18n();
  const caseStudy = t.product.caseStudy;
  const productMailHref = `mailto:${t.mail.productEmail}?subject=${encodeURIComponent(
    t.mail.productSubject
  )}`;

  return (
    <section
      id="product"
      className="section product-section"
      aria-labelledby="product-heading"
      data-reveal
    >
      <div className="container">
        <div className="section-header product-header">
          <ScrambleText text={t.product.label} className="section-label" />
          <h2 id="product-heading">
            <AnimatedHeading text={t.product.heading} />
          </h2>
        </div>

        {/* a) Fact bullets (moved out of the hero). */}
        <div className="product-card">
          <ul className="product-points">
            {t.product.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        {/* b) Tirenify card (moved from the founder block) + c) case study. */}
        <motion.div
          className="trades-card-wrapper trades-featured-grid"
          style={{ marginTop: '2rem' }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="trades-card">
            {/* Tirenify — content, image and both links exactly as they were. */}
            <div className="trades-screenshot">
              <img
                src="/images/tirenify.png"
                alt={t.whoWorkWith.imageAlt}
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="trades-content">
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
                    href={TIRENIFY_PRODUCT_URL}
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
            </div>
          </div>

          {/* c) Case study — same card layout. No tech tags: DASHBOARD_TECH was
              left empty, so the tag row is omitted (never guessing a stack). */}
          <div className="trades-card">
            <div className="trades-content">
              <div className="trades-info">
                <span className="trades-badge">{caseStudy.type}</span>

                <h3 className="trades-name">{caseStudy.title}</h3>

                <p className="trades-tagline">{caseStudy.description}</p>

                <ul className="trades-details">
                  {caseStudy.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                <div className="trades-links">
                  <a
                    href={DASHBOARD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-primary"
                  >
                    {caseStudy.link}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* d) Product CTA — styled like the existing contact links. */}
        <p className="contact-product-nudge" style={{ marginTop: '2rem' }}>
          {t.product.ctaLine}{' '}
          <a href={productMailHref}>{t.mail.productEmail}</a>
        </p>
      </div>
    </section>
  );
}

export default ProductDevelopment;
