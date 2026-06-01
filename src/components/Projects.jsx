import { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { projects } from '../data/projects';

function Projects() {
  const featuredProject = projects.find(p => p.featured) || projects[0];
  const standardProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="section" data-reveal>
      <div className="container">
        <div className="section-header">
          <span className="section-label">02 — Work</span>
          <h2>Products I've shipped.</h2>
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
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const rotateX = useTransform(mouseY, [0, 1], [4, -4]);
  const rotateY = useTransform(mouseX, [0, 1], [-6, 6]);
  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
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
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <span className="project-featured-badge">Featured</span>

        <div className="project-info">
          <span className="project-number">{project.number}</span>
          <span className="project-category">{project.category}</span>
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
              href={`https://github.com/Tireni4560`}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              GitHub ↗
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
                src={`https://images.unsplash.com/photo-${getPlaceholderImage(project.id)}`}
                alt={`Screenshot of ${project.title}`}
                loading="lazy"
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
      <div className="project-image">
        <img
          src={`https://images.unsplash.com/photo-${getPlaceholderImage(project.id)}`}
          alt={`Screenshot of ${project.title}`}
          loading="lazy"
        />
      </div>

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

// Helper to get placeholder images
function getPlaceholderImage(projectId) {
  const images = {
    'upwork-showcase': '1561070796-175d61feb4cf?w=800&h=600&fit=crop',
    'bizdash': '1551283885-61473363c3e6?w=800&h=600&fit=crop',
    'miniecom': '1441986300-5864d41a59e6?w=800&h=600&fit=crop',
    'business-landing': '1460925895917-afd2254e565a?w=800&h=600&fit=crop',
  };
  return images[projectId] || '1507238691701-97107f4e5366?w=800&h=600&fit=crop';
}

export default Projects;