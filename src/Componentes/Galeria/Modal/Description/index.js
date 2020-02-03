import React from 'react';
import '../../Modal/styles.css';

class Description extends React.Component {
    state = { isOpen: false };

    handleModal = () => {
        this.setState({ isOpen: !this.state.isOpen });
        console.log("click");
    };

    render() {
        return (
            <div>
                <button className="button-open" onClick={this.handleModal}>About</button>
                {this.state.isOpen && (
                    <dialog className="dialog-desc" open
                    >
                        <p className="desc" >{this.props.about}</p>
                    </dialog>
                )}

            </div>
        );
    }

}

export default Description;