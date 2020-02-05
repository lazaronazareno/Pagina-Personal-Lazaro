import React from 'react';
import Modal from '../Modal';

function GalleryImage(props){

    return( 
    <div className="imagenes">
        <p>{props.title}</p>
        <Modal src={props.src} about={props.about} id={props.id}/>


    </div>
    );

}

export default GalleryImage;