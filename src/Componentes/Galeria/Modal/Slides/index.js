import React from 'react';
<<<<<<< HEAD
import images from '../../Fotos';
import GalleryImage from '../../FuncionImagen';


class Slides extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            image:[{images}],
            currentIndex:0,
            translateValue: 0
        }
    }
      
      prevSlide = () => {
       }
       nextSlide = () => {
        if(this.state.currentIndex === this.state.images.length - 1) {
            return this.setState({
              currentIndex: 0,
              translateValue: 0
            })
          }
          this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
          }));
        }
      
        slideWidth = () => {
           return document.querySelector('.slide').clientWidth
        }
          
       
      
      render() {

            return (
            <div className="slider">
                 <div className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
                {
          this.state.images.map((image, i) => (
            <GalleryImage key={i} image={images.url} />
          ))
        }
                </div>
                <a onClick={this.prevSlide} >&#10094;</a>
                <a onClick={this.nextSlide} >&#10095;</a>
            </div>
        );
      
      
=======
import styles from './styles.module.scss';


class Slides extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: this.props,
      currentIndex: this.props.id,
>>>>>>> 7e5aa20afe0ca9f992e9c5a3844d71c279b47fa0
    }
  }

  prevSlide = () => {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      images: prevState.images 
    }));
    
  }
  nextSlide = () => {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      images: prevState.images
    }));
  }
  


  render() {


    return (
      <div className="">

        <a className={styles.botonAtras} onClick={this.prevSlide} >&#10094;</a>
        <a className={styles.botonSig} onClick={this.nextSlide} >&#10095;</a>
      </div>
    );


  }

}

export default Slides;