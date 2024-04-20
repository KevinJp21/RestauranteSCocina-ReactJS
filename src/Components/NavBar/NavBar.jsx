import React, {useEffect, useState } from "react";
import './NavBar.css'
import './Basket.css'
import './sideBar.css'
import BasketContent from "./BasketContent";

const NavBar = () => {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);  // Inicialmente el sidebar está cerrado
  const [isOpenBasket, setIsOpenBasket] = useState(false);  // Inicialmente el sidebar está cerrado
  const [scroll, setScroll] = useState(false);

  // Función para abrir el sidebar
  const handleOpenSidebar = () => {
    setIsOpenSideBar(true);
  };

  // Función para cerrar el sidebar
  const handleCloseSidebar = () => {
    setIsOpenSideBar(false);
  };

   // Función para abrir el carrito
   const handleOpenBasket = () => {
    setIsOpenBasket(true);
  };

  // Función para cerrar el carrito
  const handleCloseBasket = () => {
    setIsOpenBasket(false);
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
    <div className={`DarkOverlay ${isOpenSideBar ? 'DarkOverlayOpen' : ''}`} id="DarkOverlay" onClick={handleCloseSidebar}></div>
      <div className={`sideBarContainer ${isOpenSideBar ? 'sideBarOpen' : ''}`} id="sideBarContainer">
        <div className="sideBarContent">
          
          <div className="section1" id="section1">
            <a className="navbar-brand f-lg-5 logoSidebar" href="#" id="logo">
              Restaurante S <span className="yellow">Co</span>
              <span className="blue">ci</span>
              <span className="red">na</span>
            </a>
            <button className="closeSideBar" id="closeSideBar" onClick={handleCloseSidebar}>
              <i className="fa-solid fa-circle-xmark"></i>
            </button>
          </div>

          <div className="lineWrapper"></div>

          <div className="section2" id="section2">
            <div className="containerButtons" id="containerButtons">
            <button className="BtnSign" id="BtnSign"><span>Iniciar sesión</span></button>
              <button className="BtnSign" id="BtnSign"><span>Registro</span></button>
            </div>
          </div>

          <div className="lineWrapper"></div>

          <div className="section3" id="section3">
            <span id="sectionTitle">SECCIONES</span>

            <div className="sectionListStyle_Container" id="sectionListStyle_Container">
              <ul className="sectionListStyle" id="sectionListStyle">
                <li className="sectionListStyleItem">
                  <a href="#home" id="linkSection" onClick={handleCloseSidebar}>
                  <span className="titleItemSection" id="titleItemSection">
                    Inicio
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24"><path fill="#6A696E" d="M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31a.996.996 0 000-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z"></path></svg>
                  </a>
                  </li>

                  <li className="sectionListStyleItem">
                  <a href="#about" id="linkSection" onClick={handleCloseSidebar}>
                  <span className="titleItemSection" id="titleItemSection">
                    Sobre nosotros
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24"><path fill="#6A696E" d="M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31a.996.996 0 000-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z"></path></svg>
                  </a>
                  </li>

                  <li className="sectionListStyleItem">
                  <a href="#popular-dish" id="linkSection" onClick={handleCloseSidebar}>
                  <span className="titleItemSection" id="titleItemSection">
                    Comidas popularos
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24"><path fill="#6A696E" d="M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31a.996.996 0 000-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z"></path></svg>
                  </a>
                  </li>

                  <li className="sectionListStyleItem">
                  <a href="#menu" id="linkSection" onClick={handleCloseSidebar}>
                  <span className="titleItemSection" id="titleItemSection">
                    Nuestro menú
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24"><path fill="#6A696E" d="M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31a.996.996 0 000-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z"></path></svg>
                  </a>
                  </li>

                  <li className="sectionListStyleItem">
                  <a href="#contact" id="linkSection" onClick={handleCloseSidebar}>
                  <span className="titleItemSection" id="titleItemSection">
                    Contactanos
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24"><path fill="#6A696E" d="M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31a.996.996 0 000-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z"></path></svg>
                  </a>
                  </li>
              </ul>
          </div>
          </div>
          <div className="lineWrapper"></div>

          <div className="otherSection" id="otherSection">
          <span id="sectionTitle">OTROS</span>
              <a href="#" id="linksOthers">Blog</a>
              <a href="#" id="linksOthers">Términos y Condiciones</a>
              <a href="#" id="linksOthers">Politicas de privacidad</a>
              <a href="#" id="linksOthers">Tratamiento de datos</a>
              <a href="#" id="linksOthers">SIC</a>
          </div>

          <div className="lineWrapper"></div>

          <div className="countryContainer" id="countryContainer">
            <span className="Country" id="Country">
              <img src="https://images.rappi.com/web-assets/col-flag.png" alt="Colombia" />
              <span className="CountryName" id="CountryName">Colombia</span>
              <svg className="ms-auto" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24"><path fill="#6A696E" d="M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31a.996.996 0 000-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z"></path></svg>
            </span>
          </div>

          <div className="lineWrapper"></div>
        </div>
      </div>
      <div className={`DarkOverlayBasket ${isOpenBasket ? 'DarkOverlayBasketOpen' : ''}`} id="DarkOverlayBasket" onClick={handleCloseBasket}></div>
      <div className={`basketContainer ${isOpenBasket ? 'basketOpen' : ''}`} id="basketContainer">
          <div className="basketLogo" id="basketLogo">
             <span>Tu canasta</span>
             <button className="closeBasket" id="closeBasket" onClick={handleCloseBasket}>
              <i className="fa-solid fa-circle-xmark"></i>
            </button>
          </div>

          <div className="locationBasketContent " id="locationBasketContent">
            <i className="fa-solid fa-location-dot" id="locationIcon"></i>
            <span id="locationBasket">Barranquilla, Atlantico, Colombia</span>
          </div>

          <div className="basketContent" id="basketContent">
              <div className="basketItem" id="basketItem">
                  {<BasketContent />}
              </div>
          </div>
      </div>
 
    <nav className={`navbar navbar-expand-lg ${scroll ? 'scrolled' : ''}`} id="navbar">
        <div className="container-fluid m-0" id="container-fluid">

        
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
            <button className="btnBasket" id="btnBasket" onClick={handleOpenBasket}><i className="fa-solid fa-cart-shopping"></i></button>
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
