import React, {Component} from 'react'
import { Card } from 'semantic-ui-react'
import coffee from '../assets/coffee.png'
import tea from '../assets/tea.png'
import icedcoffee from '../assets/icedcoffee.png'
import icedtea from '../assets/icedtea.png'
import vegan from '../assets/vegan.svg'


const imageMap = {
    'coffee' : coffee,
    'tea': tea,
    'icedcoffee': icedcoffee,
    'icedtea': icedtea
}

export default class BeverageCard extends Component{
    render(){
        const iced = this.props.beverage.iced ? "iced" : ""
        return(
            
                <div className="ui card">
                    <div className="ui small centered image" style={{"background-color":"#fff"}}>
                            <img src={imageMap[`${iced}${this.props.beverage.baseType}`]}/>
                    </div>
                    <div className="content">
                            <div className="header">{this.props.beverage.name}</div>
                            <div className="meta">{this.props.beverage.description}</div>
                            <div className="description">
                                <b>{this.props.beverage.base}</b><br/>
                                {this.props.beverage.creamer}<br/>
                                {this.props.beverage.addins.join(', ')}<br/><br/>
                                {this.props.beverage.vegan ? <img style={{"width" : "10%"}} src={vegan} /> : null}
                            </div>
                    </div>              
                </div>
        )
    }
}