import React, {Component} from 'react'
import {Link} from "react-router-dom";
import IngredientCard from './IngredientCard';
import { Button } from 'semantic-ui-react';

export default class Creamer extends Component{

    render(){
        return(
            <div>
                <div className="ui grid cards centered columns">
                {this.props.creamer.map(cream => <IngredientCard ingredient={cream} setIngredient={this.props.setCreamer}/>)}
                </div>
                <div className="ui grid cards centered columns" >
                    <Link to="/createbev/base"><Button>Back</Button></Link>
                    <Link to="/createbev/addins"><Button>Next</Button></Link>
                </div>
           </div>
        )
    }
}