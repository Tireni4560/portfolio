import SectionHeader from './SectionHeader';

const testimonials = [
  { label: 'Proof of work', title: 'Designed polished web experiences', detail: 'Ready for future testimonials, case outcomes, and client feedback in a clean, professional layout.' },
  { label: 'Trusted process', title: 'Business-ready frontend systems', detail: 'Structured for product clarity, responsive performance, and scalable UI implementation.' },
  { label: 'Results ready', title: 'Growth-oriented digital identity', detail: 'A professional portfolio foundation built for future brand storytelling and achievement metrics.' },
];

function Testimonials() {
  return (
    <section id="proof" className="section testimonials-section" data-reveal>
      <div className="container">
        <SectionHeader
          title="Testimonials and proof-ready storytelling."
          description="A professional layout that scales for client feedback, project outcomes, and future achievement highlights."
          small="Proof"
        />
        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <article key={item.title} className="testimonial-card">
              <span className="testimonial-label">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
