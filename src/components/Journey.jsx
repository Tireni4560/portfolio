import SectionHeader from './SectionHeader';

const milestones = [
  { year: '2022', title: 'Started learning development', description: 'Began the journey with HTML, CSS, and layout fundamentals while building project prototypes.' },
  { year: '2023', title: 'Completed core frontend foundations', description: 'Created polished responsive interfaces and began exploring React and business-facing UI patterns.' },
  { year: '2024', title: 'Built multiple frontend products', description: 'Delivered portfolio demos and product-focused interfaces for modern business experiences.' },
  { year: '2025', title: 'Improving fundamentals and systems', description: 'Rebuilt interfaces with stronger architecture while expanding backend, APIs, and security awareness.' },
];

const today = { year: 'Today', title: 'Growing toward scalable systems', description: 'Focusing on secure, sustainable products that support startups and long-term product ambition.' };

function Journey() {
  return (
    <section id="journey" className="section journey-section" data-reveal>
      <div className="container">
        <SectionHeader
          title="Experience & growth over time"
          description="A milestone-driven progression that emphasizes learning, execution, and long-term product direction."
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
