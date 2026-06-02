import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

function Contact() {
  const buttonRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15 };
  const targetX = useSpring(mouseX, springConfig);
  const targetY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate distance from center, clamp to max offset
    const maxOffset = 15;
    let dx = e.clientX - centerX;
    let dy = e.clientY - centerY;

    // Normalize and clamp
    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxDistance = 120;

    if (distance > 0 && distance < maxDistance) {
      const factor = Math.min(distance / maxDistance, 1);
      dx = (dx / distance) * maxOffset * factor;
      dy = (dy / distance) * maxOffset * factor;
    } else if (distance >= maxDistance) {
      dx = (dx / distance) * maxOffset;
      dy = (dy / distance) * maxOffset;
    }

    mouseX.set(dx);
    mouseY.set(dy);
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="contact" className="section contact-section" data-reveal>
      {/* Background Decorative Text */}
      <div className="contact-bg-text" aria-hidden="true">
        LET'S TALK
      </div>

      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', margin: '0 auto 3rem' }}>
          <span className="section-label" style={{ justifyContent: 'center' }}>06 — Contact</span>
        </div>

        <div className="contact-content">
          <motion.h2
            className="contact-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Let's build something worth building.
          </motion.h2>

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
            style={{
              display: 'inline-block',
              position: 'relative',
            }}
          >
            <motion.a
              ref={buttonRef}
              href="mailto:danieladeleye321@gmail.com?subject=Let's Work Together"
              className="contact-cta"
              style={{
                x: targetX,
                y: targetY,
              }}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Send a Message →
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="contact-socials"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="https://github.com/Tireni4560" target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
            <a href="https://twitter.com/danieladeleye_" target="_blank" rel="noopener noreferrer">
              Twitter ↗
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