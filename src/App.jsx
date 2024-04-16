import React from 'react';
import './App.css'
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/HomeS';
import About from './Components/About/About';
import CardContainer from './Components/Menu/CardContainer';



function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <CardContainer />
    </>
  );
}

export default App;