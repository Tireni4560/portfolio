"use client";

import { motion } from 'framer-motion';
import AnimatedHeading from './AnimatedHeading';
import ScrambleText from './ScrambleText';
import MagneticButton from './MagneticButton';

const emailIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 7L12 13L2 7" />
  </svg>
);

const whatsappIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

function Contact() {
  return (
    <section id="contact" className="section contact-section" data-reveal>
      {/* Background Decorative Text */}
      <div className="contact-bg-text" aria-hidden="true">
        LET'S TALK
      </div>

      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', margin: '0 auto 3rem' }}>
          <ScrambleText text="05 — Contact" className="section-label" />
        </div>

        <div className="contact-content">
          <h2>
            <AnimatedHeading text="Let's ship together." className="contact-title" />
          </h2>

          <motion.p
            className="contact-subtext"
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Whether it's a Tirenify partnership, a client project, or a conversation — I'm open.
          </motion.p>

          <motion.div
            className="contact-availability"
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="dot" />
            Available for select projects · Responds within 24 hours
          </motion.div>

          {/* Contact Method Icons */}
          <motion.div
            className="contact-methods"
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <a
              href="mailto:danieladeleye321@gmail.com?subject=Let's Work Together"
              className="contact-icon-btn"
              aria-label="Email Daniel Adeleye"
              title="Email"
            >
              {emailIcon}
            </a>
            <a
              href="https://wa.me/2347012345678?text=Hi%20Daniel%2C%20I%27d%20like%20to%20talk%20about%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon-btn"
              aria-label="WhatsApp Daniel Adeleye"
              title="WhatsApp"
            >
              {whatsappIcon}
            </a>
          </motion.div>

          {/* Magnetic CTA Button */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ display: 'inline-block', position: 'relative' }}
          >
            <MagneticButton
              href="mailto:danieladeleye321@gmail.com?subject=Let's Ship Together"
              className="contact-cta button button-primary"
            >
              Let's Talk
            </MagneticButton>
          </motion.div>

          {/* Trust Signals */}
          <motion.div
            className="contact-trust"
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <span className="contact-trust-item">📍 Based in Nigeria · Works globally</span>
            <span className="contact-trust-item">⚡ Fast turnaround · Serious inquiries only</span>
            <span className="contact-trust-item">✓ Responds in {'<'} 24h</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;