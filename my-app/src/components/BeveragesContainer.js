import React, {Component, Fragment} from 'react'
import BeverageCard from './BeverageCard'

export default class BeveragesContainer extends Component{


    render(){
        return(
            <Fragment>
               {this.props.beverages.map(beverage => <BeverageCard beverage={beverage}/> )}
            </Fragment>
        )
    }
}