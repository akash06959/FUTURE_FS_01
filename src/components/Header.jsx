import React, { useEffect, useRef, useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Header.css';

const ROLES = ['Full-Stack Developer', 'Data Analyst', 'Software Engineer', 'Python Developer'];

const TYPING_SPEED = 120;
const DELETING_SPEED = 60;
const ROLE_HOLD_DURATION = 1600;

const Header = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const toastTimeoutRef = useRef(null);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeoutId;

    if (!isDeleting && displayText === currentRole) {
      timeoutId = setTimeout(() => setIsDeleting(true), ROLE_HOLD_DURATION);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    } else {
      const nextText = isDeleting
        ? currentRole.slice(0, displayText.length - 1)
        : currentRole.slice(0, displayText.length + 1);

      timeoutId = setTimeout(() => setDisplayText(nextText), isDeleting ? DELETING_SPEED : TYPING_SPEED);
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isDeleting, roleIndex]);

  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="hero-section">
      <div className="background-blob" aria-hidden="true" />
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-greeting">
            Hi there, I&apos;m <span className="hero-wave">👋</span>
          </span>
          <h1 className="hero-heading">
            <span className="hero-name-text">M AKASH</span>
          </h1>
          <div className="hero-role-line-container">
            <div className="hero-role-line">
              <span className="hero-role-prefix">I am a</span>
              <span className="typewriter-role">
                {displayText}
                <span className="typewriter-cursor">|</span>
              </span>
            </div>
          </div>
          <p className="hero-subheadline">
            I build scalable web applications and intelligent data solutions. By combining <strong>React & Node.js</strong> with <strong>Python & Machine Learning</strong>, I transform complex data into user-friendly products like AgroNova.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="cta-button">
              Check out my work
            </a>
            <a href="#resume" className="cta-button-secondary">
              View Resume
            </a>
          </div>
        </div>
        <div className="hero-social">
          <a
            href="https://www.linkedin.com/in/m-akash-702756259/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a href="https://github.com/akash06959" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <button
            type="button"
            className="email-copy-btn"
            aria-label="Copy email address"
            onClick={() => {
              const email = 'akashmanikandan21@gmail.com';
              navigator.clipboard
                .writeText(email)
                .then(() => {
                  if (toastTimeoutRef.current) {
                    clearTimeout(toastTimeoutRef.current);
                  }
                  setIsToastVisible(true);
                  toastTimeoutRef.current = setTimeout(() => setIsToastVisible(false), 2500);
                })
                .catch((err) => console.error('Failed to copy email:', err));
            }}
          >
            <FaEnvelope />
          </button>
        </div>
      </div>
      <div className={`copy-toast ${isToastVisible ? 'show' : ''}`}>Email copied to clipboard!</div>
    </header>
  );
};

export default Header;
