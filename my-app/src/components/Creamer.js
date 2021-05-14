import React, {Component} from 'react'
import {Link} from "react-router-dom";
import IngredientCard from './IngredientCard';
import { Button } from 'semantic-ui-react';

import Milk from '../assets/milk.png'

export default class Creamer extends Component{

    render(){
        return(
            <div>
                <div className="ui grid cards centered columns">
                    <div className="ui medium centered image">
                        <img alt="" src={Milk}></img><br/>
                        <span className='ui large header'>Creamers</span>
                    </div>
                </div>
                <div className="ui grid cards four centered columns">
                {this.props.creamer.map(cream => <IngredientCard ingredient={cream} setIngredient={this.props.setCreamer}/>)}
                </div>
                <div className="ui grid cards centered columns" >
                    <Link to="/createbev/base"><Button>Back</Button></Link>
                    <Link to="/createbev/addins"><Button>Next</Button></Link>
                </div>
                {this.props.beverageCurrent.baseType !== "" ? 
                <div className="ui left bevstate">
                    <ul>
                        <li>{this.props.beverageCurrent.iced ? "Iced" : null} {this.props.beverageCurrent.base}</li>
                        {this.props.beverageCurrent.creamer !== "" ? <li>{this.props.beverageCurrent.creamer}</li> : null}
                        {this.props.beverageCurrent.addins.length > 0 ? this.props.beverageCurrent.addins.map(addin => <li>{addin}</li>) : null}
                        {this.props.beverageCurrent.vegan ? <li>Vegan</li> : null}
                    </ul>
                    
                </div> : null}
           </div>
        )
    }
}