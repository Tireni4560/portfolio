function Footer() {
  return (
    <footer className="footer-section">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">Daniel Adeleye</p>
          <p className="footer-copy">Building premium digital products with clean frontend systems and thoughtful design.</p>
        </div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#projects">Work</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-socials">
          <a href="https://x.com/danieladeleye_" target="_blank" rel="noreferrer">X / Twitter</a>
          <a href="https://wa.me/2349063626099" target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
      <p className="footer-note">© {new Date().getFullYear()} Daniel Adeleye. Premium frontend engineering for ambitious products.</p>
    </footer>
  );
}

export default Footer;
