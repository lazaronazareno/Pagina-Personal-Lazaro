import logo from  '../Fotos/imagen1.jpg'
import logo1 from '../Fotos/imagen2.jpg'
import logo2 from '../Fotos/imagen3.jpg'
import logo3 from '../Fotos/imagen4.jpg'
import logo4 from '../Fotos/imagen5.jpg'
import logo5 from '../Fotos/imagen6.jpg'
import logo6 from '../Fotos/imagen7.jpg'
import logo7 from '../Fotos/imagen8.jpg'
import logo8 from '../Fotos/imagen9.jpg'

const images = [
    {
        id:0,
        title:"Inicio",
        about: "Introduccion",
        url:logo
    },
    {
        id:1,
        title:"Sobre Mí",
        about: "Hablar un poco sobre mí",
        url:logo1,
    },
    {
        id:2,
        title:"Estilo de mi pagina",
        about: "Por que mi pagina es así",
        url:logo2,
    },
    {
        id:3,
        title:"Estudios",
        about: "Hablar sobre eso",
        url:logo3,
    },
    {
        id:4,
        title:"Experiencia laboral",
        about: "Hablar sobre eso",
        url:logo4,
    },
    {
        id:5,
        title:"Idiomas",
        about: "Dividir en dos y hablar sobre mis idiomas",
        url:logo5,
    },
    {
        id:6,
        title:"Música",
        about: "dividir la seccion en 4 y poner 4 portadas de 4 generos/artistas que me gustan",
        url:logo6,
    },
    {
        id:7,
        title:"Hobbies",
        about: "Hablar sobre mis hobbies",
        url:logo7,
    },
    {
        id:8,
        title:"Contacto",
        about: "Formulario",
        url:logo8,
    }
];

//function Fotos(){
//    return(
//        <div className="contenedor-imagenes">
//        <img className="logo" src={logo} alt="Logo" />
//        <img className="logo" src={logo1} alt="Logo" />
//        <img className="logo" src={logo2} alt="Logo" />
//        <img className="logo" src={logo3} alt="Logo" />
//        <img className="logo" src={logo4} alt="Logo" />
//        <img className="logo" src={logo5} alt="Logo" />
//        <img className="logo" src={logo6} alt="Logo" />
//        </div>
//    );
//}


export default images;