"use client";

import { motion } from 'framer-motion';

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

          <motion.span
            className="footer-text footer-built"
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Built with React · Framer Motion · Tailwind
          </motion.span>

          <motion.div
            className="footer-links"
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
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