import React from 'react';
import { FaTools, FaBrain, FaRocket, FaBullseye } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-wrapper">
        <h2>About Me</h2>
        <div className="about-container">
          {/* Side-by-Side Profile Section */}
          <div className="about-profile-section">
            <div className="about-image-container">
              <div className="about-image-blob"></div>
              <img 
                src="/images/profile.png" 
                alt="M. Akash" 
                className="about-image" 
                onError={(e) => {
                  e.target.style.display = 'none';
                }} 
              />
            </div>
            <div className="about-text-content">
              <h3 className="about-greeting">
                Hi, I&apos;m M Akash <span className="about-wave">👋</span>
              </h3>
              <div className="about-intro-container">
                <p className="about-intro">
                  I&apos;m a final-year Computer Science student with a solid foundation in full-stack web development. 
                  I specialize in building scalable applications using <strong>React.js, Node.js, Express.js, and Django</strong>.
                </p>
                <p className="about-intro">
                  My focus is on creating user-friendly solutions that solve real-world problems. 
                  I&apos;m passionate about clean code, new technologies, and creating impact through my work.
                </p>
              </div>
            </div>
          </div>
          
          {/* Four-Card Grid */}
          <div className="about-grid">
            <div className="about-card">
              <div className="about-card-header">
                <FaTools className="about-card-icon" />
                <h3 className="about-card-title">Technical Focus</h3>
              </div>
              <p className="about-card-text">
                Building and deploying real-world projects using RESTful APIs, FastAPI, and MongoDB/PostgreSQL.
              </p>
            </div>
            <div className="about-card">
              <div className="about-card-header">
                <FaBrain className="about-card-icon" />
                <h3 className="about-card-title">Development Philosophy</h3>
              </div>
              <p className="about-card-text">
                Writing clean, scalable code and solving real-world problems through practical, product-focused development.
              </p>
            </div>
            <div className="about-card">
              <div className="about-card-header">
                <FaRocket className="about-card-icon" />
                <h3 className="about-card-title">Project Focus</h3>
              </div>
              <p className="about-card-text">
                Actively working on AI-based solutions and full-stack e-commerce applications.
              </p>
            </div>
            <div className="about-card">
              <div className="about-card-header">
                <FaBullseye className="about-card-icon" />
                <h3 className="about-card-title">Career Goal</h3>
              </div>
              <p className="about-card-text">
                Seeking a full-time internship to grow as a software engineer in a collaborative, tech-driven environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
