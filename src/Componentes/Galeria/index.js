import React from 'react';
import '../Galeria/styles.css';
import images from './Fotos/index'


function Gallery(){

    return (
          <div className="contenedor" >
            {
              images.map((images) => {
                return <img key={images.index} title={images.title} className="logo" src={images.url} alt="img" />
              })
              

            }
            
          </div>      
    );

}
  
  export default Gallery;