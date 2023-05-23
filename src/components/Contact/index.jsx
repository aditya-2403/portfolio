import React from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter, faGithub, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

emailjs.init('MO8XApIlC-Jlo_neS');
const templateId = 'template_z4rr0jt';
const serviceId = 'service_aod5xxl';

const index = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs.sendForm(serviceId, templateId, e.target, 'MO8XApIlC-Jlo_neS')
      .then((result) => {
        console.log(result.text);
        toast.success('Message sent successfully!');
      })
      .catch((error) => {
        console.log(error.text);
        toast.error('Failed to send message. Please try again.');
      });
  
    e.target.reset();
  };

  return (
    <div className="container contactpage">
      <ToastContainer position='top-center' />
      <div className="row">
        <div className="col-md-6">
          <div className="contact-details">
            <h2>Contact Me</h2>

            <p>Thank you for your interest in my portfolio.
              If you have any questions, project inquiries, or collaboration
              opportunities, please feel free to reach out to me using the contact
              form provided. I look forward to the opportunity to connect and discuss
              how I can assist you in achieving your goals.
            </p>
            <br />
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> Email: apsahoo2403@gmail.com
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> Phone: +91 9348555093
            </p>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Address: Lewis Road, Bhubaneswar, India
            </p>
            <br />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/aditya-prasad-sahoo/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://twitter.com/xiondrey" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://github.com/aditya-2403?tab=repositories" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.instagram.com/_aditya_2403/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.facebook.com/adityaavgeek" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
            <br />
            <br />
          </div>
        </div>
        <div className="col-md-6">
          <div className="contact-form">
            <h2>Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input name='user_name' type="text" className="form-control" placeholder="Your Name" required />
              </div>
              <br />
              <div className="form-group">
                <input name='user_email' type="email" className="form-control" placeholder="Your Email" required />
              </div>
              <br />
              <div className="form-group">
                <textarea name='message' className="form-control" placeholder="Message" rows="6" required></textarea>
              </div>
              <br />
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
            <br />
            <br />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default index;
