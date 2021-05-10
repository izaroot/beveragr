import React, {Component} from 'react'

export default class BeverageCard extends Component{
    render(){
        return(
           <div>
               I am Beverage {this.props.beverage.name}
           </div>
        )
    }
}