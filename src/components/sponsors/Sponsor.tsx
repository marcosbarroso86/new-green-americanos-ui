import React, { useRef, useEffect } from 'react';
import './styles.css'
import cuatro_gotas from '../../assets/img/sponsors/4gotas.jpeg'
import jube from '../../assets/img/sponsors/jube.jpeg'
import homepadel from '../../assets/img/sponsors/homepadel.png'
import ayt from '../../assets/img/sponsors/ayt.png'
import trz from '../../assets/img/sponsors/trz.png'
import cf from '../../assets/img/sponsors/cf.png'
import ant from '../../assets/img/sponsors/ant.png'
import typ from '../../assets/img/sponsors/typ_short.png'

const Sponsor = () => {

  return (
    <div className="client-logos">
       
        <div className="logo-container">
          
            <img src={homepadel} alt="Cliente 1" className="client-logo img-fluid" />
        </div>
        <div className="logo-container">
          
            <img src={ayt} alt="Cliente 1" className="client-logo img-fluid" width={150}/>
        </div>
        <div className="logo-container">
          
            <img src={trz} alt="Cliente 1" className="client-logo img-fluid" />
        </div>
        <div className="logo-container">
          
            <img src={cf} alt="Cliente 1" className="client-logo img-fluid" />
        </div>
        <div className="logo-container">
          
            <img src={ant} alt="Cliente 1" className="client-logo img-fluid" width={125}/>
        </div> 
        <div className="logo-container">
            <img src={typ} alt="Cliente 3" className="client-logo img-fluid" />
        </div>
    </div>
  )
}

export default Sponsor
