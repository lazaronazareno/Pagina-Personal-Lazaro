import React from 'react';
import logo from './logo.svg';
import './App.css';


class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {valor: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({valor: event.target.valor});
  }

  handleSubmit(event) {
    alert('Una idea ha sido recibida: ' + this.state.valor);
    event.preventDefault();
    
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Ideas:
          <input type="text" valor={this.state.value} onChange={this.handleChange} />
        </label> 
        <input type="submit" valor="Submit"/>
      </form>
    );
  }
}

class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Un nombre e idea ha sido recibido: ' + this.state.value);
    event.preventDefault();
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label> 
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}
class App extends React.Component {
  render(){
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-logo" alt="logo">Lazaro</h1>
        <p>
          <code>Lazaro Vega Sanchez</code>
        </p>
        <p>
        <code>asdasdasdsad</code>
        </p>
        <p>
          <code>qweqweqweqweqwe</code>
        </p>
        <div>
          <Formulario/>
        </div>
        <div>
          <NameForm/>
        </div>
      
        
      </header>
    </div>
  );
}
}

export default App; 
