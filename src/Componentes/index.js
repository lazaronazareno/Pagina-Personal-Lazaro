import React from 'react';
import Gallery from './Galeria/index'
import './Galeria/styles.css'

class Inicio extends React.Component {
    render(){
    return (
      <div className="App">
        <header className="App-header"> 
        <div className="contenedor">      
          <Gallery/>
      </div>
        </header>
      </div>
    );
  }
  }
  
  export default Inicio;