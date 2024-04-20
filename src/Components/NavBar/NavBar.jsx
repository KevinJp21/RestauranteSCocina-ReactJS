import React, {useEffect, useState } from "react";
import './NavBar.css'
import './sideBar.css'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);  // Inicialmente el sidebar está cerrado
  const [scroll, setScroll] = useState(false);

  // Función para abrir el sidebar
  const handleOpenSidebar = () => {
    setIsOpen(true);
  };

  // Función para cerrar el sidebar
  const handleCloseSidebar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      // Cambia el estado basado en la posición del scroll
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    // Evento para detectar scroll
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <> 
    <div className={`DarkOverlay ${isOpen ? 'DarkOverlayOpen' : ''}`} id="DarkOverlay" onClick={handleCloseSidebar}></div>
      <div className={`sideBarContainer ${isOpen ? 'sideBarOpen' : ''}`} id="sideBarContainer">
        
        <div className="sideBarContent">
          <div className="section1" id="section1">
            <a className="navbar-brand f-lg-5 ms-lg-5 " href="#" id="logo">
              Restaurante S <span className="yellow">Co</span>
              <span className="blue">ci</span>
              <span className="red">na</span>
            </a>
            <button className="closeSideBar" id="closeSideBar" onClick={handleCloseSidebar}>
              <i className="fa-solid fa-circle-xmark"></i>
            </button>
          </div>
        </div>
      </div>
 
  
    <nav className={`navbar navbar-expand-lg ${scroll ? 'scrolled' : ''}`} id="navbar">
        <div className="container-fluid ms-4 me-4" id="container-fluid">

        
          <a className="navbar-brand f-lg-5 ms-lg-2 " href="#" id="logo">
            Restaurante S <span className="yellow">Co</span>
            <span className="blue">ci</span>
            <span className="red">na</span>
          </a>
          <div className="locationContent " id="locationContent">
            <i className="fa-solid fa-location-dot" id="locationIcon"></i>
            <span id="locationName">Barranquilla, Atlantico, Colombia</span>
          </div>

          <div className="userContentLogin ms-auto" id="userContentLogin">
            <a className="" id="">
              <i className="fa-solid fa-user-circle" id="userIcon"></i>
              <span id="login">Iniciar sesión</span>
            </a>
          </div>

          <div className="cartShopping" id="cartShopping">
            <button><i className="fa-solid fa-cart-shopping"></i></button>
          </div>
          <div className="bars" id="bars">
            <button className="btnBars" id="btnBars" onClick={handleOpenSidebar}>
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
          <div className="locationContent-show col-12" id="locationContent-show">
            <i className="fa-solid fa-location-dot" id="locationIcon"></i>
            <span id="locationName">Barranquilla, Atlantico, Colombia</span>
          </div>
        </div>
      </nav></>
  );
};

export default NavBar;
