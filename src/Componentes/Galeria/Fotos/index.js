import logo from  '../Fotos/cat1.jpg'
import logo1 from '../Fotos/cat2.jpg'
import logo2 from '../Fotos/cat3.jpg'
import logo3 from '../Fotos/cat4.jpeg'
import logo4 from '../Fotos/cat5.jpeg'
import logo5 from '../Fotos/cat6.jpeg'
import logo6 from '../Fotos/cat7.jpeg'

const images = [
    {
        id:0,
        title:"cat1",
        about: "Orange: Gatito de clase baja. No te confies o te hipnotizara",
        url:logo
    },
    {
        id:1,
        title:"cat2",
        about: "Rayadito: Gatito Guerrero. Siempre alerta dispuesto a atacarte",
        url:logo1,
    },
    {
        id:2,
        title:"cat3",
        about: "Savage: Gatito Facepalm. Siempre atento a los errores humanos",
        url:logo2,
    },
    {
        id:3,
        title:"cat4",
        about: "Naranja: Gatito Jugueton. Frase favorita: 'Jugar significa sacar las uñas no?'",
        url:logo3,
    },
    {
        id:4,
        title:"cat5",
        about: "Heart: Gatito mimoso. Se aprovecha de los demas con sus encantos",
        url:logo4,
    },
    {
        id:5,
        title:"cat6",
        about: "Los Gemelos 'Blue': Gatitos Astutos. Podrán parecer inofensivos pero mientras uno ataca el otro esta buscando su siguiente presa",
        url:logo5,
    },
    {
        id:6,
        title:"cat7",
        about: "Oruga: Gatito Perezoso: Que duerma todo el dia no lo hace menos peligroso",
        url:logo6,
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