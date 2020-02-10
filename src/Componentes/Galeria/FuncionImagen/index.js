import React from 'react';
import Modal from '../Modal';
import styles from '../Modal/styles.module.scss';

function GalleryImage(props){

    return( 
    <div className={styles.imagenes}>
        <p>{props.title}</p>
        <Modal src={props.src} about={props.about} id={props.id}/>


    </div>
    );

}

export default GalleryImage;