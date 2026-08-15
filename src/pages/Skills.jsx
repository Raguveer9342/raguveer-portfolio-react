import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { GithubIcon } from '../components/BrandIcons';
import { skillsData } from '../data/skills';
import SectionTitle from '../components/SectionTitle';
import PageTransition from '../components/PageTransition';
import './Skills.css';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] }
    }
  };

  return (
    <PageTransition>
      <section className="section skills-section">
        <div className="container">
          <SectionTitle title="Skills" subtitle="Technical Arsenal" />

          {skillsData.map((group) => (
            <div key={group.category} className="skills-category-group">
              <h3 className="category-title">
                <span className="category-dot" /> {group.category}
              </h3>
              
              <motion.div 
                className="skills-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {group.items.map((skill) => {
                  // Resolve Lucide Icon dynamically
                  const LucideIcon = Icons[skill.icon] || Icons.Code;
                  const isGithub = skill.icon === 'Github';
                  
                  return (
                    <motion.div 
                      key={skill.name} 
                      className="skill-card"
                      variants={cardVariants}
                      whileHover={{ y: -4, borderColor: 'var(--accent)' }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="skill-icon-wrapper">
                        {isGithub ? (
                          <GithubIcon className="skill-icon" size={22} />
                        ) : (
                          <LucideIcon className="skill-icon" size={22} />
                        )}
                      </div>
                      <div className="skill-content">
                        <h4 className="skill-name">{skill.name}</h4>
                        <p className="skill-description">{skill.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
