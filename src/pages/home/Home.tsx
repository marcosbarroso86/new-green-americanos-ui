import React from "react";
import "./styles.css";
import newGreenLogoCircle from "../../assets/img/new_green_logo_circle.jpeg";
import Navbar from "../../components/nav/Nav";
import Header from "../../components/header/Header";

import pabloCuellarImg from "../../assets/img/team/team-2.png";
import gustavoImg from "../../assets/img/team/gus9.jpeg";
import DarkCard from "../../components/darkcard/DarkCard";
import Sponsor from "../../components/sponsors/Sponsor";

const Home = () => {
  return (
    <div >
      <div id="page-top">
        <Navbar />
        <Header />
        <section className="dark" data-aos="fade-up" id="about">
          <div className="container px-5">
            <div className="row gx-5 align-items-center justify-content-center justify-content-lg-between">
              <div className="col-12 col-lg-5">
                <h2 className="display-4 text-white lh-1 mb-4">
                  ¿Quienes Somos?
                </h2>
                <p className="lead fw-normal text-white mb-5 mb-lg-0">
                  Desde el 2014 nos dedicamos a la organización de torneos de
                  padel, con una amplia trayectoria en torneos americanos y
                  abiertos, priorizamos que el jugador que asiste a nuestros
                  torneos se sienta a gusto en cada competición, y elijan volver
                  a nuestros circuitos. Desde New Green Americanos incluimos
                  diferentes categorías, desde la más principiante hasta la más
                  avanzada, para que todos los jugadores de padel puedan
                  participar, otorgándoles importantes premios en cada
                  competición. Además, podrán encontrar en nuestro canal de
                  YouTube las finales de nuestros torneos.
                </p>
              </div>
              <div className="col-sm-8 col-md-6">
                <div className="px-5 px-sm-0">
                  <img
                    className="img-fluid rounded-circle"
                    src={newGreenLogoCircle}
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="team" className="team section text-white dark">
          <div className="container section-title" data-aos="fade-up">
            <h2>Team</h2>
          </div>

          <div className="container">
            <div className="row d-flex justify-content-center">
              <div
                className="col-lg-4 col-md-6 d-flex"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div
                  className="member"
                  style={{ background: "#110f16", border: "1px solid white" }}
                >
                  <img src={pabloCuellarImg} className="img-fluid" alt="" />
                  <div
                    className="member-content text-white"
                    style={{ textAlign: "left" }}
                  >
                    <h4 style={{ color: "#2ecc71" }}>Pablo Cuellar</h4>
                    <span>Profesor de padel - Organizador de torneos</span>
                    <p>
                      Me inicie en el padel en el 2013, trabaje como encargado
                      en el club “New Green Padel” de Bella Vista desde 2013
                      hasta el 2019 junto a Gustavo Letieri. En el 2014
                      arrancamos a realizar torneos de padel en el mismo club,
                      en la actualidad cumplimos 10 años organizando torneos en
                      diferentes clubes de la zona. En el 2022 comencé a
                      competir en el circuito AJPP, en el mismo año tambien
                      realicé el Profesorado de Padel en PPT Güemes con Jorge
                      Nicolini. En el 2023, me recibí como Instructor de Padel
                      en el club Monasterio con Nito Brea. Actualmente me
                      encuentro dando clases en el Club La Fábrica de San
                      Miguel.
                    </p>
                    <div className="social">
                      <a href="http://www.instagram.com/pablogcuellar">
                        <i className="bi bi-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 d-flex"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div
                  className="member"
                  style={{ background: "#110f16", border: "1px solid white" }}
                >
                  <img src={gustavoImg} className="img-fluid" alt="" />
                  <div
                    className="member-content text-white"
                    style={{ textAlign: "left" }}
                  >
                    <h4 style={{ color: "#2ecc71" }}>Gustavo Letieri</h4>
                    <span>Organizador de torneos</span>
                    <p>
                      Me inicie en el padel en el 2004, tuve un club de padel en
                      la localidad de Bella vista en el 2009 hasta el 2011,
                      “Darwin Padel”, Juego de manera amateur en 6ta Categoria,
                      trabaje como encargado en el club “New Green Padel” de
                      Bella vista desde el 2014 gasta el 2019 y hoy en dia soy
                      organizador de torneos de padel junto a Pablo Cuellar en
                      “New Green Americanos” cumpliendo 10 años en la
                      organización de torneos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <DarkCard />

     

        {/* jugadores */}
        <section id="cta" className="_cta d-flex">
          <div className="container" data-aos="zoom-in">
            <div className="text-center justify-content-center align-content-center">
              <h3>Nuestro Jugadores</h3>
              <p>
                {" "}
                En esta sección podrán encontrar a todos los jugadores que
                asisten al circuito de padel de New Green Americanos.
              </p>
              <div className="cta cta-btn" >
                PROXIMAMENTE
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container section-title" data-aos="fade-up">
            <h2>Empresas que confian en nosotros</h2>
          </div>

          <Sponsor />
        </section>
      </div>
    </div>
  );
};

export default Home;
