import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { config } from '../data/config';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            RAGUVEER M
          </Link>
          <p className="footer-role">{config.role}</p>
        </div>

        <div className="footer-nav" role="navigation" aria-label="Footer Navigation">
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/about" className="footer-link">About</Link>
          <Link to="/skills" className="footer-link">Skills</Link>
          <Link to="/projects" className="footer-link">Projects</Link>
          <Link to="/experience" className="footer-link">Experience</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
        </div>

        <div className="footer-socials">
          <a href={config.github} target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="GitHub">
            <GithubIcon size={18} />
          </a>
          <a href={config.linkedin} target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="LinkedIn">
            <LinkedinIcon size={18} />
          </a>
          <a href={`mailto:${config.email}`} className="footer-social-icon" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p className="copyright">
            &copy; {currentYear} {config.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
