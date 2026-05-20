import SectionHeader from './SectionHeader';

function About() {
  return (
    <section id="about" className="section about-section" data-reveal>
      <div className="container about-grid">
        <div className="about-copy">
          <SectionHeader
            title="A product-first frontend practice built for scalability and polish."
            description="I combine interface craftsmanship, responsive systems architecture, and performance-focused engineering for teams building the next generation of products."
            small="About"
          />
          <p>
            I'm Daniel Adeleye, a frontend engineer specializing in building premium digital products with intentional design, strong structure, and long-term usability in mind.
          </p>
          <p>
            Since 2022, I've evolved from foundational interface work into building product-ready systems, shipping responsive, scalable frontends that support business growth across every device.
          </p>
          <p>
            My focus is on high-performance frontend architecture that feels effortless to use, scales cleanly as products grow, and maintains polish across all contexts.
          </p>
        </div>

        <aside className="about-sidebar">
          <div className="profile-card">
            <span>What I create</span>
            <ul className="about-focus-list">
              <li>Responsive product interfaces for digital-first businesses and startups</li>
              <li>Modern UI systems with intentional hierarchy and structure</li>
              <li>Production-ready builds that stay polished across all devices</li>
            </ul>
          </div>

          <div className="skill-card about-skill-card">
            <span>Core expertise</span>
            <div className="skill-pill-grid">
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS / Layout</span>
              <span>Responsive design</span>
              <span>Frontend systems</span>
              <span>Product UI</span>
            </div>
          </div>

          <div className="stats-grid about-stats-grid">
            <div>
              <strong>4+</strong>
              <span>production projects</span>
            </div>
            <div>
              <strong>3 yrs</strong>
              <span>frontend focus</span>
            </div>
            <div>
              <strong>Growing</strong>
              <span>systems expertise</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default About;
