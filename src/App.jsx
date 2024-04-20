import React, { useState } from 'react';
import './App.css'
import NavBar from './Components/NavBar/NavBar';
import Sidebar from './Components/NavBar/sideBar';
import Home from './Components/Home/HomeS';
import About from './Components/About/About';
import PopularDish from './Components/PopularDish/PopularDish';
import Menu from './Components/Menu/Menu';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <PopularDish />
      <Menu />
      <Contact />
      <Footer />

    </>
  );
}

export default App;