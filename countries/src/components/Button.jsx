import React from 'react';
import '../App.css';

class Button extends React.Component{

    render(){
        return(
            <>
                <button className="myButton" onClick={this.props.onClick}>  {this.props.children}   </button>

            </>
        )
    }
}
export default Button;