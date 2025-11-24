import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCode } from 'react-icons/fa';
import './Projects.css';

const PROJECT_IMAGE_DIMENSIONS = { width: 800, height: 520 };

const projects = [
  {
    name: 'AgroNova',
    tagline: 'Smart Agriculture Management Platform',
    description: 'Web platform for farm data management and crop monitoring. Features ML-powered soil analysis, crop condition tracking, and sensor data integration. Scalable for future features like automated irrigation recommendations.',
    techStack: ['FastAPI', 'React', 'Python ML Models'],
    image: '/images/agronova-cover.webp',
    githubUrl: 'https://github.com/akash06959/Agronova',
    liveUrl: 'https://agronova-dun.vercel.app/',
    hasLiveDemo: false,
  },
  {
    name: 'LearnHub',
    tagline: 'E-Learning Course Platform',
    description: 'Web platform for subject-oriented course enrollment and material access. Supports course browsing, purchase, and post-enrollment content access. Scalable for future features like quizzes and progress tracking.',
    techStack: ['Django', 'React'],
    image: '/images/elearning-cover.webp',
    githubUrl: 'https://github.com/akash06959/Elearningplatform',
    liveUrl: 'https://github.com/akash06959/Elearningplatform',
    hasLiveDemo: false,
  },
  {
    name: 'PcHaven',
    tagline: 'Custom PC Showcase & Storefront',
    description: 'A curated storefront experience for custom PCs that blends product storytelling with modular card layouts, enabling visitors to browse builds, compare specs, and jump to purchase links effortlessly.',
    techStack: ['React', 'Tailwind CSS', 'Vite'],
    image: '/images/pchaven-cover.webp',
    githubUrl: 'https://github.com/akash06959/PcHaven',
    liveUrl: 'https://github.com/akash06959/PcHaven',
    hasLiveDemo: false,
  },
];

const VideoModal = ({ isOpen, onClose, projectName, githubUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="video-modal-overlay" onClick={onClose}>
      <div className="video-modal" onClick={(e) => e.stopPropagation()}>
        {/* Film Strip Decorative Element */}
        <div className="video-modal-film-strip"></div>
        
        <button className="video-modal-close" onClick={onClose} aria-label="Close">
          <FaTimes />
        </button>
        <div className="video-modal-icon">
          <span className="video-modal-emoji">🎬</span>
        </div>
        <h3 className="video-modal-title">Coming Soon to Screens</h3>
        <p className="video-modal-text">
          The <strong>Director's Cut</strong> for <strong>{projectName}</strong> is currently in post-production. I'm polishing the pixels and rendering the final frames. Check back soon!
        </p>
        <div className="video-modal-actions">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="video-modal-btn-primary"
            onClick={onClose}
          >
            <FaCode /> Peek Behind the Scenes (Code)
          </a>
          <button className="video-modal-btn-secondary" onClick={onClose}>
            I'll wait for the premiere
          </button>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleDemoClick = (project) => {
    if (project.hasLiveDemo) {
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
    } else {
      setSelectedProject(project);
      setModalOpen(true);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-wrapper">
        <h2>Projects</h2>
        <div className="projects-container">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              {project.image && (
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    decoding="async"
                    width={PROJECT_IMAGE_DIMENSIONS.width}
                    height={PROJECT_IMAGE_DIMENSIONS.height}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.style.background = 'var(--bg-secondary)';
                    }}
                  />
                </div>
              )}
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-name">{project.name}</h3>
                  <span className="project-tagline">{project.tagline}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="tech-stack">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-buttons">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-btn btn-code"
                  >
                    <FaGithub /> View Code
                  </a>
                  <button
                    onClick={() => handleDemoClick(project)}
                    className="project-btn btn-demo"
                  >
                    <FaExternalLinkAlt /> {project.hasLiveDemo ? 'Live Demo' : 'Watch Demo'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
      <VideoModal
        isOpen={modalOpen}
        onClose={closeModal}
        projectName={selectedProject?.name || ''}
        githubUrl={selectedProject?.githubUrl || '#'}
      />
    </section>
  );
};

export default Projects;
