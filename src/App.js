import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import AppStore from "./components/AppStore";
import PizzaCard from "./components/PizzaCard";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <PizzaCard />
      <Testimonial />
      <AppStore />
      <Footer />
    </div>
  );
}

export default App;
