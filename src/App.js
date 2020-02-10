import React from 'react';
import styles from './App.module.scss';
import Inicio from './Componentes/index.js';

class App extends React.Component {
  render(){
  return (
    <div className={styles.App}>
        <Inicio/>

    </div>
  );
}
}

export default App;
