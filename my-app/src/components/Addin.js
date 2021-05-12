import React, {Component} from 'react'
import {Link} from "react-router-dom";
import { Button } from 'semantic-ui-react';
import IngredientCard from './IngredientCard'

export default class Addin extends Component{
    render(){
        return(
            <div>
                <div className="ui grid cards centered columns">
                    {this.props.addins.map(addin => <IngredientCard ingredient={addin} setIngredient={this.props.setAddins}/>)}
                </div>
                <div className="ui grid cards centered columns">
                    <Link to="/createbev/creamer"><Button>Back</Button></Link>
                    <Link to="/createbev/review"><Button>Finish</Button></Link>
                </div>
           </div>
        )
    }
}