import { Routes, Route } from 'react-router-dom';
import Layout from './Layout'; 


const RoutesComponent = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/about" element={<h2>About Page</h2>} />
        <Route path="/contact" element={<h2>Contact Page</h2>} />
        <Route path="/login" element={<h2>Login Page</h2>} />
        <Route path="/cart" element={<h2>Cart Page</h2>} />
      </Routes>
    </Layout>
  );
};

export default RoutesComponent;





