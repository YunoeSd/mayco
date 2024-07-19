import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Maquinados from './pages/Maquinados';
import Fundicion from './pages/Fundicion';
import OsgRoyco from './pages/OsgRoyco';
import PlasticosIngenieria from './pages/PlasticosIngenieria';
import Aceros from './pages/Aceros';
import SobreNosotros from './pages/SobreNosotros';
import Busqueda from './pages/Busqueda';

class App extends React.Component { 
  componentDidMount() {
    document.title = "Mayco";
  } 
  render() { 
    return ( 
      <Router>
      <div className="App">
        <div className='b'>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Maquinados />} />
          <Route path="/fundicion" element={<Fundicion />} />
          <Route path="/osg-royco" element={<OsgRoyco />} />
          <Route path="/plasticos-ingenieria" element={<PlasticosIngenieria />} />
          <Route path="/aceros" element={<Aceros />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/busqueda" element={<Busqueda />} />
        </Routes>
      </div>
    </Router>
    ); 
  } 
} 

export default App;