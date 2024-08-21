import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Heading from './components/Heading';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import Cart from './components/Cart';
import SignIn from './components/SignInPage';
import Menu from './components/Menu'; // If you have a Menu component

function App() {
  return (
    <Router>
      <Heading />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
