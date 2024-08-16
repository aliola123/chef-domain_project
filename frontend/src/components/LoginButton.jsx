
import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import Login from './Login';
import '../App.css/Common.css';

const LoginButton = () => {
  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div>
      <button onClick={toggleLogin} className="login-button">
        {showLogin ? ' Login' : <FaUser />}
      </button>
      {showLogin && (
        <div className="login-container">
          <Login />
        </div>
      )}
    </div>
  );
};

export default LoginButton;
