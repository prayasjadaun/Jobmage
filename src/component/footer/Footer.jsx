import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './footer.css'

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
        <i className="fab fa-facebook"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-linkedin"></i>
      </div>

      <div className="copyright">
        <p>Copyright © {new Date().getFullYear()} JobMage. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
