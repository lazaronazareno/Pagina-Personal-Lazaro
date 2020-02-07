import React from 'react';
import styles from './styles.module.scss';


class Slides extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: this.props,
      currentIndex: this.props.id,
    }
  }

  prevSlide = () => {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
    }));
  }
  nextSlide = () => {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
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