import React from "react";
import Box from "./components/Box"
import './styles/global.css';
const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

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
    console.log(this.state)
  }
  onStepChange = (event) =>{
    this.setState({steps: event.target.value})
    console.log(this.state.temperature)

  }
  onTempChange = (event) =>{
    this.setState({temperature: event.target.value})
    console.log(this.state.temperature)

  }
  
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <p>heartMin= {heartMin} </p>
          <p>Temperature = {tempMin} </p>
          <p>Steps = {stepsMin} </p>
          <Box icon={"local_drink"} color={"#3A85FF"} value={1.5} unit={"L"} /> 
          
          <Box icon={"directions_walk"}  color={"black"}  value={this.state.steps} unit={"steps"} change={this.onStepChange} min ={0} max={200}/> 

          <Box icon={"favorite"} color={"red"} value={this.state.heart} unit={"bpm"}  min={heartMin} max={heartMax}  change={this.onHeartChange}  /> 

          <Box icon={"wb_sunny"} color={"yellow"} value={this.state.temperature} unit={"°C"} change={this.onTempChange}/> 
        </div>
      </div>
    );
  }
}

export default App;



