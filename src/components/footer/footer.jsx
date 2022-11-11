import React from 'react';
import './footer.css';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return <footer id='footer'>
    <a href="/" className='footer__logo'>Oloja</a>

    <ul className='permalinks'>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
    </ul>

    <div className="footer__socials">
      <a href="https://twitter.com/iRedeploy__">
        <FaTwitter />
      </a>
      <a href="https://github.com/OlojaMuyiwa">
        <FaGithub />
      </a>
      <a href="https://t.co/oXKU6HHuuu">
        <BsLinkedin />
      </a>
    </div>
    <p className="footer__copyright">
      &copy; Oloja 2022.All right reserved
    </p>
  </footer>
}

export default Footer
