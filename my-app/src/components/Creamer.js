import React, {Component} from 'react'
import {Link} from "react-router-dom";

export default class Creamer extends Component{
    render(){
        return(
           <div>
               I am Creamer
               <Link to="/createbev/base">Back</Link>
               <Link to="/createbev/addins">Next</Link>
           </div>
        )
    }
}