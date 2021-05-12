import React, {Component} from 'react'
import { Card } from 'semantic-ui-react'
import coffee from '../assets/coffee.png'
import tea from '../assets/tea.png'

const imageMap = {
    'coffee' : coffee,
    'tea': tea
}

export default class BeverageCard extends Component{
    render(){
        return(
            
                <div className="ui card">
                    <div className="ui small centered image" style={{"background-color":"#fff"}}>
                            <img src={imageMap[`${this.props.beverage.baseType}`]}/>
                    </div>
                    <div className="content">
                            <div className="header">{this.props.beverage.name}</div>
                            <div className="meta">{this.props.beverage.description}</div>
                            <div className="description">
                                <b>{this.props.beverage.base}</b><br/>
                                {this.props.beverage.creamer}<br/>
                                {this.props.beverage.addins.join(', ')} 
                            </div>
                    </div>              
                </div>
          
        //    <Card>
        //        {this.props.beverage.name}
        //    </Card>
        )
    }
}