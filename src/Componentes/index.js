import React from 'react';
import images from './Galeria/Fotos/index'
import Gallery from './Galeria/index'
import './Galeria/styles.css'


function Inicio() {
    
    return (
        <div className="contenedor">
          <h1>Galeria</h1>      
          <Gallery group={images}/>
      </div>
    );
  }
  
  
  export default Inicio;