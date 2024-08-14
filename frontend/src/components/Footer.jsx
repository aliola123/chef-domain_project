import '../App.css/Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-links">
        <p>Follow us on:</p>
        <a href="https://www.facebook.com/emmaedem86" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FaFacebookF />
        </a>
        <a href="https://www.twitter.com/emmaedem86" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/emmaedem86" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/emmaedem86" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FaLinkedinIn />
        </a>
      </div>
      <div className="footer-text">
        <p>&copy; {currentYear} Chef Domain. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
