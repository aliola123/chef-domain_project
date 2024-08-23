

import PropTypes from 'prop-types'; // Import PropTypes
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const token = localStorage.getItem('token');

  // Render either the protected component or redirect based on authentication status
  return token ? <Element {...rest} /> : <Navigate to="/signin" />;
};

// Add prop types validation
ProtectedRoute.propTypes = {
  element: PropTypes.elementType.isRequired, // Validates that 'element' is a component
};

export default ProtectedRoute;
