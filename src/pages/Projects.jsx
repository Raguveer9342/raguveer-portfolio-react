import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '../components/BrandIcons';
import { projectsData } from '../data/projects';
import SectionTitle from '../components/SectionTitle';
import PageTransition from '../components/PageTransition';
import './Projects.css';
import BMWimg from '../src/assets/BMW-img.jpeg';


// Import the generated placeholder image
import projectPlaceholderImg from '../assets/project-placeholder.jpg';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] }
    }
  };

  return (
    <PageTransition>
      <section className="section projects-section">
        <div className="container">
          <SectionTitle title="Projects" subtitle="Selected Portfolio Works" />

          <motion.div 
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {projectsData.map((project) => (
              <motion.article 
                key={project.id} 
                className="project-card"
                variants={cardVariants}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
              >
                <div className="project-image-wrapper">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-image"
                  />
                  <div className="project-image-overlay" aria-hidden="true" />
                </div>

                <div className="project-content">
                  <span className="project-index">{project.indexText}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech-tags">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="project-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-action-links">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-action-link"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon size={16} /> Code
                    </a>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-action-link"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
