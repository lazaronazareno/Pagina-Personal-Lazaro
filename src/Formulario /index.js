import React from 'react';

import '../App.css'

class Formulario extends React.Component{
    state={username:'', password:''}

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ username: '' });
        this.setState({ password: '' });
    };

    render(){
    return(
        <div>
            <h1 className="App-logo">{this.props.title}</h1>
            <form onSubmit={this.handleModal} >
                <input 
                type="text" 
                id="username" 
                name="username"
                value={this.state.username} 
                onChange={(e) =>{ this.setState({username: e.target.value})}}
 />
                <input 
                type="password" 
                id="password" 
                name="password"
                value={this.state.value} 
                onChange={(a) =>{ this.setState({password: a.target.value})}}
/>
                <button type="submit">Submit</button>
            </form>
            
        </div>

    );
    }
}
export default Formulario;