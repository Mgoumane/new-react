import React from 'react';
import '../App.css';

class Card extends React.Component {
  


        render(){
            return (
                <>
                    <img className=" countryImage" src={this.props.flag} alt={"image"} />
                    <p>Name: {this.props.name}</p>
                    <p>Capital: {this.props.capital}</p>
                    <p>Population: {this.props.population}</p>
                    <p>Region: {this.props.region}</p>
        
                    </>
        )
        }
    }
    export default Card;