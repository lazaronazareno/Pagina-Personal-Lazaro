import React from 'react';
import './styles.css';
import Modal from '../Modal';

function GalleryImage(props){
    const handleClick =() =>{
        props.onClick(props.id);
    }
    const handleModal = () => {
        props.onClick(props.src)
        console.log("click");
      };

    return( 
    <div className="imagenes">
        <p>{props.title}</p>
        <img className="logo" src={props.src} alt="img" onClick={handleModal} />
        <Modal src={props.src}/>


    </div>
    );

}

export default GalleryImage;