import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
class HomePage extends React.Component{
    render(){
        return(
            <div>
                {this.props.movies.map((movie) => { return <Link to={`/detailFilm/${movie.id}`}> {movie.title} </Link>})}
            </div>
        )
    }
}
export default HomePage;


