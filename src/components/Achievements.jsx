import React from 'react';
import './Achievements.css';

const certifications = [
  'Microsoft Office Specialist: Excel Associate (Office 2019)',
  'Machine Learning with Python – IBM (2024)',
  'Python for Data Science – IBM (2024)',
  'Data Science Tools – IBM (2024)',
];

const volunteerExperience = [
  {
    role: 'President, Legal Electoral Literacy & Road Safety Club',
    duration: 'July 2021 – March 2024',
    description: 'Led road safety and electoral awareness initiatives. Organized programs for students and local communities. Collaborated with Kerala MVD for official training sessions.',
  },
  {
    role: 'Volunteer, National Service Scheme (NSS)',
    duration: 'June 2019 – March 2024',
    description: 'Coordinated community welfare and clean-up programs. Managed team activities during NSS camps. Promoted teamwork and social responsibility.',
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="achievements">
      <h2>Achievements</h2>

      <div className="achievements-subsection">
        <h3>Certifications</h3>
        <ul>
          {certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </div>

      <div className="achievements-subsection">
        <h3>Volunteer Experience</h3>
        {volunteerExperience.map((exp, index) => (
          <div key={index} className="volunteer-exp">
            <h4>{exp.role}</h4>
            <p className="duration">{exp.duration}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
