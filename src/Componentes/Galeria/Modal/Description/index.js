import React from 'react';
import styles from '../../Modal/styles.module.scss';

class Description extends React.Component{
    state = { isOpen: false };

  handleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log("click");
  };

    render(){
        return(
            <div className={styles.divbuttonOpen}>
                <button className={styles.buttonOpen} onClick={this.handleModal}>About</button>
                {this.state.isOpen && (
                    <dialog className={styles.dialogDesc} open 
                    >
              <p className={styles.desc} >{this.props.about}</p>
          </dialog>
      )}

            </div>
        );
    }
    
}

export default Description;