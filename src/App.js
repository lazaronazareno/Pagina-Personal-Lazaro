import React from 'react';
import './App.css';
import Formulario from './Formulario /index'

class App extends React.Component {
  state = {
    isOpen: false,
    username: '',
    password: ''
  };

  handleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log("click");
    
  };

  render() {
    return (
      <div className="App">
        <Formulario title="Formulario" />
        {this.state.isOpen && (
          <dialog open>
            <Formulario username={this.state.username} password={this.state.password} />
          </dialog>
        )}
      </div>
    );
  }
}

export default App;
