import React from 'react';
import '../Galeria/styles.css';
import GalleryImage from './FuncionImagen';


function Gallery(props){
  const handleClick = id => {
    console.log(id);
  }

    return (
          <div className="contenedor" >
            {
              props.images.map((images) => {
                return <GalleryImage key={images.id} src={images.url} title={images.title} onClick={handleClick} id={images.id}/>
              })
              

            }
          </div>      
    );

}
  
  export default Gallery;