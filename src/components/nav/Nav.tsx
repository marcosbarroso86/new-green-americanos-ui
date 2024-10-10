// Navbar.js
import React, { useEffect } from "react";
import logo_new_green from "../../assets/img/logo.png";
import "./styles.css";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top py-3"
      id="mainNav"
    >
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="#page-top">
          <img src={logo_new_green} width={70} style={{ marginRight: 30 }} />
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
          {/* <span className="navbar-toggler-icon"></span> */}
          <div className="menu-icon">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </button>
        <div className="collapse navbar-collapse menu" id="navbarResponsive">
          <a className="nav-link" href="#about" style={{ color: "#CCC" }}>
            Quienes somos
          </a>
          <a className="nav-link" href="#team" style={{ color: "#CCC" }}>
            Team
          </a>
          <a className="nav-link" href="#nosotros" style={{ color: "#CCC" }}>
            Nosotros
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
