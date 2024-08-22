import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Heading from './components/Heading';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import Menu from './components/Menu'; 
import SignIn from "./components/SignIn";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <Router>
      <Heading />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
