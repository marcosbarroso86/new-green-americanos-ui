import React from "react";
import "./styles.css";
import CardGrid from "../../components/cardPlayers/cardPlayers";
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
import danielMorales from "../../assets/img/players/Ficha Daniel Morales.jpg";
import javierGuglialmelli from "../../assets/img/players/Ficha Javier Guglialmelli.jpg";
import joaquinBaum from "../../assets/img/players/Ficha Joaquin Baum.jpg";
import jonatanCelestino from "../../assets/img/players/Ficha Jonatan Celestino.jpg";
import joseProfeta from "../../assets/img/players/Ficha Jose Profeta.jpg";
import juanCruzCheiro from "../../assets/img/players/Ficha Juan Cruz Cheiro.jpg";
import juanManuelSantucho from "../../assets/img/players/Ficha Juan Manuel Santucho.jpg";
import julioAguilar from "../../assets/img/players/Ficha Julio Aguilar.jpg";
import leandroRiartes from "../../assets/img/players/Ficha Leandro Riartes.jpg";
import lucasCordoba from "../../assets/img/players/Ficha Lucas Cordoba.jpg";
import lucasCuello from "../../assets/img/players/Ficha Lucas Cuello.jpg";
import lucianoViva from "../../assets/img/players/Ficha Luciano Viva.jpg";
import marceloYbanez from "../../assets/img/players/Ficha Marcelo Ybañez.jpg";
import marcosDiaz from "../../assets/img/players/Ficha Marcos Diaz.jpg";
import matiasOrtiz from "../../assets/img/players/Ficha Matias Ortiz.jpg";
import nahuelAmado from "../../assets/img/players/Ficha Nahuel Amado.jpg";
import nicolasDiorio from "../../assets/img/players/Ficha Nicolas Diorio.jpg";
import nicolasJofre from "../../assets/img/players/Ficha Nicolas Jofre.jpg";
import pabloBarreto from "../../assets/img/players/Ficha Pablo Barreto.jpg";
import pabloZubiria from "../../assets/img/players/Ficha Pablo Zubiria.jpg";
import pauloDominguez from "../../assets/img/players/Ficha Paulo Dominguez.jpg";
import ricardoSarmentero from "../../assets/img/players/Ficha Ricardo Sarmentero.jpg";
import robertoBruzzo from "../../assets/img/players/Ficha Roberto Bruzzo.jpg";
import rodrigoMolina from "../../assets/img/players/Ficha Rodrigo Molina.jpg";
import rodrigoVargas from "../../assets/img/players/Ficha Rodrigo Vargas.jpg";
import santiagoGutierrez from "../../assets/img/players/Ficha Santiago Gutierrez.jpg";
import sebastianKubransky from "../../assets/img/players/Ficha Sebastian Kubransky.jpg";
import sebastianVila from "../../assets/img/players/Ficha Sebastian Vila.jpg";
import sergioBrazao from "../../assets/img/players/Ficha Sergio Brazao.jpg";
import tomasDominguez from "../../assets/img/players/Ficha Tomas Dominguez.jpg";
import tomasLayes from "../../assets/img/players/Ficha Tomas Layes.jpg";
import valentinEscalante from "../../assets/img/players/Ficha Valentin Escalante.jpg";
import walterBartoli from "../../assets/img/players/Ficha Walter Bartoli.jpg";
import walterVilte from "../../assets/img/players/Ficha Walter Vilte.jpg";

 const players = [
    { image: adrianCaffesse, name: "Adrian Caffesse", category: "C8"  },
    { image: adrianOvejero, name: "Adrian Ovejero", category: "C6" },
    { image: adrielDelgado, name: "Adriel Delgado", category: "C7" },
    { image: alcideVallejos, name: "Alcides Vallejos", category: "C6" },
    { image: andresPicca, name: "Andres Picca", category: "C7" },
    { image: angelMoreita, name: "Angel Moreita", category: "C8" },
    { image: arielRamos, name: "Ariel Ramos", category: "C8" },
    { image: braianLujan, name: "Braian Lujan", category: "C7" },
    { image: braianPogonza, name: "Braian Pogonza", category: "C6" },
    { image: carlosMoreno, name: "Carlos Moreno", category: "C7" },
    { image: carlosRicce, name: "Carlos Ricce", category: "C7" },
    { image: cristianAguirre, name: "Cristian Aguirre", category: "C6" },
    { image: danielMorales, name: "Daniel Morales" ,category: "C8"},
    { image: javierGuglialmelli, name: "Javier Guglialmelli" ,category: "C6"},
    { image: joaquinBaum, name: "Joaquin Baum" ,category: "C6"},
    { image: jonatanCelestino, name: "Jonatan Celestino" ,category: "C5"},
    { image: joseProfeta, name: "Jose Profeta" ,category: "C7"},
    { image: juanCruzCheiro, name: "Juan Cruz Cheiro" ,category: "C8"},
    { image: juanManuelSantucho, name: "Juan Manuel Santucho" ,category: "C7"},
    { image: julioAguilar, name: "Julio Aguilar" ,category: "C8"},
    { image: leandroRiartes, name: "Leandro Riartes" ,category: "C6"},
    { image: lucasCordoba, name: "Lucas Cordoba" ,category: "C7"},
    { image: lucasCuello, name: "Lucas Cuello" ,category: "C7"},
    { image: lucianoViva, name: "Luciano Viva" ,category: "C7"},
    { image: marceloYbanez, name: "Marcelo Ybañez" ,category: "C8"},
    { image: marcosDiaz, name: "Marcos Diaz" ,category: "C7"},
    { image: matiasOrtiz, name: "Matias Ortiz" ,category: "C8"},
    { image: nahuelAmado, name: "Nahuel Amado" ,category: "C7"},
    { image: nicolasDiorio, name: "Nicolas Diorio" ,category: "C8"},
    { image: nicolasJofre, name: "Nicolas Jofre" ,category: "C7"},
    { image: pabloBarreto, name: "Pablo Barreto" ,category: "C7"},
    { image: pabloZubiria, name: "Pablo Zubiria" ,category: "C7"},
    { image: pauloDominguez, name: "Paulo Dominguez" ,category: "C8"},
    { image: ricardoSarmentero, name: "Ricardo Sarmentero" ,category: "C8"},
    { image: robertoBruzzo, name: "Roberto Bruzzo" ,category: "C7"},
    { image: rodrigoMolina, name: "Rodrigo Molina" ,category: "C7"},
    { image: rodrigoVargas, name: "Rodrigo Vargas" ,category: "C8"},
    { image: santiagoGutierrez, name: "Santiago Gutierrez" ,category: "C6"},
    { image: sebastianKubransky, name: "Sebastian Kubransky" ,category: "C7"},
    { image: sebastianVila, name: "Sebastian Vila" ,category: "C6"},
    { image: sergioBrazao, name: "Sergio Brazao" ,category: "C8"},
    { image: tomasDominguez, name: "Tomas Dominguez" ,category: "C8"},
    { image: tomasLayes, name: "Tomas Layes" ,category: "C8"},
    { image: valentinEscalante, name: "Valentin Escalante" ,category: "C7"},
    { image: walterBartoli, name: "Walter Bartoli" ,category: "C7"},
    { image: walterVilte, name: "Walter Vilte" ,category: "C7"},
  ];



const Players = () => {

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
