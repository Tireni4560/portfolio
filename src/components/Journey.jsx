import SectionHeader from './SectionHeader';

const timeline = [
  { year: '2022', title: 'Started learning development', description: 'Began the journey with HTML, CSS, and layout fundamentals while building project prototypes.' },
  { year: '2023', title: 'Completed core frontend foundations', description: 'Created polished responsive interfaces and began exploring React and business-facing UI patterns.' },
  { year: '2024', title: 'Built multiple frontend products', description: 'Delivered portfolio demos and product-focused interfaces for modern business experiences.' },
  { year: '2025', title: 'Improving fundamentals and systems', description: 'Rebuilt interfaces with stronger architecture while expanding backend, APIs, and security awareness.' },
  { year: 'Today', title: 'Growing toward scalable systems', description: 'Focusing on secure, sustainable products that support startups and long-term product ambition.' },
];

function Journey() {
  return (
    <section id="journey" className="section journey-section" data-reveal>
      <div className="container">
        <SectionHeader
          title="Experience & growth over time"
          description="A milestone-driven progression that emphasizes learning, execution, and long-term product direction."
          small="Journey"
        />
        <div className="timeline-grid">
          {timeline.map((item) => (
            <div key={item.year} className="timeline-item">
              <span className="timeline-year">{item.year}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journey;
