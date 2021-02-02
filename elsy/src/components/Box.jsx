import React from 'react';
class Box extends React.Component { // Dans une classe on a des attributs et des méthodes 
    render() {
        if (this.props.icon === "local_drink") {
            return (
            <div className="box col-sm-3 col-6">
                <span className="material-icons" style={{ fontSize: 100, color: this.props.color }}>
                    {this.props.icon}
                </span>
                <p>{this.props.value}{this.props.unit}</p>
            </div>
            )
        } else {
            return (
                <div className="box col-sm-3 col-6">
                    <span className="material-icons" style={{ fontSize: 100, color: this.props.color }}>
                        {this.props.icon}
                    </span>
                    <p>{this.props.value}{this.props.unit}</p>
                    <input type="range" onChange={this.props.change} min={this.props.min} max={this.props.max} value={this.props.value}  />
                </div>
            )
        }

    }
}
export default Box

//Ajoutez dans le render une condition permettant d'afficher un élément si Box.jsx ne représente pas la case Water  !