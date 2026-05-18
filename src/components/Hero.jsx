function Hero() {
  return (
    <section id="home" className="section hero-section">
      <div className="container hero-grid">
        <div className="hero-copy" data-reveal>
          <span className="eyebrow">Frontend Developer · Business-first Web Experiences</span>
          <h1>Creating premium web products that look polished and perform at scale.</h1>
          <p>
            I’m Daniel Adeleye — a frontend-focused builder shaping modern, responsive digital experiences for business and growth.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="button button-primary">View Projects</a>
            <a href="#contact" className="button button-secondary">Let’s Work Together</a>
            <a href="mailto:hello@danieladeleye.com" className="button button-tertiary">Contact Me</a>
          </div>
          <div className="hero-details">
            <div>
              <span>Startup Ambition</span>
              <p>Building modern frontend systems with strong product and business focus.</p>
            </div>
            <div>
              <span>Security Growth</span>
              <p>Growing into scalable systems and secure web experiences.</p>
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
