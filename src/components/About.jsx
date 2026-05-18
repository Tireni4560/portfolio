import SectionHeader from './SectionHeader';

function About() {
  return (
    <section id="about" className="section about-section" data-reveal>
      <div className="container">
        <SectionHeader
          title="About Daniel"
          description="Ambitious frontend development with a grounded focus on business-ready user experiences."
          small="About"
        />
        <div className="about-grid">
          <div className="about-copy">
            <p>
              I’m Daniel Adeleye, a frontend-focused developer passionate about building modern, responsive web experiences. Since 2022, I’ve been learning and creating projects that combine clean design with solid technical foundations.
            </p>
            <p>
              My journey has been shaped by curiosity, persistence, and a drive to turn ideas into working products.
            </p>
            <p>
              I focus on crafting interfaces that feel intuitive and professional, while steadily expanding my skills into backend systems and digital security. My goal is to grow as a builder who can deliver scalable, impactful technology solutions.
            </p>
          </div>
          <div className="about-sidebar">
            <div className="profile-card">
              <span>Core Focus</span>
              <p>Responsive business websites, SaaS-style dashboards, portfolio experiences, and frontend systems with product clarity.</p>
            </div>
            <div className="stats-grid">
              <div>
                <strong>4+</strong>
                <span>Projects built</span>
              </div>
              <div>
                <strong>Startup</strong>
                <span>Business-focused delivery</span>
              </div>
              <div>
                <strong>Growth</strong>
                <span>Backend & security learning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
