import React from 'react';
import './styles.css';
import Slides from './Slides';
import Description from './Description';

class Modal extends React.Component {

    state = { isOpen: false };

  handleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log("click");
  };

  render(){
  return (
      <div className="Modal">

      <img className="logo" src={this.props.src} onClick={this.handleModal} alt="" />
      {this.state.isOpen && (
          <dialog className="dialog" open 
          >
          <img className="grande" src={this.props.src} alt="nomostrar"
            />

            <button className="button-close" onClick={this.handleModal}>X</button>
            <Description about={this.props.about}/>
            <Slides/>

            <span className="indicador" ></span>
            <span className="indicador" ></span>
            <span className="indicador" ></span>


        </dialog>
      )}
      
      </div>
  );
}
}

export default Modal;