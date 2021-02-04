import React from "react";
import './App.css';
import Add from "./components/add"
import List from "./components/list"
import Pay from "./components/pay"
import Button from "./components/button"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      activeTabs: 'add',
      items: [],
    }
    this.selectAdd = this.selectAdd.bind(this)
    this.selectList = this.selectList.bind(this)
    this.selectPay = this.selectPay.bind(this)
  }
  selectAdd(){
    this.setState({
      activeTabs:'add'
    })
    console.log(this.state.activeTabs)

  }
  selectList(){
    this.setState({
      activeTabs:'list'
    })
    console.log(this.state.activeTabs)

  }
  selectPay(){
    this.setState({
      activeTabs:'pay'
    })
    console.log(this.state.activeTabs)

  }

  render() {
    return (
      <div>
        <Add />
        <List />
        <Pay />

        <Button 
          onClick={this.selectAdd}
          isSelected={this.state.activeTabs === 'add' ? true : false}>
            Add
        </Button>

        <Button 
          onClick={this.selectList}
          isSelected={this.state.activeTabs === 'list' ? true : false}>
            List
        </Button>

        <Button
          onClick={this.selectPay}
          isSelected={this.state.activeTabs === 'pay' ? true : false}>
            Pay
        </Button>

      </div>
    )
  };
}

export default App;
