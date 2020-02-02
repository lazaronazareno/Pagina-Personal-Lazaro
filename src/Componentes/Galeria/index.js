import React from 'react';
import '../Galeria/styles.css';
import GalleryImage from './FuncionImagen';


function Gallery(props){
  const handleClick = id => {
    console.log(id);
  }
  const handleModal = src => {
    console.log(src);
  }

    return (
          <div className="contenedor" >
            {
              props.images.map((images) => {
                return <GalleryImage key={images.id} src={images.url} title={images.title} onClick={handleModal} id={images.id}/>
              })
              

            }
          </div>      
    );

}
  
  export default Gallery;