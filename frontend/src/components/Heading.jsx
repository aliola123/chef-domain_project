import { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import '../App.css/Header.css';

const Heading = () => {
  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <>
    <h1 className="chefdomain">CHEF DOMAIN</h1>
    <header>
      <h1 className="chefdomain">CHEF DOMAIN</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <button onClick={toggleLogin}>
              {showLogin ? 'Close Login' : 'Login'}
            </button>
            {showLogin && (
              <div className="login-container">
                <Login />
              </div>
            )}
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
      </header>
      </>
  );
};

export default Heading;
