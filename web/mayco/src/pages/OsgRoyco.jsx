import React from 'react';
import './PageStyles.css';
import fondo from '../assets/fondo-osg.png'

const OsgRoyco = () => {
  return (
    <div className="page-container">
      <div className="content">
        <div>
          <h1>Osg Royco</h1>
          <p>Somos distribuidores autorizados</p>
        </div>
        <div className="buttons">
          <button className='primary-btn'>MOSTRAR MÁS</button>
          <button className='secondary-btn'>SOLICITAR COTIZACIÓN</button>
        </div>
        <img src={fondo} alt="fondo" className='osg-royco-bg'/>  
      </div>
    </div>
  );
};

export default OsgRoyco;