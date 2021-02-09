import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

class DetailFilm extends React.Component {
    render() {
        return (
            <div>
                {this.props.match.params.id}
            </div>
        )
    }
}

export default DetailFilm;