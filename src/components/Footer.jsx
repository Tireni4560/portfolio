"use client";

import { motion } from 'framer-motion';

const emailIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 7L12 13L2 7" />
  </svg>
);

const whatsappIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          <motion.span
            className="footer-text"
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            © {new Date().getFullYear()} Daniel Adeleye
          </motion.span>

          <motion.div
            className="footer-links"
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <a
              href="mailto:danieladeleye321@gmail.com"
              className="footer-icon-btn"
              aria-label="Email Daniel Adeleye"
              title="Email"
            >
              {emailIcon}
            </a>
            <a
              href="https://wa.me/2347012345678?text=Hi%20Daniel%2C%20I%27d%20like%20to%20talk%20about%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon-btn"
              aria-label="WhatsApp Daniel Adeleye"
              title="WhatsApp"
            >
              {whatsappIcon}
            </a>
            <button className="footer-top-btn" onClick={scrollToTop} aria-label="Back to top">
              <motion.span whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                Back to top ↑
              </motion.span>
            </button>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="footer-accent-line"
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />
    </footer>
  );
}

export default Footer;