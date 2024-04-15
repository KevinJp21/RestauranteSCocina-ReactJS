import React from 'react';
import './App.css'
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import CardContainer from './Components/Cards/CardContainer';


function App() {
  return (
    <>
      <NavBar />
      <Home />
      <CardContainer />
    </>
  );
}

export default App;