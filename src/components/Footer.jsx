import { motion } from 'framer-motion';

function Footer() {
  const handleBackToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          <motion.span
            className="footer-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            © {new Date().getFullYear()} Daniel Adeleye
          </motion.span>

          <motion.span
            className="footer-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Built with React · Framer Motion · Tailwind
          </motion.span>

          <motion.div
            className="footer-links"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <a href="#home" onClick={handleBackToTop}>
              Back to top ↑
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;