"use client";

import AnimatedHeading from './AnimatedHeading';
import ScrambleText from './ScrambleText';
import { useI18n } from '../i18n/I18nProvider';
import { whatsappLink, telLink, trackEvent } from '../lib/contact';

// Section 02 — the service offer, moved out of the hero. The section is
// position:relative so the hero marquee (position:absolute; bottom:0) can sit
// at the end of this section, exactly as it used to sit at the end of the hero.
function Services() {
  const { t } = useI18n();

  return (
    <section id="services" className="section" style={{ position: 'relative' }} data-reveal>
      <div className="container">
        <div className="section-header">
          <ScrambleText text={t.services.label} className="section-label" />
          <h2>
            <AnimatedHeading text={t.services.heading} />
          </h2>
          <p>{t.services.intro}</p>
          <p>{t.services.remote}</p>
        </div>

        <div className="hero-actions">
          <a
            href={whatsappLink(t.waMessages.hero)}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
            onClick={() => trackEvent('WhatsApp', { location: 'services' })}
          >
            {t.services.primary}
          </a>
          <a
            href="#contact"
            className="button button-secondary"
            onClick={() => trackEvent('Free review', { location: 'services' })}
          >
            {t.services.secondary}
          </a>
          <a
            href={telLink()}
            className="button button-secondary hero-call-button"
            onClick={() => trackEvent('Click to call', { location: 'services' })}
          >
            {t.services.call}
          </a>
        </div>

        <div className="hero-stats">
          {t.services.stats.map((stat) => (
            <div className="hero-stat" key={stat.label}>
              <span className="hero-stat-value">{stat.value}</span>
              <span className="hero-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Industry tag marquee — decorative, pinned to the end of this section. */}
      <div className="hero-marquee" aria-hidden="true">
        <div className="hero-marquee-track">
          {[...t.services.marquee, ...t.services.marquee].map((tag, i) => (
            <span key={i} className="hero-marquee-tag">{tag}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
