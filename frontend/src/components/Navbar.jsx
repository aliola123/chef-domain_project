
import { Link } from 'react-router-dom';
import '../App.css/Common.css';

const Navbar = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

