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
          
            <img src={homepadel} alt="homepadel" className="client-logo img-fluid" width={130} title='Home padel'/>
        </div>
        <div className="logo-container">
          
            <img src={ayt} alt="ayt" className="client-logo img-fluid" width={130} title='Heladeria AyT'/>
        </div>
        <div className="logo-container">
          
            <img src={trz} alt="trz" className="client-logo img-fluid" width={160} title='Terrazas bar'/>
        </div>
        <div className="logo-container">
          
            <img src={cf} alt="cf" className="client-logo img-fluid" width={130} title='CF'/>
        </div>
        <div className="logo-container">
          
            <img src={ant} alt="ant" className="client-logo img-fluid" width={100} title='ANT'/>
        </div> 
        <div className="logo-container">
            <img src={typ} alt="typ" className="client-logo img-fluid" width={130} title='TyC'/>
        </div>
    </div>
  )
}

export default Sponsor
