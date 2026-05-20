import SectionHeader from './SectionHeader';
import { projects } from '../data/projects';

function Projects() {
  return (
    <section id="projects" className="section projects-section" data-reveal>
      <div className="container">
        <SectionHeader
          title="Selected work showcasing premium frontend execution."
          description="Products built with clean architecture, refined interfaces, and a focus on shipping polished business-ready experiences."
          small="Work"
        />

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-card-top">
                <span className="project-label">{project.tag}</span>
                <h3>{project.title}</h3>
              </div>

              <p>{project.summary}</p>

              <div className="project-stack">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-actions">
                <a href={project.liveLink} target="_blank" rel="noreferrer" className="button button-primary">View live</a>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="button button-secondary">View code</a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
