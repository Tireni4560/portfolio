function Hero() {
  return (
    <section id="home" className="section hero-section">
      <div className="container hero-grid">
        <div className="hero-copy" data-reveal>
          <span className="eyebrow">Frontend engineer for premium digital products</span>
          <h1>Designing futuristic business web experiences with polished motion.</h1>
          <p>
            I’m Daniel Adeleye — I build high-end, responsive sites that combine sharp visual systems with performance-first architecture.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="button button-primary">Explore Work</a>
            <a href="#contact" className="button button-secondary">Start a Project</a>
            <a href="mailto:hello@danieladeleye.com" className="button button-tertiary">Email Me</a>
          </div>
          <div className="hero-chips">
            <span className="hero-chip">Glassmorphism UI</span>
            <span className="hero-chip">Motion-driven flow</span>
            <span className="hero-chip">Performance tuned</span>
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
