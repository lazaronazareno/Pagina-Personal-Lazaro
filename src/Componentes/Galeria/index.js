import React from 'react';
import styles from '../Galeria/styles.module.scss';
import Modal from './Modal';


function Gallery(props){

    return (
          <div className={styles.contenedor} >
            {
              props.images.map((images) => {
                return <Modal key={images.id} src={images.url} title={images.title} id={images.id} about={images.about}/>
              })
              

            }
          </div>      
    );

}
  
  export default Gallery;