import React, {Component} from 'react'
import {Link} from "react-router-dom";

export default class BeverageBase extends Component{
    render(){
        return(
           <div>
               I am Base
               <Link to="/createbev/creamer">Next</Link>
           </div>
        )
    }
}