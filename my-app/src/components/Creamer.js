import React, {Component} from 'react'
import {Link} from "react-router-dom";

export default class Creamer extends Component{

    render(){
        return(
           <div>
               I am Creamer
               {this.props.creamer.map(cream => <div onClick={() => {this.props.setCreamer(cream.name)}} >{cream.name}</div>)}
               <Link to="/createbev/base">Back</Link>
               <Link to="/createbev/addins">Next</Link>
           </div>
        )
    }
}