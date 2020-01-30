import React from 'react';
import '../Galeria/styles.css';
import Fotos from './Fotos';

class Gallery extends React.Component {
    render(){
    return (
      <div className="App">
          <div className="contenedor" >
              <h1>Galeria</h1>
              <Fotos/>
          </div>      
      </div>
    );
  }
  }
  
  export default Gallery;