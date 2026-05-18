import SectionHeader from './SectionHeader';

function Vision() {
  return (
    <section id="vision" className="section vision-section" data-reveal>
      <div className="container vision-card">
        <SectionHeader
          title="Purposeful technology with long-term impact."
          description="A mission-driven frontend approach that values clarity, performance, and sustainable product thinking."
          small="Vision"
        />
        <div className="vision-copy">
          <p>
            My vision is to create technology that feels purposeful — tools and systems that solve real problems and stand the test of time. I believe in building with clarity, performance, and long-term thinking at the core.
          </p>
          <p>
            Every project is an opportunity to learn, refine, and push toward bigger ambitions: scalable systems, secure digital experiences, and products that make a meaningful difference. My mission is simple — keep building, keep improving, and keep moving toward impactful technology.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Vision;
