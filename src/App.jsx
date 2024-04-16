import React from 'react';
import './App.css'
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/HomeS';
import About from './Components/About/About';
import PopularDish from './Components/PopularDish/PopularDish';
import CardContainer from './Components/Menu/CardContainer';



function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <PopularDish />
      <CardContainer />
    </>
  );
}

export default App;