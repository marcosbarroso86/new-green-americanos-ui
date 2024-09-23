import React, { useEffect } from 'react'
import logo from "../../assets/img/logo.png";
import video_padel from '../../assets/videos/new_green_video_intro.mp4';
import './styles.css'



const Header = () => {
  return (
      <header className="masthead">
          <div className="container px-4 px-lg-5 h-100" style={{zIndex:2 , position: 'relative'}} data-aos="zoom-in">
            <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center media_content">
              <div className="col-lg-8 align-self-end" >
                <img className='img_logo' src={logo}/>
                {/* <h1 className="text-white font-weight-bold">Your Favorite Place for Free Bootstrap Themes</h1> */}
                <hr className="divider" />
              </div>
              <div className="col-lg-8 align-self-baseline">
                <div className="container px-4 px-lg-5">
                  <ul className="list-inline mb-5 d-flex justify-content-evenly">
                    <li className="list-inline-item">
                      <a target='_blank'
                        style={{ fontSize: "4rem", color: "white" }}
                        href="https://www.youtube.com/newgreenpadel"
                      >
                        <i className="bi bi-youtube"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        target='_blank'
                        style={{ fontSize: "4rem", color: "white" }}
                        href="https://www.facebook.com/newgreenamericanos"
                      >
                        <i className="bi bi-facebook"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        target='_blank'
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
          <video id='vid' autoPlay muted loop>
            <source src={video_padel} type="video/mp4"/>
        </video>
        <div className='capa'></div>
        </header>
  )
}

export default Header
