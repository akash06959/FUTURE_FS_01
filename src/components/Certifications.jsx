import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    'Microsoft Office Specialist: Excel Associate (Office 2019)',
    'Machine Learning with Python - IBM (2024)',
    'Python for Data Science - IBM (2024)',
    'Data Science Tools - IBM (2024)',
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="certifications-wrapper">
        <h2>Certifications</h2>
        <div className="certifications-container">
        <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-card">
            <p>{cert}</p>
          </div>
        ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Certifications;

