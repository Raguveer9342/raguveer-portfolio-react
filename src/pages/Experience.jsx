import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { experienceData } from '../data/experience';
import { config } from '../data/config';
import SectionTitle from '../components/SectionTitle';
import PageTransition from '../components/PageTransition';
import './Experience.css';

export default function Experience() {
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
      transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] }
    }
  };

  return (
    <PageTransition>
      <section className="section experience-section">
        <div className="container">
          <SectionTitle title="Journey" subtitle="Experience & Education" />

          <div className="experience-layout">
            {/* Experience Column */}
            <div className="experience-column">
              <h3 className="timeline-section-title">
                <Briefcase size={18} className="timeline-title-icon" /> Experience
              </h3>

              <motion.div 
                className="timeline-track"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {experienceData.map((item, index) => (
                  <motion.div key={index} className="timeline-item" variants={itemVariants}>
                    <div className="timeline-bullet" aria-hidden="true" />
                    
                    <div className="timeline-card">
                      <div className="timeline-card-header">
                        <span className="timeline-date">
                          <Calendar size={12} /> {item.duration}
                        </span>
                        <h4 className="timeline-role">{item.role}</h4>
                        <span className="timeline-company">{item.company}</span>
                      </div>
                      
                      <p className="timeline-description">{item.description}</p>
                      
                      <div className="timeline-tech-stack">
                        <span className="tech-stack-label">Core Tech:</span>
                        <span className="timeline-tech-badge">{item.technology}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Education Column */}
            <div className="education-column">
              <h3 className="timeline-section-title">
                <GraduationCap size={20} className="timeline-title-icon" /> Education
              </h3>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <div className="education-card">
                  <div className="education-card-header">
                    <span className="education-date">
                      <Calendar size={12} /> {config.education.duration}
                    </span>
                    <h4 className="education-degree">{config.education.degree}</h4>
                    <span className="education-school">{config.education.college}</span>
                  </div>

                  <p className="education-description">
                    Focusing on core computer science foundations, software engineering practices, system designs, databases, and building full-stack web applications.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
