function Hero() {
  return (
    <section id="home" className="section hero-section">
      <div className="container hero-grid">
        <div className="hero-copy" data-reveal>
          <span className="eyebrow">Frontend engineer for premium digital products</span>
          <h1>Designing modern digital experiences with clarity, performance, and precision.</h1>
          <p>
            I build responsive, polished, and performance-focused web interfaces designed for businesses, products, and modern digital experiences.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="button button-primary">View Projects</a>
            <a href="#contact" className="button button-secondary">Contact Me</a>
            <a href="#contact" className="button button-tertiary">Let's Work Together</a>
          </div>
          <div className="hero-details">
            <div>
              <span>Business clarity</span>
              <p>Bring product-driven digital experiences to startups and brands with premium frontends.</p>
            </div>
            <div>
              <span>Future-ready</span>
              <p>Build interfaces that scale visually and keep interactions smooth across devices.</p>
            </div>
          </div>
        </div>
        <div className="hero-visual" data-reveal>
          <div className="hero-card">
            <div className="hero-image-frame">
              <img src="/images/Daniel.jpg" alt="Daniel Adeleye" />
            </div>
            <div className="hero-gradient"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
