function Footer() {
  return (
    <footer className="footer-section">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">Daniel Adeleye</p>
          <p className="footer-copy">Premium frontend experiences built for business growth.</p>
        </div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-socials">
          <a href="https://x.com/danieladeleye_" target="_blank" rel="noreferrer">X</a>
        </div>
      </div>
      <p className="footer-note">© {new Date().getFullYear()} Daniel Adeleye. Built for modern business-focused web experiences.</p>
    </footer>
  );
}

export default Footer;
