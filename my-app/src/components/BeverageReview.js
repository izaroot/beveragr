import React, {Component} from 'react'
import {Link} from "react-router-dom";

export default class Creamer extends Component{
    render(){
        return(
           <div>
               I am Review
               <div>Base: {this.props.beverageCurrent.base}</div><br/>
               <div>Creamer: {this.props.beverageCurrent.creamer}</div><br/>
               <div>Addins: {this.props.beverageCurrent.addins.join(', ')} </div><br/>
               <div></div><br/>
               <div></div><br/>
               <Link to="/createbev/base">Back to Base</Link>
               <Link to="/createbev/creamer">Back to Creamer</Link>
               <Link to="/createbev/addins">Back to Addins</Link>
              <button>Submit</button>
           </div>
        )
    }
}