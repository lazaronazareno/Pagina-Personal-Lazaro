import React from 'react';
import Modal from '../Modal';

function GalleryImage(props){

    return( 
    <div className="imagenes">
        <p>{props.title}</p>
        <Modal src={props.src} about={props.about}/>


    </div>
    );

}

export default GalleryImage;