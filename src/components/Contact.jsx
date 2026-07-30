"use client";

import { motion } from 'framer-motion';
import AnimatedHeading from './AnimatedHeading';
import ScrambleText from './ScrambleText';
import MagneticButton from './MagneticButton';

function Contact() {

  return (
    <section id="contact" className="section contact-section" data-reveal>
      {/* Background Decorative Text */}
      <div className="contact-bg-text" aria-hidden="true">
        LET'S TALK
      </div>

      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', margin: '0 auto 3rem' }}>
          <ScrambleText text="07 — Contact" className="section-label" />
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
            Whether it's a client project for your startup, a Tirenify partnership,
            or a conversation about founding — I'm open. I respond within 24 hours to serious inquiries.
          </motion.p>

          <motion.div
            className="contact-availability"
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="dot" />
            Available for: Landing pages, MVP builds, pitch sites, retainer work
          </motion.div>
          <motion.div
            className="contact-direct"
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href="mailto:danieladeleye321@gmail.com">📧 danieladeleye321@gmail.com</a>
            <a href="https://wa.me/2349063626099" target="_blank" rel="noopener noreferrer">💬 +234 906 362 6099</a>
          </motion.div>
          {/* Magnetic CTA Button */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ display: 'inline-block', position: 'relative' }}
          >
            <MagneticButton
              href="mailto:danieladeleye321@gmail.com?subject=Let's Work Together"
              className="contact-cta"
            >
              Let's ship together.
            </MagneticButton>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="contact-socials"
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="https://www.linkedin.com/in/daniel-adeleye-45b37141b?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
            <a href="https://twitter.com/danieladeleye_" target="_blank" rel="noopener noreferrer">
              X ↗
            </a>
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