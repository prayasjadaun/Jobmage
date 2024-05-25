import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className="foot-logo">
        <span className='blue'>Job</span><span className='green'>Mage</span>
      </div>
      <div className="foot-links">
        <ul className="foot-nav-links">
          <li>
            <a className='a-link' href="#services">About</a>
          </li>
          <li>
            <a className='a-link' href="#Contact">Contact</a>
          </li>
          <li>
            <a className='a-link' href="#home">Home</a>
          </li>
        </ul>
      </div>
      <div className="foot-social">
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faLinkedin} />
      </div>

      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} JobMage. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
