import { motion, useReducedMotion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { projects } from '../data/projects';
import { useRef } from 'react';

function Projects() {
  const prefersReducedMotion = useReducedMotion();

  const cardVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.25, 0.1, 0.25, 1],
        delay: prefersReducedMotion ? 0 : index * 0.1,
      },
    }),
  };

  return (
    <section id="projects" className="section projects-section" data-reveal>
      <div className="container">
        <SectionHeader
          title="Selected work showcasing premium frontend execution."
          description="Products built with clean architecture, refined interfaces, and a focus on shipping polished business-ready experiences."
          small="Work"
        />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index} 
              variants={cardVariants}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Individual Project Card Component with 3D tilt effect
function ProjectCard({ project, index, variants, prefersReducedMotion }) {
  const cardRef = useRef(null);
  
  // Mouse position for tilt effect
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  
  // Tilt transforms
  const rotateX = useTransform(mouseY, [0, 1], [4, -4]);
  const rotateY = useTransform(mouseX, [0, 1], [-4, 4]);
  
  // Spring physics for smooth tilt
  const springConfig = { stiffness: 300, damping: 30 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e) => {
    if (prefersReducedMotion || !cardRef.current) return;
    
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
      className="project-card"
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      style={prefersReducedMotion ? {} : {
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformPerspective: 1000,
      }}
      whileHover={!prefersReducedMotion ? { 
        y: -8, 
        transition: { duration: 0.3 } 
      } : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-card-top">
        <span className="project-label">{project.tag}</span>
        <h3>{project.title}</h3>
      </div>

      <p>{project.summary}</p>

      <div className="project-stack">
        {project.technologies.map((tech) => (
          <motion.span 
            key={tech}
            whileHover={!prefersReducedMotion ? { scale: 1.05, y: -1 } : undefined}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            {tech}
          </motion.span>
        ))}
      </div>

      <div className="project-actions">
        <motion.a 
          href={project.liveLink} 
          target="_blank" 
          rel="noreferrer" 
          className="button button-primary"
          whileHover={!prefersReducedMotion ? { scale: 1.03 } : undefined}
          whileTap={{ scale: 0.97 }}
        >
          View live
        </motion.a>
        {project.github && (
          <motion.a 
            href={project.github} 
            target="_blank" 
            rel="noreferrer" 
            className="button button-secondary"
            whileHover={!prefersReducedMotion ? { scale: 1.03 } : undefined}
            whileTap={{ scale: 0.97 }}
          >
            View code
          </motion.a>
        )}
      </div>
    </motion.article>
  );
}

export default Projects;