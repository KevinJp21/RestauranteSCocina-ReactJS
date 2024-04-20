import React, { useState } from 'react';
import './App.css'
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/HomeS';
import About from './Components/About/About';
import PopularDish from './Components/PopularDish/PopularDish';
import Menu from './Components/Menu/Menu';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import Payment from './Components/ShoppingCart/Payment';
import { BasketProvider } from './Components/contexts/BasketContext';

function App() {
  return (
    <>
    <BasketProvider>
    <NavBar />
      <Home />
      <About />
      <PopularDish />
      <Menu />
      <Contact />
      <Footer />
    </BasketProvider>
    </>
  );
}

export default App;