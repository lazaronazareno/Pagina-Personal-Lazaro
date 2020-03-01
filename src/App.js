import React from 'react';
import styles from './App.module.scss';
import Inicio from './Componentes/index.js';
import Spinner from './Componentes/spinner';

class App extends React.Component {
  state = {
    loading: true
  }


componentDidMount(){
    this.setState({loading: false})
}
  render(){
    let content = this.state.loading ? <Spinner/> : <h1>bienvenidos</h1>
  return (
    <div className={styles.App}>
        <Inicio/>

    </div>
  );
}
}

export default App;
