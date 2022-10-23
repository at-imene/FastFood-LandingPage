import React from "react";
import Hero from "./components/HeroSection/Hero";
import Navbar from "./components/Header/Navbar";
import Menu from "./components/Menu/Menu";
import Categories from "./components/Categories/Categories";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <Categories />
    </>
  );
}

export default App;
