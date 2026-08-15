import React from 'react';
import { motion } from 'framer-motion';
import './Button.css';

export default function Button({ children, variant = 'primary', onClick, type = 'button', href, target }) {
  const buttonContent = (
    <motion.button
      type={type}
      className={`btn btn-${variant}`}
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <span className="btn-text">{children}</span>
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} className="btn-link">
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
}
