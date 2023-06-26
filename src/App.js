import React from "react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <About />
        </div>
        <Portfolio />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
