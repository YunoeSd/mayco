import React from 'react';
import './PageStyles.css';

const Maquinados = () => {
  return (
    <div className="page-container maquinados-bg">
      <div className="content">
        <div>
          <h1>Maquinados</h1>
          <p>La mejor calidad</p>
        </div>
        <div className="buttons">
          <button className='primary-btn'>MOSTRAR MÁS</button>
          <button className='secondary-btn'>SOLICITAR COTIZACIÓN</button>
        </div>
      </div>
    </div>
  );
};

export default Maquinados;