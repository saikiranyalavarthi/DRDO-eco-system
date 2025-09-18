import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Impact from "./components/Impact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-gray-900">
      <Header />
      <Hero />
      <About />
      <Expertise />
      <Impact />
      <Footer />
    </div>
  );
}

export default App;
