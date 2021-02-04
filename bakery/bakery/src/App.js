import React from "react";
import './App.css';
import Add from "./components/add"
import List from "./components/list"
import Pay from "./components/pay"
import Button from "./components/button"

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

      activeTab: "add",
      items:[],
    }
  }
  render() {
    return (
      <div>
        <Add/>
        <List/>
        <Pay/>
        <Button />
      </div>
    )
  };
}

export default App;
