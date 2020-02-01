import React from 'react';
import './styles.css';

function GalleryImage(props){
    const handleClick =() =>{
        props.onClick(props.id);
    }
    return( 
    <div className="imagenes">
        <p>{props.title}</p>
        <img className="logo" src={props.src} alt="img" onClick={handleClick} />

    </div>
    );

}

export default GalleryImage;