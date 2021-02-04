import React from 'react';
class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: '',
            price: 1,
        }
    this.updateProductName = this.updateProductName.bind(this);
    this.updatePrice = this.updatePrice.bind(this);

    }

    //updateProductName : elle récupère la valeur de l’input et la stocke dans le state productName
    updateProductName(event) {
        this.setState({
            productName: event.target.value
        })
    }
    //updatePrice : elle récupère la valeur du slider et la stocke dans le state price
    updatePrice(event) {
        this.setState({
            price: event.target.value
        })
    }
    render() {
        return (

            <div className="container">
                <div className="row">
                    <input type="text" className="col-10" onChange={this.updateProductName}></input>
                    <button type="button" className="btn btn-primary col-2" onClick={this.click}>Add</button>
                </div>
                <div className="row">
                    <input type="range" value={this.state.price} onChange={this.updatePrice} min="1" max="10"></input>
                    <span>{this.state.price}</span>
                </div>
            </div>
        )
    }
}
export default Add