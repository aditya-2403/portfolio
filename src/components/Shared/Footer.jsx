import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub, faFacebookF ,faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white ">
      <div className="container">
        <p>&copy; 2023 Aditya Prasad Sahoo. All rights reserved.</p>
        <div className="social-links">
          <a className='social-links' href="https://twitter.com/xiondrey" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a className='social-links' href="https://www.linkedin.com/in/aditya-prasad-sahoo/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a className='social-links' href="https://github.com/aditya-2403?tab=repositories" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a className='social-links' href="https://www.facebook.com/adityaavgeek" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>

          <a className='social-links' href="https://www.instagram.com/_aditya_2403/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
