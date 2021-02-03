import React from "react";
import Box from "./components/Box"
import './styles/global.css';
const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

//À la création de notre composant classe, il faut déclarer un state (dans lequel on pourra stocker les données avec lequel doit travailler ce composant pour s'afficher). Pour cela, on utilise aussi le constructeur :
//L'avantage d'utiliser le state plutôt que d'écrire les données à la main ou de les stocker dans des variables classiques, c'est qu'on peut réutiliser ces données partout où on en a besoin, et si la donnée change dans le state, elle sera changée partout et les composants qui l'utilisent seront mis à jour ! C'est une zone où l'on stocke des informations auxquelles le code fait référence en permanence.
//Pour modifier le state d'un composant, on ne peut pas procéder comme d'habitude. Il faut utiliser une fonction spéciale :
 class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {//On déclare le state (va garder en mémoire des données dans objet)
      water: 0,
      heart: 120,
      temperature: -10,
      steps: 3000,
    }
  } 
  onHeartChange  = (event) => {
    this.setState({heart : event.target.value })
  }
  
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <p>heartMin= {heartMin} </p>
          <p>Temperature = {tempMin} </p>
          <p>Steps = {stepsMin} </p>
          <Box style= {{fontSize: 100}}  icon={"local_drink"} color={"#3A85FF"} value={1.5} unit={"L"} /> 
          <Box style= {{fontSize: 100}}  icon={"directions_walk"}  color={"black"}  value={3000} unit={"steps"}/> 

          <Box style= {{fontSize: 100}}  icon={"favorite"} color={"red"} value={this.state.heart} unit={"bpm"}  min={heartMin} max={heartMax}  change={this.onHeartChange}  /> 

          <Box style= {{fontSize: 100}}  icon={"wb_sunny"} color={"yellow"} value={-10} unit={"°C"} /> 
        </div>
      </div>
    );
  }
}

export default App;



