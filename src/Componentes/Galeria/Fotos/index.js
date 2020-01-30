import React from 'react';
import '../../Galeria/styles.css';
import logo from '../Fotos/cat1.jpg'
import logo1 from '../Fotos/cat2.jpg'
import logo2 from '../Fotos/cat3.jpg'
import logo3 from '../Fotos/cat4.jpeg'
import logo4 from '../Fotos/cat5.jpeg'
import logo5 from '../Fotos/cat6.jpeg'
import logo6 from '../Fotos/cat7.jpeg'

function Fotos(){
    return(
        <div className="contenedor-imagenes">
        <img className="logo" src={logo} alt="Logo" />
        <img className="logo" src={logo1} alt="Logo" />
        <img className="logo" src={logo2} alt="Logo" />
        <img className="logo" src={logo3} alt="Logo" />
        <img className="logo" src={logo4} alt="Logo" />
        <img className="logo" src={logo5} alt="Logo" />
        <img className="logo" src={logo6} alt="Logo" />
        </div>
    );
}

//const Images = [
//    logo,
//    logo1,
//    logo2,
//]

export default Fotos;