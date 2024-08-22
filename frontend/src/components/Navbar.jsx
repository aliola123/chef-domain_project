
import { Link } from 'react-router-dom';
import '../App.css/Heading.css';

const Navbar = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/AboutUs">About Us</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;