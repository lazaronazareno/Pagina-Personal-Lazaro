import React from 'react';
import images from '../../Fotos';


class Slides extends React.Component{
    currentSlide(){

    }
      
      prevSlide() {
       }
       nextSlide() {
        
          }
       
      
      render() {

            return (
            <div>
                <a onClick={this.prevSlide} >&#10094;</a>
                <a onClick={this.nextSlide} >&#10095;</a>
            </div>
        );
      
      
    }
  
}

export default Slides;