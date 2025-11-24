import React from 'react';
import { FaBriefcase, FaDownload } from 'react-icons/fa';
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="resume-wrapper">
        <h2>Resume</h2>
        <div className="resume-glow-container">
          {/* 1. THE GLOW EFFECT (Background Blob) */}
          <div className="resume-glow-blob" aria-hidden="true"></div>
          
          {/* 2. YOUR CARD (Foreground) */}
          <div className="resume-container">
          <div className="resume-content">
            <div className="resume-text-section">
              <div className="resume-header">
                <FaBriefcase className="resume-header-icon" />
                <span>Summary & Resume</span>
              </div>
              <p className="resume-description">
                I am a <strong>Full-Stack Developer</strong> & <strong>Data Analyst</strong> who builds intelligent applications. 
                My background covers <strong>React.js & Node.js</strong> development alongside <strong>Python & Machine Learning</strong> solutions.
                <br className="resume-line-break" />
                I am seeking a <strong>full-time internship opportunity</strong> to solve complex problems in a tech-driven environment.
              </p>
              <p className="download-prompt">
                Download the PDF to view my project architecture, data models, and certifications.
              </p>
            </div>
            <div className="resume-action-section">
              <a href="/resume/M.Akash_Resume().pdf" download="M.Akash_Resume.pdf" className="download-button">
                <FaDownload className="download-icon" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
