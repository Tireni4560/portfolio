"use client";

import SectionHeader from './SectionHeader';

const services = [
  {
    title: 'Webs para fontaneros y empresas de fontanería',
    description: 'Webs pensadas para que te llamen en cuanto estropea una tubería o se rompe la calefacción.',
  },
  {
    title: 'Webs para electricistas',
    description: 'Webs con los servicios claros y un botón para pedir presupuesto sin llamadas de sobra.',
  },
  {
    title: 'Webs para empresas de cubiertas y climatización',
    description: 'Webs que explican el trabajo que haces y en qué zona trabajas.',
  },
  {
    title: 'Webs para clínicas dentales',
    description: 'Webs con servicios, horarios y cómo pedir cita, pensadas para el móvil.',
  },
  {
    title: 'Webs de una página',
    description: 'Para un negocio que solo necesita que le encuentren y le llamen.',
  },
  {
    title: 'Arreglar tu web actual',
    description: 'Cuando la web ya existe pero va lenta, no se entiende o no aparece en Google.',
  },
];

function Services() {
  return (
    <section id="services" className="section services-section" data-reveal>
      <div className="container">
        <SectionHeader
          title="Webs para negocios de servicios. Rápidas, claras y pensadas para el móvil."
          description="Cada web se hace para un oficio y una zona: fontanería, electricidad, cubiertas, climatización y clínicas dentales."
          small="Servicios"
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
