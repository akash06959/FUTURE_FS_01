import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience-wrapper">
        <h2>Experience</h2>
        <div className="experience-container">
        <div className="experience-items">
          <div className="experience-item">
          <div className="experience-header">
            <h3>President, Legal Electoral Literacy & Road Safety Club</h3>
            <span className="experience-date">July 2021 - March 2024</span>
          </div>
          <ul className="experience-contributions">
            <li>Led club initiatives promoting road safety and electoral awareness</li>
            <li>Organized awareness programs for students and local residents</li>
            <li>Collaborated with Kerala MVD to host official safety sessions</li>
          </ul>
        </div>
        <div className="experience-item">
          <div className="experience-header">
            <h3>Volunteer, National Service Scheme (NSS)</h3>
            <span className="experience-date">June 2019 - March 2024</span>
          </div>
          <ul className="experience-contributions">
            <li>Coordinated welfare and clean-up drives across communities</li>
            <li>Led team activities during NSS camps and service events</li>
            <li>Promoted teamwork and social responsibility through active participation</li>
          </ul>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Experience;

