import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons';
import { config } from '../data/config';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import PageTransition from '../components/PageTransition';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success'

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API request submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <PageTransition>
      <section className="section contact-section">
        <div className="container">
          <SectionTitle title="Contact" subtitle="Let's Connect" />

          <div className="contact-layout">
            {/* Contact Details Column */}
            <div className="contact-info">
              <h3 className="contact-heading">Let's build something together.</h3>
              <p className="contact-desc">
                I'm currently looking for opportunities where I can learn, contribute and grow as a Full Stack Developer.
              </p>

              <div className="contact-cards">
                <a href={`mailto:${config.email}`} className="contact-info-card">
                  <div className="contact-card-icon-wrapper">
                    <Mail size={18} />
                  </div>
                  <div className="contact-card-content">
                    <span className="contact-card-label">Email</span>
                    <span className="contact-card-value">{config.email}</span>
                  </div>
                </a>

                <a href={config.github} target="_blank" rel="noopener noreferrer" className="contact-info-card">
                  <div className="contact-card-icon-wrapper">
                    <GithubIcon size={18} />
                  </div>
                  <div className="contact-card-content">
                    <span className="contact-card-label">GitHub</span>
                    <span className="contact-card-value">{config.github}</span>
                  </div>
                </a>

                <a href={config.linkedin} target="_blank" rel="noopener noreferrer" className="contact-info-card">
                  <div className="contact-card-icon-wrapper">
                    <LinkedinIcon size={18} />
                  </div>
                  <div className="contact-card-content">
                    <span className="contact-card-label">LinkedIn</span>
                    <span className="contact-card-value">{config.linkedin}</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="contact-form-container">
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-input ${errors.name ? 'input-error' : ''}`}
                    placeholder="Enter your name"
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <span className="error-message" role="alert">
                      <AlertCircle size={12} /> {errors.name}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? 'input-error' : ''}`}
                    placeholder="name@domain.com"
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <span className="error-message" role="alert">
                      <AlertCircle size={12} /> {errors.email}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`form-textarea ${errors.message ? 'input-error' : ''}`}
                    placeholder="Tell me about your project or opportunity..."
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <span className="error-message" role="alert">
                      <AlertCircle size={12} /> {errors.message}
                    </span>
                  )}
                </div>

                <div className="form-submit-wrapper">
                  <Button type="submit" variant="primary" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>

                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div 
                      className="contact-success-alert"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      role="alert"
                    >
                      <CheckCircle2 size={16} className="success-alert-icon" />
                      <p className="success-alert-text">
                        Message sent successfully! Thank you, I will get back to you shortly.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
