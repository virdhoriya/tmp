import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Faq from "./components/faq/Faq.jsx";
import Games from "./components/games/Games.jsx";
import Footer from "./components/footer/Footer";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/games" element={<Games />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
