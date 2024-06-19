import React from "react";
import "./styles.css";
import logo from "../../assets/img/logo.png";
import newGreenLogoCircle from "../../assets/img/new_green_logo_circle.jpeg";
import Navbar from "../../components/nav/Nav";
import Header from "../../components/header/Header";

import pabloCuellarImg from "../../assets/img/team/team-1.png";
import gustavoImg from "../../assets/img/team/team-2.jpg";
import monasterioImg from "../../assets/img/team/team-3.jpg";
import DarkCard from "../../components/darkcard/DarkCard";

const Home = () => {
  return (
    <>
      <body id="page-top">
        <Navbar />
        <Header />
        <section className="dark" data-aos="fade-up" id="about">
          <div className="container px-5">
            <div className="row gx-5 align-items-center justify-content-center justify-content-lg-between">
              <div className="col-12 col-lg-5">
                <h2 className="display-4 text-white lh-1 mb-4">
                  Quienes somos
                </h2>
                <p className="lead fw-normal text-white mb-5 mb-lg-0">
                  This section is perfect for featuring some information about
                  your application, why it was built, the problem it solves, or
                  anything else! There's plenty of space for text here, so don't
                  worry about writing too much.
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

        <section
          id="team"
          className="team section text-white dark"
        >
          <div className="container section-title" data-aos="fade-up">
            <h2>Team</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
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
                  <div className="member-content text-white dark">
                    <h4>Pablo Cuellar</h4>
                    <span>Profesor de paddle</span>
                    <p>
                      Me inicie en el padel en el 2013, trabaje como encargado
                      en el club “New Green Padel” de Bella Vista desde 2013
                      hasta el 2019 junto a Gustavo Letieri. En el 2014
                      arrancamos a realizar torneos de padel en el mismo club,
                      en la actualidad cumplimos 10 años organizando torneos en
                      diferentes clubes de la zona. En el 2022 comencé a
                      competir en el circuito AJPP, en el mismo año tambien
                      realice el Profesorado de Padel en PPT Güemes con Jorge
                      Nicolini. En el 2023, me recibí como Instructor de Padel
                      en el club Monasterio con Nito Brea. Actualmente me
                      encuentro dando clases en el Club La Fábrica de San
                      Miguel.
                    </p>
                    <div className="social">
                      <a href="">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="">
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
                  <img src={pabloCuellarImg} className="img-fluid" alt="" />
                  <div className="member-content">
                    <h4>Gustavo Letieri</h4>
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
                    <div className="social">
                      <a href="">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-instagram"></i>
                      </a>
                    </div>
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
              <h3>Nuestro jugadores</h3>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                sed dolores est tempore delectus id esse! Deserunt
                exercitationem quam qui aperiam ipsa doloremque nesciunt magni
                aut repellat. Voluptate, minima fugiat?
              </p>
              <a className="cta-btn" href="/jugadores">
                IR A BUSCAR
              </a>
            </div>
          </div>
        </section>

        <section className="cta dark" data-aos="fade-up">
          <div className="cta-content">
            <div className="container px-4 px-lg-5">
              <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-lg-8 col-xl-6 text-center">
                  <h2 className="mt-0">Contacto</h2>
                  <hr className="divider" />
                  <p className="text-white mb-5">
                    Ready to start your next project with us? Send us a messages
                    and we will get back to you as soon as possible!
                  </p>
                </div>
              </div>
              <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
                <div className="col-lg-6">
                  <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="name"
                        type="text"
                        placeholder="Enter your name..."
                        data-sb-validations="required"
                      />
                      <label htmlFor="name">Full name</label>
                      <div
                        className="invalid-feedback"
                        data-sb-feedback="name:required"
                      >
                        A name is required.
                      </div>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        data-sb-validations="required,email"
                      />
                      <label htmlFor="email">Email address</label>
                      <div
                        className="invalid-feedback"
                        data-sb-feedback="email:required"
                      >
                        An email is required.
                      </div>
                      <div
                        className="invalid-feedback"
                        data-sb-feedback="email:email"
                      >
                        Email is not valid.
                      </div>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="phone"
                        type="tel"
                        placeholder="(123) 456-7890"
                        data-sb-validations="required"
                      />
                      <label htmlFor="phone">Phone number</label>
                      <div
                        className="invalid-feedback"
                        data-sb-feedback="phone:required"
                      >
                        A phone number is required.
                      </div>
                    </div>

                    <div className="form-floating mb-3">
                      <textarea
                        className="form-control"
                        id="message"
                        placeholder="Enter your message here..."
                        style={{ height: "10rem" }}
                        data-sb-validations="required"
                      ></textarea>
                      <label htmlFor="message">Message</label>
                      <div
                        className="invalid-feedback"
                        data-sb-feedback="message:required"
                      >
                        A message is required.
                      </div>
                    </div>

                    <div className="d-none" id="submitSuccessMessage">
                      <div className="text-center mb-3">
                        <div className="fw-bolder">
                          Form submission successful!
                        </div>
                        To activate this form, sign up at
                        <br />
                        <a href="https://startbootstrap.com/solution/contact-forms">
                          https://startbootstrap.com/solution/contact-forms
                        </a>
                      </div>
                    </div>
                    <div className="d-none" id="submitErrorMessage">
                      <div className="text-center text-danger mb-3">
                        Error sending message!
                      </div>
                    </div>

                    <div className="d-grid">
                      <button
                        className="btn btn-primary btn-xl disabled"
                        id="submitButton"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-lg-4 text-center mb-5 mb-lg-0">
                  <i className="bi-phone fs-2 mb-3 text-muted"></i>
                  <div>+1 (555) 123-4567</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
    </>
  );
};

export default Home;
