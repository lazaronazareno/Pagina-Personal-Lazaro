import React from 'react';
import './App.css';
import Inicio from './Componentes/index.js';

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <Inicio/>
      </header>
    </div>
  );
}
}

export default App;
