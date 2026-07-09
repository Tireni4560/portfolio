import { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import AnimatedHeading from './AnimatedHeading';
import ScrambleText from './ScrambleText';
import { projects } from '../data/projects';

function Projects() {
  const featuredProject = projects.find(p => p.featured) || projects[0];
  const standardProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="section" data-reveal>
      <div className="container">
        <div className="section-header">
          <ScrambleText text="02 — Work" className="section-label" />
          <h2>
            <AnimatedHeading text="Products I've shipped." />
          </h2>
          <motion.div
            className="section-line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        <div className="projects-grid">
          {/* Featured Project - Full Width */}
          <FeaturedProjectCard project={featuredProject} />

          {/* Standard Projects Grid */}
          <div className="standard-projects-grid">
            {standardProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Featured Project with Browser Chrome Mockup
function FeaturedProjectCard({ project }) {
  const cardRef = useRef(null);
  const rectRef = useRef(null);
  const rafRef = useRef(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const rotateX = useTransform(mouseY, [0, 1], [4, -4]);
  const rotateY = useTransform(mouseX, [0, 1], [-6, 6]);
  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

  // Rect is measured once per hover (not per pixel of mouse travel), and the
  // motion-value update is batched to one write per animation frame — avoids
  // forcing a synchronous layout read on every raw mousemove event.
  const handleMouseEnter = () => {
    if (cardRef.current) rectRef.current = cardRef.current.getBoundingClientRect();
  };

  const handleMouseMove = (e) => {
    if (!rectRef.current) return;
    const { left, top, width, height } = rectRef.current;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      mouseX.set((e.clientX - left) / width);
      mouseY.set((e.clientY - top) / height);
    });
  };

  const handleMouseLeave = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.article
      ref={cardRef}
      className="project-card-featured"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className="project-featured-inner"
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="project-info">
          <div className="project-meta">
            <span className="project-number">{project.number}</span>
            <span className="project-category">{project.category}</span>
          </div>
          <span className="project-featured-badge">Featured</span>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>

          <div className="project-results">
            {project.results.map((result, i) => (
              <span key={i} className="result-pill">
                {result}
              </span>
            ))}
          </div>

          <div className="project-tech">
            {project.technologies.join(' · ')}
          </div>

          <div className="project-links">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary"
            >
              Live Demo ↗
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-adeleye-45b37141b?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="project-mockup">
          <motion.div
            className="browser-chrome"
            style={{
              perspective: '1000px',
            }}
          >
            <div className="browser-dots">
              <span className="browser-dot browser-dot-1" />
              <span className="browser-dot browser-dot-2" />
              <span className="browser-dot browser-dot-3" />
            </div>
            <div className="browser-url">{project.liveLink}</div>
            <motion.div
              className="browser-viewport"
              style={{
                rotateX: springRotateX,
                rotateY: springRotateY,
              }}
            >
              <img
                src={project.image}
                alt={`Screenshot of ${project.title} — live project by Daniel Adeleye`}
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}

// Standard Project Card
function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 32 }}
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
