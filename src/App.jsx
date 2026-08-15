import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

function App() {
  const location = useLocation();

  // Scroll to top on route navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Premium lightweight SEO controller
  useEffect(() => {
    const routeTitles = {
      '/': 'Raguveer M | Mern Stack Developer',
      '/about': 'About Me | Raguveer M',
      '/skills': 'Skills & Technologies | Raguveer M',
      '/projects': 'Projects Portfolio | Raguveer M',
      '/experience': 'Professional Experience | Raguveer M',
      '/contact': 'Contact Me | Raguveer M'
    };

    const routeDescriptions = {
      '/': 'Official portfolio of Raguveer M, an aspiring Mern Stack Developer building modern web solutions with clean code.',
      '/about': 'Read about Raguveer M\'s educational background in Computer Science, development journey, and core frameworks.',
      '/skills': 'Browse the complete technical stack of Raguveer M, ranging from Frontend React.js to Backend Django and databases.',
      '/projects': 'Explore software development projects, templates, and coding work completed by Raguveer M.',
      '/experience': 'Learn about Raguveer M\'s Mobile App Development Internship and Computer Science degree studies.',
      '/contact': 'Get in touch with Full Stack Developer Raguveer M for new opportunities, projects, or collaborations.'
    };

    document.title = routeTitles[location.pathname] || 'Raguveer M | Developer Portfolio';

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', routeDescriptions[location.pathname] || 'Developer portfolio website.');
  }, [location.pathname]);

  return (
    <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main className="page-wrapper" style={{ flexGrow: 1 }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
