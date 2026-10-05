"use client";

import { motion } from 'framer-motion';
import AnimatedHeading from './AnimatedHeading';
import ScrambleText from './ScrambleText';

import { useI18n } from '../i18n/I18nProvider';
import { whatsappLink, trackEvent } from '../lib/contact';

function Work() {
  const { t } = useI18n();
  const offerings = t.work.offerings;

  return (
    <section id="work" className="section" data-reveal>
      <div className="container">
        <div className="section-header">
          <ScrambleText text={t.work.label} className="section-label" />
          <h2>
            <AnimatedHeading text={t.work.heading} />
          </h2>
          <p>{t.work.intro}</p>
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
              <div className="offering-timeline">{offering.forWho}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="availability-message"
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="availability-message-label">{t.work.noteLabel}</span>
          <span className="availability-message-copy">{t.work.noteCopy}</span>
        </motion.div>

        <motion.div
          className="availability-cta"
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href={whatsappLink(t.waMessages.pricing)}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
            onClick={() => trackEvent('WhatsApp', { location: 'pricing' })}
          >
            {t.work.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Work;