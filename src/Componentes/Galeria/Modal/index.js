import React from 'react';
import styles from './styles.module.scss';
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
      <div className={styles.Modal}>

      <img className={styles.logo} src={this.props.src} onClick={this.handleModal} alt="" />
      {this.state.isOpen && (
          <dialog className={styles.dialog} open 
          >
          <img className={styles.grande} src={this.props.src} alt="nomostrar"
            />

            <button className={styles.buttonClose} onClick={this.handleModal}>X</button>
            <Description about={this.props.about}/>
            <Slides image={this.props.src} id={this.props.id} />

            <span className={styles.indicador} ></span>
            <span className={styles.indicador} ></span>
            <span className={styles.indicador} ></span>


        </dialog>
      )}
      
      </div>
  );
}
}

export default Modal;