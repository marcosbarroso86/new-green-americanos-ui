import React from "react";

import new_green_fondo from "../../assets/img/new_green_segundo_fondo.jpeg";

import marcosbarroso from "../../assets/img/jugadores/marcosbarroso.jpeg";
import nicolasdiorio from "../../assets/img/jugadores/nicolasdiorio.jpeg";
import juazcruzcheiro from "../../assets/img/jugadores/juancruzcheiro.jpeg";

import julioAguilar from "../../assets/img/jugadores/julioAguilar.jpeg";
import danielMorales from "../../assets/img/jugadores/danielMorales.jpeg";
import facundoHLinka from "../../assets/img/jugadores/facundoHLinka.jpeg";
import JonatanCelestino from "../../assets/img/jugadores/JonatanCelestino.jpeg";
import marcosDiaz from "../../assets/img/jugadores/marcosDiaz.jpeg";
import nahuelAmado from "../../assets/img/jugadores/nahuelAmado.jpeg";
import gabrielCarrizo from "../../assets/img/jugadores/gabrielCarrizo.jpeg";
import pabloBarreto from "../../assets/img/jugadores/pabloBarreto.jpeg";
import sebaskubransky from "../../assets/img/jugadores/sebaskubransky.jpeg";
import walterBartoli from "../../assets/img/jugadores/walterBartoli.jpeg";

import adrianCaffesse from "../../assets/img/players/Ficha Adrian Caffesse.jpg"
import adrianOvejero from "../../assets/img/players/Ficha Adrian Ovejero.jpg"
import adrielDelgado from "../../assets/img/players/Ficha Adriel Delgado.jpg"
import alcideVallejos from "../../assets/img/players/Ficha Alcides Vallejos.jpg"
import andresPicca from "../../assets/img/players/Ficha Andres Picca.jpg"
import angelMoreita from "../../assets/img/players/Ficha Angel Moreira.jpg"
import arielRamos from "../../assets/img/players/Ficha Ariel ramos.jpg"
import braianLujan from "../../assets/img/players/Ficha Braian Lujan.jpg"
import braianPogonza from "../../assets/img/players/Ficha Braian Pogonza.jpg"
import carlosMoreno from "../../assets/img/players/Ficha Carlos Moreno.jpg"
import carlosRicce from "../../assets/img/players/Ficha Carlos Ricce.jpg"
import cristianAguirre from "../../assets/img/players/Ficha Cristian Aguirre.jpg"
import cristianCandia from "../../assets/img/players/Ficha Cristian Candia.jpg";

import "./styles.css";
import CardGrid from "../../components/cardPlayers/cardPlayers";

const Players = () => {

  const players = [
    { image: adrianCaffesse, name: "Otro jugador", category: "C8"  },
    { image: adrianOvejero, name: "Otro jugador", category: "C6" },
    { image: adrielDelgado, name: "Otro jugador", category: "C7" },
    { image: alcideVallejos, name: "Otro jugador", category: "C6" },
    { image: andresPicca, name: "Otro jugador", category: "C7" },
    { image: angelMoreita, name: "Otro jugador", category: "C8" },
    { image: arielRamos, name: "Otro jugador", category: "C8" },
    { image: braianLujan, name: "Otro jugador", category: "C7" },
    { image: braianPogonza, name: "Otro jugador", category: "C6" },
    { image: carlosMoreno, name: "Otro jugador", category: "C7" },
    { image: carlosRicce, name: "Otro jugador", category: "C7" },
    { image: cristianAguirre, name: "Otro jugador", category: "C6" },
    { image: cristianCandia, name: "Otro jugador", category: "C7" },
  ];
  


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">
            Start Bootstrap
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#!">
                      All Products
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Popular Items
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-dark" type="submit">
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">
                  0
                </span>
              </button>
            </form>
          </div>
        </div>
      </nav>

      <header className="bg-player bg-black py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">New green americanos</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              Busqueda de jugadores
            </p>
          </div>
        </div>
      </header>

      <section className="container">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Ingresá el nombre del jugador..."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">
              Buscar
            </button>
          </div>
        </div>
      </section>

      <section className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Jugadores</h2>
        </div>

       
     
      <CardGrid players={players} />;

      </section>
    </div>
  );
};

export default Players;
