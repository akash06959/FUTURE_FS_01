import React from 'react';
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiDjango,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiFastapi,
} from 'react-icons/si';
import './Skills.css';

const skills = [
  { name: 'React.js', icon: <FaReact />, category: 'Frontend' },
  { name: 'JavaScript', icon: <SiJavascript />, category: 'Frontend' },
  { name: 'Django', icon: <SiDjango />, category: 'Backend' },
  { name: 'FastAPI', icon: <SiFastapi />, category: 'Backend' },
  { name: 'Node.js', icon: <FaNodeJs />, category: 'Backend' },
  { name: 'Express.js', icon: <SiExpress />, category: 'Backend' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, category: 'Database' },
  { name: 'MongoDB', icon: <SiMongodb />, category: 'Database' },
  { name: 'Git', icon: <FaGitAlt />, category: 'Tools' },
  { name: 'GitHub', icon: <FaGithub />, category: 'Tools' },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills-wrapper">
        <h2>Technical Skills</h2>
        <div className="skills-container">
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="skill-card"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="skill-icon-container">
              {skill.icon}
            </div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Skills;
