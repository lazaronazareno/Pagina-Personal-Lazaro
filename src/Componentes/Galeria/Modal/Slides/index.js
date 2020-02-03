import React from 'react';
import images from '../../Fotos';
import GalleryImage from '../../FuncionImagen';


class Slides extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [{ images }],
      currentIndex: 0,
      translateValue: 0
    }
  }

  prevSlide = () => {
  }
  nextSlide = () => {
    if (this.state.currentIndex === this.state.images.length - 1) {
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


  }

}

export default Slides;