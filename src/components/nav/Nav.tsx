// Navbar.js
import React from "react";
import logo_new_green from '../../assets/img/logo.png';

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top py-3"
      id="mainNav"
    >
      <div className="container px-4 px-lg-5">
        
        <a className="navbar-brand" href="#page-top">
           <img src={logo_new_green} width={70} style={{marginRight: 30}}/>
        </a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto my-2 my-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                Quienes somos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#team">
                Team
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#nosotros">
                Nosotros
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
