import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
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
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
