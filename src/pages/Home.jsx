import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons';
import { config } from '../data/config';
import Button from '../components/Button';
import ProfileImage from '../components/ProfileImage';
import PageTransition from '../components/PageTransition';
import './Home.css';

export default function Home() {
  // Pure CSS-driven high performance mouse follow effect
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
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
      <section className="hero" onMouseMove={handleMouseMove}>
        {/* Subtle Grid and Glow */}
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-radial-glow" aria-hidden="true" />
        <div className="hero-mouse-glow" aria-hidden="true" />

        <div className="container hero-container">
          <motion.div 
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <span className="status-badge">{config.status}</span>
            </motion.div>

            <motion.h1 className="hero-title" variants={itemVariants}>
              Hi, I'm <span className="accent-text">{config.name.split(' ')[0]}</span>.
            </motion.h1>

            <motion.h2 className="hero-subtitle" variants={itemVariants}>
              {config.role}
            </motion.h2>

            <motion.p className="hero-description" variants={itemVariants}>
              {config.tagline}
            </motion.p>

            <motion.div className="hero-actions" variants={itemVariants}>
              <Button variant="primary" href="/projects">
                View My Work
              </Button>
              <Button variant="secondary" href="/contact">
                Contact Me
              </Button>
            </motion.div>

            <motion.div className="hero-socials" variants={itemVariants}>
              <a 
                href="https://github.com/Raguveer9342" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hero-social-link"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/raguveer-m-739060356/"
                target="_blank" 
                rel="noopener noreferrer" 
                className="hero-social-link"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={20} />
              </a>
              <a 
                href={`mailto:${config.email}`} 
                className="hero-social-link"
                aria-label="Email Me"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <ProfileImage />
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
