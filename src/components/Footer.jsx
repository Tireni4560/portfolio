"use client";

import { motion } from 'framer-motion';

const emailIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 7L12 13L2 7" />
  </svg>
);

const whatsappIcon = (
  <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z"></path>
      <path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z"></path>
    </g>
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
              href="https://wa.me/2349063626099?text=Hi%20Daniel%2C%20I%27d%20like%20to%20talk%20about%20a%20project"
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