import React from 'react';
import './App.css';
import  Button from "./components/Button"
import  Card from "./components/card"

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
  componentDidMount() { 
    this.getCountry("france");
        // Je vais chercher les infos  dans le componentDidMount car c'est la  que mon composant est vivant et pret à faire des choses 
  }

  getCountry(country){

  // Une fois le composant monter je fais du code 
    // Je vais aller fetcher cette Url
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)//La méthode fetch permet de récupérer de la donnée à un endroit précis (souvent une API externe, à laquelle on accèdera grâce à son url) et de la ramener sous le format souhaité pour travailler dessus depuis notre application
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
      <div className=" div-principal container text-center">
        <h1> Tu peux choisir un pays </h1>
        


        {/* <Card
             flag={this.state.flag} 
             name={this.state.name} 
             capital={this.state.capital} 
             region={this.state.region} 
             population={this.state.population} 
        ></Card> */}
        <Card
             {...this.state} 
        ></Card>
        <Button  onClick={()=> {this.getCountry("france");}} >  France</Button>  
        {/* J'utilise une fonction fléchée car j'ai un paramètre dans getCountry */}
        <Button onClick={()=> {this.getCountry("croatia");}}>  Croatie</Button>
        <Button onClick={()=> {this.getCountry("brazil");}}> Brazil </Button>
      </div>

      
    )
  }
}

export default App;
