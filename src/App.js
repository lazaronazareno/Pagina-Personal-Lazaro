import React from 'react';
import './App.css';
import { Provider } from './components/index'

class App extends React.Component {
  state = {
    name: "",
    setName: ({ value }) => this.setState({ name: value }),
    apellido:"",
    setApellido:({ value }) => this.setState({apellido: value}),
  };

render(){
  return (
    <div className="App">
      <Provider value={this.state}>

      </Provider>
    </div>
  );
}
}

export default App;
