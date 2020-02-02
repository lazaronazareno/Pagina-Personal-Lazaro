import React from 'react';
import '../Galeria/styles.css';
import GalleryImage from './FuncionImagen';


function Gallery(props){

    return (
          <div className="contenedor" >
            {
              props.images.map((images) => {
                return <GalleryImage key={images.id} src={images.url} title={images.title} id={images.id} about={images.about}/>
              })
              

            }
          </div>      
    );

}
  
  export default Gallery;