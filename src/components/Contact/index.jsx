import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

const index = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="contact-details">
            <h2>Contact Me</h2>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> Email: example@example.com
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> Phone: +1234567890
            </p>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Address: 123 Street, City, Country
            </p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="contact-form">
            <h2>Get in Touch</h2>
            <form>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea className="form-control" placeholder="Message" rows="6" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
