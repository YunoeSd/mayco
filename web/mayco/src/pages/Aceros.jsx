import React from 'react';
import './PageStyles.css';

const Aceros = () => {
  return (
    <div className="page-container aceros-bg">
      <div className="content">
        <div>
          <h1>Aceros</h1>
          <p>Somos fabricantes</p>
        </div>
        <div className="buttons">
          <button className='primary-btn'>MOSTRAR MÁS</button>
          <button className='secondary-btn'>SOLICITAR COTIZACIÓN</button>
        </div>
      </div>
    </div>
  );
};

export default Aceros;