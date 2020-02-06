import React from 'react';
import images from './Galeria/Fotos/index'
import Gallery from './Galeria/index'
import styles from './Galeria/styles.module.scss'


function Inicio() {
    
    return (
        <div className={styles.contenedor}>
          <h1>Galeria</h1>     
          <Gallery images={images}/>
      </div>
    );
  }
  
  
  export default Inicio;