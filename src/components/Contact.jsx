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
          <ScrambleText text="06 — Contact" className="section-label" />
        </div>

        <div className="contact-content">
          <h2>
            <AnimatedHeading text="Let's build something worth building." className="contact-title" />
          </h2>

          <motion.p
            className="contact-subtext"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Whether it's a client project, a product idea, or just a conversation —
            I'm open. I typically respond within 24 hours.
          </motion.p>

          <motion.div
            className="contact-availability"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="dot" />
            Available for freelance work · Open to full-time roles
          </motion.div>
<br />
          {/* Magnetic CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ display: 'inline-block', position: 'relative' }}
          >
            <MagneticButton
              href="mailto:danieladeleye321@gmail.com?subject=Let's Work Together"
              className="contact-cta"
            >
              Send a Message →
            </MagneticButton>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="contact-socials"
            initial={{ opacity: 0 }}
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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <span className="contact-trust-item">📍 Based in Nigeria · Works globally</span>
            <span className="contact-trust-item">⚡ Fast turnaround</span>
            <span className="contact-trust-item">✓ Responds in {'<'} 24h</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;