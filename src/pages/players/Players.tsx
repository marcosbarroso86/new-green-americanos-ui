import React from "react";

import new_green_fondo from "../../assets/img/new_green_segundo_fondo.jpeg";
import "./styles.css";

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

      {/* <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div className="col mb-5">
                        <div className="card h-100">
                            
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">Fancy Product</h5>
                                    
                                    $40.00 - $80.00
                                </div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            
                            <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>Sale</div>
                            
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">Special Item</h5>
                                    
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                    
                                    <span className="text-muted text-decoration-line-through">$20.00</span>
                                    $18.00
                                </div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            
                            <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>Sale</div>
                            
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">Sale Item</h5>
                                    
                                    <span className="text-muted text-decoration-line-through">$50.00</span>
                                    $25.00
                                </div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">Popular Item</h5>
                                    
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                    
                                    $40.00
                                </div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            
                            <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>Sale</div>
                            
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">Sale Item</h5>
                                    
                                    <span className="text-muted text-decoration-line-through">$50.00</span>
                                    $25.00
                                </div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">Fancy Product</h5>
                                    
                                    $120.00 - $280.00
                                </div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            
                            <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>Sale</div>
                            
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">Special Item</h5>
                                    
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                    
                                    <span className="text-muted text-decoration-line-through">$20.00</span>
                                    $18.00
                                </div>
                            </div>
                        
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                          
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                          
                            <div className="card-body p-4">
                                <div className="text-center">
                          
                                    <h5 className="fw-bolder">Popular Item</h5>
                          
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                  
                                    $40.00
                                </div>
                            </div>
                         
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}

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

      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">C8/D8</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">C7/D7</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">C6/D6</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">C5/D5</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Jugadores</h2>
        </div>
        <div className="row gap-5 py-4">
          <div className="card" style={{ width: "18rem" }} data-aos="fade-up">
            <img
              className="card-img-top"
              src="data:image/jpeg;base64,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"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }} data-aos="fade-up">
            <img
              className="card-img-top"
              height={270}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHex32D8up55CrR0dfs_Mwhk3KpXqBD1VodaGkBjnKV5YdLUqUZ8YZcXE2V6Sm01vybNI&usqp=CAU"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }} data-aos="fade-up">
            <img
              className="card-img-top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1OztEGNkwnwU87ntP7YPKZp9M5yfv_YHQ9E5RzCVb4j5T2K22wNd1SLbac9wLnExwnUU&usqp=CAU"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }} data-aos="fade-up">
            <img
              className="card-img-top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScvcXeI9kdVXC-rO9iSIUZlnF3VCUuibuyDvFwHvmJxRBivkrgheGAgSu57eJzG-aX61I&usqp=CAU"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="row gap-5 py-4">
          <div className="card" style={{ width: "18rem" }} data-aos="fade-up">
            <img
              className="card-img-top"
              src="data:image/jpeg;base64,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"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }} data-aos="fade-up">
            <img
              className="card-img-top"
              height={270}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHex32D8up55CrR0dfs_Mwhk3KpXqBD1VodaGkBjnKV5YdLUqUZ8YZcXE2V6Sm01vybNI&usqp=CAU"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }} data-aos="fade-up">
            <img
              className="card-img-top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1OztEGNkwnwU87ntP7YPKZp9M5yfv_YHQ9E5RzCVb4j5T2K22wNd1SLbac9wLnExwnUU&usqp=CAU"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }} data-aos="fade-up">
            <img
              className="card-img-top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScvcXeI9kdVXC-rO9iSIUZlnF3VCUuibuyDvFwHvmJxRBivkrgheGAgSu57eJzG-aX61I&usqp=CAU"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="row gap-5 py-4">
          <div className="card" style={{ width: "18rem" }} data-aos="fade-up">
            <img
              className="card-img-top"
              src="data:image/jpeg;base64,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"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }} data-aos="fade-up">
            <img
              className="card-img-top"
              height={270}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHex32D8up55CrR0dfs_Mwhk3KpXqBD1VodaGkBjnKV5YdLUqUZ8YZcXE2V6Sm01vybNI&usqp=CAU"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }} data-aos="fade-up">
            <img
              className="card-img-top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1OztEGNkwnwU87ntP7YPKZp9M5yfv_YHQ9E5RzCVb4j5T2K22wNd1SLbac9wLnExwnUU&usqp=CAU"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }} data-aos="fade-up">
            <img
              className="card-img-top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScvcXeI9kdVXC-rO9iSIUZlnF3VCUuibuyDvFwHvmJxRBivkrgheGAgSu57eJzG-aX61I&usqp=CAU"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="row gap-5 py-4">
          <div className="card" style={{ width: "18rem" }} data-aos="fade-up">
            <img
              className="card-img-top"
              src="data:image/jpeg;base64,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"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }} data-aos="fade-up">
            <img
              className="card-img-top"
              height={270}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHex32D8up55CrR0dfs_Mwhk3KpXqBD1VodaGkBjnKV5YdLUqUZ8YZcXE2V6Sm01vybNI&usqp=CAU"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }} data-aos="fade-up">
            <img
              className="card-img-top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1OztEGNkwnwU87ntP7YPKZp9M5yfv_YHQ9E5RzCVb4j5T2K22wNd1SLbac9wLnExwnUU&usqp=CAU"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }} data-aos="fade-up">
            <img
              className="card-img-top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScvcXeI9kdVXC-rO9iSIUZlnF3VCUuibuyDvFwHvmJxRBivkrgheGAgSu57eJzG-aX61I&usqp=CAU"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Players;
