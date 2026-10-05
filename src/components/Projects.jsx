"use client";

import { motion } from 'framer-motion';
import AnimatedHeading from './AnimatedHeading';
import ScrambleText from './ScrambleText';
import ShowcaseNote from './ShowcaseNote';
import { projects } from '../data/projects';
import { useI18n } from '../i18n/I18nProvider';

function Projects() {
  const { t, lang } = useI18n();
  const clientProjects = projects;

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <ScrambleText text={t.projects.label} className="section-label" />
          <h2>
            <AnimatedHeading text={t.projects.heading} />
          </h2>
          <p>{t.projects.intro}</p>
        </div>

        <ShowcaseNote />

        <div className="projects-grid">
          {clientProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} t={t} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Standard Project Card
function ProjectCard({ project, index, t, lang }) {
  // Each project carries its own ES/EN copy so the card keeps the same shape.
  const copy = project.copy[lang] ?? project.copy.es;

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
        aria-label={`${t.projects.viewProject}: ${copy.presentation}`}
      >
        <img
          src={project.image}
          alt={`${copy.presentation} ${t.projects.imageAltSuffix}`}
          decoding="async"
        />
        <div className="project-image-overlay">
          <span className="project-overlay-cta">{t.projects.viewProject} ↗</span>
        </div>
      </a>

      <div className="project-content">
        <div className="project-meta">
          <span className="project-number">{project.number}</span>
          <span className="project-category">{copy.category}</span>
        </div>

        <h3 className="project-title">{copy.presentation}</h3>
        <p className="project-description">{copy.description}</p>

        <div className="project-results">
          {copy.results.map((result, i) => (
            <span key={i} className="result-pill">
              {result}
            </span>
          ))}
        </div>

        <div className="project-bar">
          <span className="project-tech-stack">
            {copy.technologies.join(' · ')}
          </span>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            {t.projects.liveDemo}
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default Projects;