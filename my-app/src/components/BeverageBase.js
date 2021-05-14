import React, {Component} from 'react'
import {Link} from "react-router-dom";
import IngredientCard from './IngredientCard'
import { Button } from 'semantic-ui-react'; 
import press from '../assets/press.png'
import teabag from '../assets/teabag.png'
import icedcoffee from '../assets/icedcoffee.png'
import icedtea from '../assets/icedtea.png'
import icecube from '../assets/icecube.svg'
import notIced from '../assets/not_iced.svg'



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
                    <img alt="" src={this.props.beverageCurrent.iced ? icedcoffee : press}></img><br/>
                    <span className='ui large header'>Coffee</span>
                </div>
                <div className="ui medium centered image" onClick={()=> this.handleDisplay('tea')} >
                    <img alt="" src={this.props.beverageCurrent.iced ? icedtea : teabag}></img><br/>
                    <span className='ui large header'>Tea</span>
                </div>
            </div>
            <div className="ui grid cards centered four columns">
                {this.state.display === 'coffee' ? coffees.map(coffee => <IngredientCard ingredient={coffee} setIngredient={this.props.setBase} />):null}
                {this.state.display === 'tea' ? teas.map(tea => <IngredientCard ingredient={tea} setIngredient={this.props.setBase} />):null}
            </div>
            <div className="ui grid cards centered columns">
                <img alt="" className="ui image tiny" src={this.props.beverageCurrent.iced ? icecube : notIced} onClick={this.props.setIced} />
                <Link to={this.props.beverageCurrent.base.length > 0 ? '/createbev/creamer' : '#'}><Button disabled={this.props.beverageCurrent.base.length > 0 ? false : true}>Next</Button></Link>
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