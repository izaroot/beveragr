import React, {Component} from 'react'
import {Link} from "react-router-dom";

export default class Creamer extends Component{
    render(){
        return(
           <div>
               I am Review
               <Link to="/createbev/base">Back to Base</Link>
               <Link to="/createbev/creamer">Back to Creamer</Link>
               <Link to="/createbev/addins">Back to Addins</Link>
              <button>Submit</button>
           </div>
        )
    }
}