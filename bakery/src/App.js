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
    this.addItem = this.addItem.bind(this)
  }
  //Écrivez une méthode addItem qui reçoit les paramètres name et price
  addItem(name, price) {
    const obj = {
      name: name,
      price: price
    }
    const newList = this.state.items
    newList.push(obj)
    //Elle ajoute un objet dans l'array du state items avec les clés name : xx et price : xx
    this.setState({
      items: newList
    })
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

  renderContent = () => {
    switch(this.state.activeTabs) {
      case 'add':
        return <Add add={this.addItem}></Add>
      case 'list':
        return <List listItems={this.state.items}></List>
      case 'pay':
        return <Pay></Pay>
    }
  }
  
  render() {
    return (
      <div className="container div-principal">
        

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

        {this.renderContent()}

      </div>
    )
  };
}

export default App;
