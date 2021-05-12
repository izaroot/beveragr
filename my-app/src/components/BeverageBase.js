import React, {Component} from 'react'
import {Link} from "react-router-dom";
import IngredientCard from './IngredientCard'
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
                {/* <button onClick={()=> this.handleDisplay('coffee')} >Coffee</button>
                <button onClick={()=> this.handleDisplay('tea')} >Tea</button> */}
                <br/>
                {this.state.display === 'coffee' ? coffees.map(coffee => <IngredientCard ingredient={coffee} />):null}
                {this.state.display === 'tea' ? teas.map(tea => <IngredientCard ingredient={tea} />):null}

                {/* {this.state.display === 'coffee' ? coffees.map(coffee => <div onClick={()=> {this.props.setBase(coffee)} >{coffee.name}</div>) : null} */}
                {/* {this.state.display === 'tea' ? teas.map(tea => <div onClick={()=> {this.props.setBase(tea)} >{tea.name}</div>) : null} */}
                <Link to="/createbev/creamer">Next</Link>
            </div>
           </div>
        )
    }
}