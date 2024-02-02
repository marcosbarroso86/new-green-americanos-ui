import React from "react";
import "./styles.css";
import logo from "../../assets/img/logo.png";

const Home = () => {
  return (
    <>
      <body id="page-top">
        <nav
          className="navbar navbar-expand-lg navbar-light fixed-top py-3"
          id="mainNav"
        >
          <div className="container px-4 px-lg-5">
            <a className="navbar-brand" href="#page-top">
             New Green Americanos
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
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#portfolio">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <header className="masthead">
          <div className="container px-4 px-lg-5 h-100">
            <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-8 align-self-end">
                <img src={logo} />
                {/* <h1 className="text-white font-weight-bold">Your Favorite Place for Free Bootstrap Themes</h1> */}
                <hr className="divider" />
              </div>
              <div className="col-lg-8 align-self-baseline">
                <div className="container px-4 px-lg-5">
                  <ul className="list-inline mb-5 d-flex justify-content-evenly">
                    <li className="list-inline-item">
                      <a
                        style={{ fontSize: "4rem", color: "white" }}
                        href="https://www.youtube.com/newgreenpadel"
                      >
                        <i className="bi bi-youtube"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        style={{ fontSize: "4rem", color: "white" }}
                        href="https://www.facebook.com/newgreenamericanos"
                      >
                        <i className="bi bi-facebook"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        style={{ fontSize: "4rem", color: "white" }}
                        href="https://www.instagram.com/newgreenamericanos"
                      >
                        <i className="bi bi-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section data-aos="fade-up" className=" container page-section" id="about">
          <div data-aos="fade-up" className="px-4 px-lg-5">
            <div data-aos="fade-up" className="row gx-4 gx-lg-5">
              <div className="d-flex justify-content-around align-items-center" >
              <div data-aos="fade-up"  style={{width: '20%'}} className="p-2"><img className="img-fluid rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEiqvzFfN9QkWTbYWV65v7eAj3CEntQGP9Bw&usqp=CAU" alt="..." /></div>
              <div data-aos="fade-up"  style={{width: '20%'}} className="p-2"><img className="img-fluid rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-HLskp240EOMrUT6wkCoVIDgd9AVbT-KA8A&usqp=CAU" alt="..." /></div>
              <div data-aos="fade-up"  style={{width: '20%'}} className="p-2"><img className="img-fluid rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxdVtE2fFAPiXFz_Y6wJjnSjpQMrQY_yaq95xLR26dtEpadVGSdLvfVoRJOQbCXcIM-dM&usqp=CAU" alt="..." /></div>

              </div>
            </div>
          </div>
        </section>

        {/* <section className="page-section" id="services">
          <div className="container px-4 px-lg-5">
            <h2 className="text-center mt-0">At Your Service</h2>
            <hr className="divider" />
            <div className="row gx-4 gx-lg-5">
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <div className="mb-2">
                    <i className="bi-gem fs-1 text-primary"></i>
                  </div>
                  <h3 className="h4 mb-2">Sturdy Themes</h3>
                  <p className="text-muted mb-0">
                    Our themes are updated regularly to keep them bug free!
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <div className="mb-2">
                    <i className="bi-laptop fs-1 text-primary"></i>
                  </div>
                  <h3 className="h4 mb-2">Up to Date</h3>
                  <p className="text-muted mb-0">
                    All dependencies are kept current to keep things fresh.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <div className="mb-2">
                    <i className="bi-globe fs-1 text-primary"></i>
                  </div>
                  <h3 className="h4 mb-2">Ready to Publish</h3>
                  <p className="text-muted mb-0">
                    You can use this design as is, or you can make changes!
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <div className="mb-2">
                    <i className="bi-heart fs-1 text-primary"></i>
                  </div>
                  <h3 className="h4 mb-2">Made with Love</h3>
                  <p className="text-muted mb-0">
                    Is it really open source if it's not made with love?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <div id="portfolio">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="https://i.ytimg.com/vi/tn6rGmG6NV8/maxresdefault.jpg"
                  title="Project Name"
                >
                  <img
                    className="img-fluid"
                    src="https://i.ytimg.com/vi/tn6rGmG6NV8/maxresdefault.jpg"
                    alt="..."
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">Project Name</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="https://i.ytimg.com/vi/0cVE_JXjI4I/maxresdefault.jpg"
                  title="Project Name"
                >
                  <img
                    className="img-fluid"
                    src="https://i.ytimg.com/vi/0cVE_JXjI4I/maxresdefault.jpg"
                    alt="..."
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">Project Name</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="https://i.ytimg.com/vi/k8TTZuwg96Y/maxresdefault.jpg"
                  title="Project Name"
                >
                  <img
                    className="img-fluid"
                    src="https://i.ytimg.com/vi/k8TTZuwg96Y/maxresdefault.jpg"
                    alt="..."
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">Project Name</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="assets/img/portfolio/fullsize/4.jpg"
                  title="Project Name"
                >
                  <img
                    className="img-fluid"
                    src="assets/img/portfolio/thumbnails/4.jpg"
                    alt="..."
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">Project Name</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="assets/img/portfolio/fullsize/5.jpg"
                  title="Project Name"
                >
                  <img
                    className="img-fluid"
                    src="assets/img/portfolio/thumbnails/5.jpg"
                    alt="..."
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">Project Name</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="assets/img/portfolio/fullsize/6.jpg"
                  title="Project Name"
                >
                  <img
                    className="img-fluid"
                    src="assets/img/portfolio/thumbnails/6.jpg"
                    alt="..."
                  />
                  <div className="portfolio-box-caption p-3">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">Project Name</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <section className="page-section bg-dark text-white">
          <div className="container px-4 px-lg-5 text-center">
            
            
            
            
          </div>
        </section>
        <footer className="bg-light py-5">
          <div className="container px-4 px-lg-5">
            <div className="small text-center text-muted">
              Copyright &copy; 2023 - Company Name
            </div>
          </div>
        </footer>
      </body>
    </>
  );
};

export default Home;
