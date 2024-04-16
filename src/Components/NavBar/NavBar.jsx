import React from "react";
import './NavBar.css'
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg" id="navbar">
      <div className="container-fluid" id="container-fluid">
        <a className="navbar-brand f-lg-5 ms-lg-5 " href="#" id="logo">
          Restaurante S <span className="yellow">Co</span>
          <span className="blue">ci</span>
          <span className="red">na</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <i className="fa-solid fa-bars bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav ms-auto mb-2 mb-lg-0 me-lg-5 navcontent">
              <a className="fs-5" id="nav-link" aria-current="page" href="#home">
                Inicio
              </a>
              <a className="fs-5" id="nav-link" href="#about">
                Sobre nosotros
              </a>
              <a className="fs-5" id="nav-link" href="#menu">
                Menú
              </a>
              <a className="fs-5" id="nav-link" href="#contact">
                Contactanos
              </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
