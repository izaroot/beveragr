import React, {Component, Fragment} from 'react'
import BeverageCard from './BeverageCard'

export default class BeveragesContainer extends Component{


    render(){
        return(
            <div className="ui items grid centered columns four">
               {this.props.beverages.map(beverage => <BeverageCard beverage={beverage}/> )}
            </div>
        )
    }
}