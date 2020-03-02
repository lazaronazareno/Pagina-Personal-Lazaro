import React from "react";

import { Consumer } from '../index';

class Navbar extends React.Component{
    render(){
        return(
            <Consumer>
                {({ name, apellido }) => (
            <div>
                <ul>
                <li>{name}</li>
                <li>{apellido}</li>
                </ul>
            </div>
                )}
                </Consumer>

        );
    }
}

export default Navbar;
