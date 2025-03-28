import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import ProductLanding from './components/ProductLanding';
import fondoosg from './assets/machuelosVarios.jpeg'
import fondomaquinados from './assets/fondo-maquinados.png'
import fondofundicion from './assets/fondo-fundicion.jpg'
import fondoplastico from './assets/fondo-plasticos.png'
import fondoaceros from './assets/fondoAcero.png'


class App extends React.Component { 
  componentDidMount() {
    document.title = "Mayco";
  } 
  render() { 
    return ( 
      <div className="App">
        <Navbar></Navbar>
        <ProductLanding bgImage={fondoosg} title={"OSG Royco"} subtitle={"Somos distribuidores autorizados"}></ProductLanding>
        <ProductLanding bgImage={fondomaquinados} title={"Maquinados"} subtitle={"La mejor calidad"} claro={true}></ProductLanding>
        <ProductLanding bgImage={fondofundicion} title={"Fundición"} subtitle={"La mejor calidad"} claro={true}></ProductLanding>
        <ProductLanding bgImage={fondoplastico} title={"Plásticos de ingeniería"} subtitle={"La mejor calidad"} claro={true}></ProductLanding>
        <ProductLanding bgImage={fondoaceros} title={"Aceros"} subtitle={"Somos fabricantes"} claro={true}></ProductLanding>
      </div>
    ); 
  } 
} 

export default App;