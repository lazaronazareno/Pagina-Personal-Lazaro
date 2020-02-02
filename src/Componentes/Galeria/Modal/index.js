import React from 'react';
import './styles.css';

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
          <dialog className="dialog" style={{ position: "absolute" }}open onClick={this.handleModal}
          >
          <img src={this.props.src} onClick={this.handleModal} alt="nomostrar"
            />
        </dialog>
      )}
      </div>
  );
}
}

export default Modal;