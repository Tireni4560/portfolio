"use client";

import { motion } from 'framer-motion';
import AnimatedHeading from './AnimatedHeading';
import ScrambleText from './ScrambleText';
import { projects } from '../data/projects';

function Projects() {
  const clientProjects = projects;

  return (
    <section id="projects" className="section" data-reveal>
      <div className="container">
        <div className="section-header">
          <ScrambleText text="02 — Client Work" className="section-label" />
          <h2>
            <AnimatedHeading text="Proof of execution." />
          </h2>
          <p>
            Selected client projects that show how I think, build, and ship.
          </p>
        </div>

        <div className="projects-grid">
          {clientProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Standard Project Card
function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="project-card"
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <a
        className="project-image"
        href={project.liveLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.title} live project`}
      >
        <img
          src={project.image}
          alt={`Screenshot of ${project.title} — live project by Daniel Adeleye`}
          loading="lazy"
          decoding="async"
        />
        <div className="project-image-overlay">
          <span className="project-overlay-cta">View Project ↗</span>
        </div>
      </a>

      <div className="project-content">
        <div className="project-meta">
          <span className="project-number">{project.number}</span>
          <span className="project-category">{project.category}</span>
        </div>

        <h3 className="project-title">{project.presentation}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-results">
          {project.results.map((result, i) => (
            <span key={i} className="result-pill">
              {result}
            </span>
          ))}
        </div>

        <div className="project-bar">
          <span className="project-tech-stack">
            {project.technologies.join(' · ')}
          </span>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Live Demo ↗
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default Projects;