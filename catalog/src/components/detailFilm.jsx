import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

class DetailFilm extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.match.params.id}</h1>
                <h2>{this.props.movies[this.props.match.params.id -1].title}</h2>
                <h2>{this.props.movies[this.props.match.params.id -1].director}</h2>
                <h2>{this.props.movies[this.props.match.params.id -1].stars}</h2>
                <img  alt={this.props.movies[this.props.match.params.id -1].image}></img>
                <h2>{this.props.movies[this.props.match.params.id -1].description}</h2>

            </div>
        )
    }
}

export default DetailFilm;