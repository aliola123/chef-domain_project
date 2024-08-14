
import '../App.css/Footer.css';
const Footer = () => {
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-links">
        <p>&copy; 2024 Chef Domain. All rights reserved.</p>
        <a href="https://www.facebook.com/emmaedem86" target="_blank" rel="noopener noreferrer" className="footer-icon">
          Facebook
        </a>
        <a href="https://www.twitter.com/emmaedem86" target="_blank" rel="noopener noreferrer" className="footer-icon">
          Twitter
        </a>
      </div>
      <div className="footer-text">
        <p>© {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
