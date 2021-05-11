import React, {Component} from 'react'
import {Link} from "react-router-dom";

export default class Addin extends Component{
    render(){
        return(
           <div>
               I am Addins
               {this.props.addins.map(addin => <div onClick={() => this.props.setAddins(addin.name)} >{addin.name}</div>)}
               <Link to="/createbev/creamer">Back</Link>
               <Link to="/createbev/review">Finish</Link>
           </div>
        )
    }
}