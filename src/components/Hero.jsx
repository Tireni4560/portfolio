function Hero() {
  return (
    <section id="home" className="section hero-section">
      <div className="container hero-grid">
        <div className="hero-copy" data-reveal>
          <span className="eyebrow">Frontend engineer &amp; product builder</span>
          <h1>Premium digital products built with clarity, performance, and intentional design.</h1>
          <p>
            I build responsive, production-ready interfaces for ambitious teams and founders. Strong frontend architecture meets thoughtful product design—no unnecessary effects, just polish that ships.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="button button-primary">View recent work</a>
            <a href="#contact" className="button button-secondary">Start a conversation</a>
          </div>
          <div className="hero-summary">
            <div>
              <span>Product clarity</span>
              <p>Interfaces designed to support growth, delight users, and scale with your business long-term.</p>
            </div>
            <div>
              <span>Technical excellence</span>
              <p>Responsive, performance-aware systems with maintainable architecture and polished execution.</p>
            </div>
          </div>
        </div>

        <aside className="hero-panel" data-reveal>
          <div className="hero-panel-card">
            <div className="hero-profile">
              <div className="hero-profile-image">
                <img src="/images/Daniel.jpg" alt="Portrait of Daniel Adeleye" />
              </div>
              <div>
                <p className="hero-profile-label">Daniel Adeleye</p>
                <h2>Frontend engineer &amp; product designer</h2>
              </div>
            </div>

            <p className="hero-panel-copy">
              I build premium digital experiences for product teams and founders. Focused on clean frontend systems, thoughtful UI design, and shipping that matters.
            </p>

            <div className="hero-panel-list">
              <div>
                <strong>Built for clarity</strong>
                <span>Strong hierarchy, intentional design, confident execution at every scale.</span>
              </div>
              <div>
                <strong>Production ready</strong>
                <span>Responsive, performance-focused systems built to grow with your business.</span>
              </div>
            </div>

            <div className="hero-panel-links">
              <a href="https://x.com/danieladeleye_" target="_blank" rel="noreferrer" className="button button-secondary">X / @danieladeleye_</a>
              <a href="https://wa.me/2349063626099" target="_blank" rel="noreferrer" className="button button-tertiary">WhatsApp chat</a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Hero;
