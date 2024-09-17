import React from "react";

import new_green_fondo from "../../assets/img/new_green_segundo_fondo.jpeg";

import marcosbarroso from "../../assets/img/jugadores/marcosbarroso.jpeg";
import nicolasdiorio from "../../assets/img/jugadores/nicolasdiorio.jpeg";
import juazcruzcheiro from "../../assets/img/jugadores/juancruzcheiro.jpeg";
import arielRamos from "../../assets/img/jugadores/ArielRamos.jpeg";
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


import "./styles.css";
import Member from "../../components/member/Member";

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

        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {/* <Member source={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF_x_aMKuK8XJlRAMxVZ9ElHhtGaFzaf76xS6uSxa4CgrADX7YAMSl6h0Amolm82FNlSg&usqp=CAU"} /> */}
              <Member source={marcosbarroso} />
            </div>
            <div className="col-md-4">
              <Member source={nicolasdiorio} />
              {/* <Member source={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShRyPWDxxI9KiES61ih7FbceF-PpZ37UdO2g&s"}/> */}
            </div>
            <div className="col-md-4">
              <Member source={juazcruzcheiro} />
              {/* <Member source={"https://images.ecestaticos.com/1w_lt4TxqjuV1w1pQ6yrrf9s_ws=/186x0:971x945/624x752/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fe02%2Fc78%2Fa00%2Fe02c78a0070f8995d3b48d60ecd486ce.jpg"} /> */}
            </div>
          </div>
          <br />
          <div className="row">
          <div className="col-md-4">
              {/* <Member source={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF_x_aMKuK8XJlRAMxVZ9ElHhtGaFzaf76xS6uSxa4CgrADX7YAMSl6h0Amolm82FNlSg&usqp=CAU"} /> */}
              <Member source={walterBartoli} />
            </div>
            <div className="col-md-4">
              <Member source={julioAguilar} />
              {/* <Member source={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShRyPWDxxI9KiES61ih7FbceF-PpZ37UdO2g&s"}/> */}
            </div>
            <div className="col-md-4">
              <Member source={sebaskubransky} />
              {/* <Member source={"https://images.ecestaticos.com/1w_lt4TxqjuV1w1pQ6yrrf9s_ws=/186x0:971x945/624x752/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fe02%2Fc78%2Fa00%2Fe02c78a0070f8995d3b48d60ecd486ce.jpg"} /> */}
            </div>
          </div>
          <br />

          <div className="row">
          <div className="col-md-4">
              {/* <Member source={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF_x_aMKuK8XJlRAMxVZ9ElHhtGaFzaf76xS6uSxa4CgrADX7YAMSl6h0Amolm82FNlSg&usqp=CAU"} /> */}
              <Member source={facundoHLinka} />
            </div>
            <div className="col-md-4">
              <Member source={danielMorales} />
              {/* <Member source={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShRyPWDxxI9KiES61ih7FbceF-PpZ37UdO2g&s"}/> */}
            </div>
            <div className="col-md-4">
              <Member source={marcosDiaz} />
              {/* <Member source={"https://images.ecestaticos.com/1w_lt4TxqjuV1w1pQ6yrrf9s_ws=/186x0:971x945/624x752/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fe02%2Fc78%2Fa00%2Fe02c78a0070f8995d3b48d60ecd486ce.jpg"} /> */}
            </div>
          </div>
          <br />

          <div className="row">
          <div className="col-md-4">
              {/* <Member source={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF_x_aMKuK8XJlRAMxVZ9ElHhtGaFzaf76xS6uSxa4CgrADX7YAMSl6h0Amolm82FNlSg&usqp=CAU"} /> */}
              <Member source={JonatanCelestino} />
            </div>
            <div className="col-md-4">
              <Member source={gabrielCarrizo} />
              {/* <Member source={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShRyPWDxxI9KiES61ih7FbceF-PpZ37UdO2g&s"}/> */}
            </div>
            <div className="col-md-4">
              <Member source={pabloBarreto} />
              {/* <Member source={"https://images.ecestaticos.com/1w_lt4TxqjuV1w1pQ6yrrf9s_ws=/186x0:971x945/624x752/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fe02%2Fc78%2Fa00%2Fe02c78a0070f8995d3b48d60ecd486ce.jpg"} /> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Players;
