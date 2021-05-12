import React, {Component} from 'react'
import {Link} from "react-router-dom";
import IngredientCard from './IngredientCard'
import { Button } from 'semantic-ui-react'; 
import press from '../assets/press.png'
import teabag from '../assets/teabag.png'



export default class BeverageBase extends Component{

    state = {
        display: ''
    }
    handleDisplay = (display)=>{
        this.setState({
            display
        })
    }


    render(){
        let coffees = this.props.base.filter(base => base.type === 'coffee')
        let teas = this.props.base.filter(base => base.type === 'tea')
        return(
        <div>
            <div className="ui grid cards centered columns">
                <div className="ui medium centered image" onClick={()=> this.handleDisplay('coffee')}>
                    <img src={press}></img><br/>
                    <span className='ui large header'>Coffee</span>
                </div>
                <div className="ui medium centered image" onClick={()=> this.handleDisplay('tea')} >
                    <img src={teabag}></img><br/>
                    <span className='ui large header'>Tea</span>
                </div>

            </div>
            <div className="ui grid cards centered columns">
                {this.state.display === 'coffee' ? coffees.map(coffee => <IngredientCard ingredient={coffee} setIngredient={this.props.setBase} />):null}
                {this.state.display === 'tea' ? teas.map(tea => <IngredientCard ingredient={tea} setIngredient={this.props.setBase} />):null}
            </div>
            <div className="ui grid cards centered columns">
                <Link to={this.props.beverageCurrent.base.length > 0 ? '/createbev/creamer' : '#'}><Button disabled={this.props.beverageCurrent.base.length > 0 ? false : true}>Next</Button></Link>
            </div>
        </div>
        )
    }
}