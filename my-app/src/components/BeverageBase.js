import React, {Component} from 'react'
import {Link} from "react-router-dom";

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
           <div >
               <button onClick={()=> this.handleDisplay('coffee')} >Coffee</button>
               <button onClick={()=> this.handleDisplay('tea')} >Tea</button>
               <br/>
               {this.state.display === 'coffee' ? coffees.map(coffee => <div onClick={()=> {this.props.setBase(coffee.name); this.props.setBaseType(coffee.type)}} >{coffee.name}</div>) : null}
               {this.state.display === 'tea' ? teas.map(tea => <div onClick={()=> {this.props.setBase(tea.name); this.props.setBaseType(tea.type)}} >{tea.name}</div>) : null}
               <Link to="/createbev/creamer">Next</Link>
           </div>
        )
    }
}