import SectionHeader from './SectionHeader';

const services = [
  { title: 'Responsive Business Websites', description: 'Fast, mobile-friendly websites that adapt seamlessly across devices.' },
  { title: 'Landing Pages', description: 'Conversion-focused designs that clearly present products and services.' },
  { title: 'Portfolio Websites', description: 'Clean and professional portfolio experiences for individuals and brands.' },
  { title: 'Modern UI Implementation', description: 'Sleek, intuitive interfaces built using React and modern frontend technologies.' },
  { title: 'Website Redesigns', description: 'Transforming outdated websites into modern, responsive digital experiences.' },
  { title: 'Performance-Focused Frontend Development', description: 'Optimized frontend architecture focused on speed, accessibility, and scalability.' },
];

function Services() {
  return (
    <section id="services" className="section services-section" data-reveal>
      <div className="container">
        <SectionHeader
          title="Services built around business growth and strong frontend execution."
          description="A curated set of frontend services designed to move products forward with clarity and performance."
          small="Services"
        />
        <div className="services-grid">
          {services.map((item) => (
            <article key={item.title} className="service-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
