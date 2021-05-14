import React, {Component} from 'react'
import {Link} from "react-router-dom";
import { Button } from 'semantic-ui-react';
import IngredientCard from './IngredientCard'
import Addins from '../assets/addins.png'

export default class Addin extends Component{
    render(){
        return(
            <div>
                <div className="ui grid cards centered columns">
                    <div className="ui medium centered image">
                        <img alt="" src={Addins}></img><br/>
                        <span className='ui large header'>Addins</span>
                    </div>
                </div>
                <div className="ui grid cards centered four columns">
                    {this.props.addins.map(addin => <IngredientCard ingredient={addin} setIngredient={this.props.setAddins}/>)}
                </div>
                <div className="ui grid cards centered columns">
                    <Link to="/createbev/creamer"><Button>Back</Button></Link>
                    <Link to="/createbev/review"><Button>Finish</Button></Link>
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