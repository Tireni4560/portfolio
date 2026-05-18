import { skills } from '../data/skills';
import SectionHeader from './SectionHeader';

function Skills() {
  return (
    <section id="skills" className="section skills-section" data-reveal>
      <div className="container">
        <SectionHeader
          title="Tech Skills & Frontend Toolkit"
          description="A balanced stack built for polished interfaces, responsive systems, and business-ready web experiences."
          small="Skills"
        />
        <div className="skills-grid">
          {skills.map((category) => (
            <div key={category.title} className="skill-card">
              <div className="skill-card-head">
                <div className="skill-icon" aria-hidden="true"></div>
                <h3>{category.title}</h3>
              </div>
              <ul>
                {category.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
