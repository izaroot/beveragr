import React, {Component} from 'react'
import { Card } from 'semantic-ui-react'
import coffee from '../assets/coffee.jpg'
import tea from '../assets/tea.jpg'

const imageMap = {
    'coffee' : coffee,
    'tea': tea
}

export default class BeverageCard extends Component{
    render(){
        return(
            
                <div className="ui item" style={{width: "20%"}}>
                    <div class="ui small image">
                            <img src={imageMap[`${this.props.beverage.baseType}`]}/>
                    </div>
                    <div className="content">
                            <div className="header">{this.props.beverage.name}</div>
                            <div className="meta">{this.props.beverage.description}{this.props.beverage.type}</div>
                    </div>              
                </div>
          
        //    <Card>
        //        {this.props.beverage.name}
        //    </Card>
        )
    }
}