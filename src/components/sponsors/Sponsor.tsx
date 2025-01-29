import React, { useRef, useEffect } from 'react';
import './styles.css'
import homepadel from '../../assets/img/sponsors/homepadel.png'
import ayt from '../../assets/img/sponsors/ayt.png'
import cf from '../../assets/img/sponsors/cf.png'
import ant from '../../assets/img/sponsors/ant.png'
import tecontrol from '../../assets/img/sponsors/tecontrol.jpeg';
import fantour from '../../assets/img/sponsors/fantour.jpeg'
import adoArquitectura from '../../assets/img/sponsors/adoarquitectura.jpeg'


const Sponsor = () => {

  return (
    <div className="client-logos">      
        <div className="logo-container">
            <img src={homepadel} alt="homepadel" className="client-logo img-fluid" width={130} title='Home padel'/>
        </div>        
        <div className="logo-container">
          
            <img src={cf} alt="cf" className="client-logo img-fluid" width={130} title='CF'/>
        </div>
        <div className="logo-container">
          
            <img src={tecontrol} alt="cf" className="client-logo img-fluid" width={130} title='CF'/>
        </div>
        <div className="logo-container">
           
            <img src={fantour} alt="cf" className="client-logo img-fluid" width={130} title='CF'/>
        </div>
        <div className="logo-container">
          
            <img src={ant} alt="ant" className="client-logo img-fluid" width={80} title='YUKA_ANT'/>
        </div> 
        <div className="logo-container">
          
            <img src={adoArquitectura} alt="ant" className="client-logo img-fluid" width={150} title='ado_arquitectura'/>
        </div> 
        
    </div>
  )
}

export default Sponsor
