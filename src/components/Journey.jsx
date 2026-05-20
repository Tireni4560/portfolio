import SectionHeader from './SectionHeader';

const milestones = [
  { year: '2022', title: 'Started with fundamentals', description: 'Built the foundation with HTML, CSS, and responsive layout design. Created first project prototypes.' },
  { year: '2023', title: 'Mastered core frontend', description: 'Shipped polished, responsive interfaces. Explored React patterns and business UI best practices.' },
  { year: '2024', title: 'Built multiple products', description: 'Delivered product-ready interfaces and full-stack project experiences with focus on polish and scale.' },
  { year: '2025', title: 'Expanding into systems', description: 'Architecting scalable frontend systems, backend integration, and exploring performance and security foundations.' },
];

const today = { year: 'Today', title: 'Building toward the next level', description: 'Creating sustainable, secure products that support ambitious founders and long-term technological vision.' };

function Journey() {
  return (
    <section id="journey" className="section journey-section" data-reveal>
      <div className="container">
        <SectionHeader
          title="A progression built on learning, shipping, and growth."
          description="From first principles through production systems—tracking the evolution of a frontend engineer building toward ambitious products."
          small="Journey"
        />
        <div className="journey-grid">
          {milestones.map((item) => (
            <div key={item.year} className="journey-card">
              <div className="journey-card-inner">
                <span className="journey-year">{item.year}</span>
                <h3 className="journey-title">{item.title}</h3>
                <p className="journey-description">{item.description}</p>
              </div>
            </div>
          ))}
          <div className="journey-card journey-card-today">
            <div className="journey-card-inner">
              <span className="journey-year journey-year-today">{today.year}</span>
              <h3 className="journey-title">{today.title}</h3>
              <p className="journey-description">{today.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journey;
