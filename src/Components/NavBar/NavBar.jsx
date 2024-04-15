import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg" id="navbar">
      <div className="container-fluid" id="container-fluid">
        <a className="navbar-brand fs-3" href="#" id="logo">
          Restaurante S <span className="yellow fs-3">Co</span>
          <span className=" blue fs-3">ci</span>
          <span className="red fs-3">na</span>
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
            <i className="fa-solid fa-bars fs-1 bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav ms-auto mb-2 mb-lg-0 navcontent">
              <a className="nav-link fs-5 lg-fs-5" aria-current="page" href="#home">
                Inicio
              </a>
              <a className="nav-link fs-5" href="#about">
                Sobre nosotros
              </a>
              <a className="nav-link fs-5" href="#menu">
                Menú
              </a>
              <a className="nav-link fs-5" href="#contact">
                Contactanos
              </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
