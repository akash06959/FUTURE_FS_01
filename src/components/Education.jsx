import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="education-wrapper">
        <h2>Education</h2>
        <div className="education-container">
        <div className="education-items">
          <div className="education-item">
          <div className="education-header">
            <h3>Master of Computer Applications</h3>
            <span className="education-date">July 2024 - May 2026</span>
          </div>
          <p className="education-institution">Marian College Kuttikkanam (Autonomous)</p>
          <p className="education-coursework">
            <strong>Coursework:</strong> Software Engineering, Full-Stack Development, and AI Integration.
          </p>
        </div>
        <div className="education-item">
          <div className="education-header">
            <h3>Bachelor of Computer Applications</h3>
            <span className="education-date">July 2021 - March 2024</span>
          </div>
          <p className="education-institution">Marian College Kuttikkanam (Autonomous)</p>
          <p className="education-coursework">
            <strong>Coursework:</strong> Web Development, Database Management, and Programming Fundamentals.
          </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Education;

