import React from 'react';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      capital: "",
       flag: "",
      population: "",
      region: "",
    }

  }
  componentDidMount() { // Une fois le composant monter je fais du code 
    // Je vais aller fetcher cette Url
    fetch("https://restcountries.eu/rest/v2/name/france")
      // On utilse les Promess à cause de l'insynchronité
      .then(response => response.json()) // je vais transformer cette réponse en objet JS que je vais pouvoir manipuler
      .then(response => {
        console.log(response)
        this.setState({
          name: response[0].name, // Pour l'ajouter à mon State
          capital: response[0].capital,
          flag: response[0].flag,
          population: response[0].population,
          region: response[0].region,
        })
      })


  }

  render() {
    return (
      <div>
        <p>Name: {this.state.name}</p>
        <p>Capital: {this.state.capital}</p>
        <p>Flag: {this.state.flag}</p>
        <p>Population: {this.state.population}</p>
        <p>Region: {this.state.region}</p>
      </div>
    )
  }
}

export default App;
