import React from 'react';
import { motion } from 'framer-motion';
import { config } from '../data/config';
import SectionTitle from '../components/SectionTitle';
import PageTransition from '../components/PageTransition';
import './About.css';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] }
    }
  };

  const coreStack = [
    { name: 'React.js', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Express.js', category: 'Backend' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Python', category: 'Language' },
    { name: 'Django', category: 'Framework' }
  ];

  return (
    <PageTransition>
      <section className="section about-section">
        <div className="container">
          <SectionTitle title="About Me" subtitle="My Story & Background" />

          <motion.div 
            className="about-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="about-text-column">
              <motion.article className="about-card" variants={itemVariants}>
                <h3 className="about-card-title">My Biography</h3>
                <p className="about-card-text">{config.about.bio}</p>
              </motion.article>

              <motion.article className="about-card" variants={itemVariants}>
                <h3 className="about-card-title">My Journey</h3>
                <p className="about-card-text">{config.about.journey}</p>
              </motion.article>

              <motion.article className="about-card" variants={itemVariants}>
                <h3 className="about-card-title">What I Build</h3>
                <p className="about-card-text">{config.about.whatIBuild}</p>
              </motion.article>
            </div>

            <div className="about-sidebar-column">
              <motion.div className="about-card tech-stack-card" variants={itemVariants}>
                <h3 className="about-card-title">Core Stack</h3>
                <div className="core-stack-list">
                  {coreStack.map((tech) => (
                    <div key={tech.name} className="core-tech-badge">
                      <div className="badge-indicator" />
                      <div className="badge-content">
                        <span className="badge-name">{tech.name}</span>
                        <span className="badge-category">{tech.category}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div className="about-card" variants={itemVariants}>
                <h3 className="about-card-title">Currently Learning</h3>
                <ul className="learning-list">
                  {config.about.learning.map((item, index) => (
                    <li key={index} className="learning-list-item">
                      <span className="list-marker">//</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
