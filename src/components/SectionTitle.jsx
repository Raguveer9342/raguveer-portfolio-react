import React from 'react';
import { motion } from 'framer-motion';
import './SectionTitle.css';

export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="section-title-container">
      {subtitle && (
        <motion.span 
          className="section-subtitle"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <span className="accent-marker">//</span> {title}
      </motion.h2>
    </div>
  );
}
