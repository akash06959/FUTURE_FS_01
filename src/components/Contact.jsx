import React from 'react';
import { FaEnvelope, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-wrapper">
        <h2>Contact</h2>
        <div className="contact-container">
        <div className="contact-content">
          {/* Identity Section - No Boxes */}
          <div className="contact-identity">
            <h3 className="contact-name">M Akash</h3>
            <p className="contact-title">Full-Stack Developer</p>
            <p className="contact-location">
              <FaMapMarkerAlt className="location-icon" />
              Idukki, Kerala, India
            </p>
          </div>

          {/* Spacer */}
          <div className="contact-spacer"></div>

          {/* Actionable Items - Boxes */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=akashmanikandan21@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-action-box"
          >
            <FaEnvelope className="contact-icon" />
            <span className="contact-action-text">akashmanikandan21@gmail.com</span>
          </a>

          <a
            href="https://github.com/akash06959"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-action-box"
          >
            <FaGithub className="contact-icon" />
            <span className="contact-action-text">akash06959</span>
          </a>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Contact;
