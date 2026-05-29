import { useState } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import SectionHeader from './SectionHeader';

const initialForm = { name: '', email: '', message: '' };
const socialLinks = [
  { label: 'X / Twitter', href: 'https://x.com/danieladeleye_' },
  { label: 'WhatsApp', href: 'https://wa.me/2349063626099' },
];

function Contact() {
  const prefersReducedMotion = useReducedMotion();
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      }
    },
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus({ type: 'error', message: 'Please complete all fields before sending your message.' });
      return;
    }

    setSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error('Unable to submit message at this time.');
      }

      setForm(initialForm);
      setStatus({ type: 'success', message: 'Message sent successfully — I will respond shortly.' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Unable to send message right now. Please reach out directly on X or WhatsApp.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact-section" data-reveal>
      <div className="container contact-grid">
        <motion.div
          className="contact-copy"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
        >
          <SectionHeader
            title="Ready to discuss your next digital product."
            description="Send a message if you're building something worth building, or want to explore frontend and product strategy together."
            small="Contact"
          />

          <p className="contact-note">
            For immediate contact, use{' '}
            {socialLinks.map((link, index) => (
              <span key={link.label}>
                {index > 0 && ' or '}
                <motion.a 
                  href={link.href} 
                  target="_blank" 
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                </motion.a>
              </span>
            ))}
            .
          </p>

          {/* Social Links as Buttons */}
          <div className="contact-social-buttons">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="contact-social-btn"
                whileHover={!prefersReducedMotion ? { y: -3, scale: 1.02 } : undefined}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="contact-form-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={{ duration: 0.7, delay: prefersReducedMotion ? 0 : 0.1 }}
        >
          <form onSubmit={handleSubmit} className="contact-form" noValidate>
            <motion.label
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Full name
              <motion.input 
                name="name" 
                type="text" 
                value={form.name} 
                onChange={handleChange} 
                placeholder="Your name" 
                required
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                animate={{
                  borderColor: focusedField === 'name' ? 'rgba(96, 165, 250, 0.5)' : 'rgba(148, 163, 184, 0.16)',
                  boxShadow: focusedField === 'name' ? '0 0 0 4px rgba(59, 130, 246, 0.1)' : 'none',
                }}
                transition={{ duration: 0.2 }}
              />
            </motion.label>

            <motion.label
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              Email address
              <motion.input 
                name="email" 
                type="email" 
                value={form.email} 
                onChange={handleChange} 
                placeholder="your@email.com" 
                required
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                animate={{
                  borderColor: focusedField === 'email' ? 'rgba(96, 165, 250, 0.5)' : 'rgba(148, 163, 184, 0.16)',
                  boxShadow: focusedField === 'email' ? '0 0 0 4px rgba(59, 130, 246, 0.1)' : 'none',
                }}
                transition={{ duration: 0.2 }}
              />
            </motion.label>

            <motion.label
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Project details
              <motion.textarea
                name="message"
                rows="6"
                value={form.message}
                onChange={handleChange}
                placeholder="What are you building? What's your vision?"
                required
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                animate={{
                  borderColor: focusedField === 'message' ? 'rgba(96, 165, 250, 0.5)' : 'rgba(148, 163, 184, 0.16)',
                  boxShadow: focusedField === 'message' ? '0 0 0 4px rgba(59, 130, 246, 0.1)' : 'none',
                }}
                transition={{ duration: 0.2 }}
              />
            </motion.label>

            <motion.button 
              type="submit" 
              className="button button-primary" 
              disabled={submitting}
              whileHover={!prefersReducedMotion && !submitting ? { scale: 1.02, y: -2 } : undefined}
              whileTap={!prefersReducedMotion && !submitting ? { scale: 0.97 } : undefined}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              {submitting ? (
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  Sending...
                </motion.span>
              ) : (
                'Send Message'
              )}
            </motion.button>

            <AnimatePresence>
              {status.message && (
                <motion.p 
                  aria-live="polite" 
                  className={`form-status ${status.type === 'success' ? 'status-success' : 'status-error'}`}
                  initial={{ opacity: 0, y: 10, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  exit={{ opacity: 0, y: -10, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {status.message}
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;