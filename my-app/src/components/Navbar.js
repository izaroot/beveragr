import React, {Component} from 'react'
import {Segment, Label} from 'semantic-ui-react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class Navbar extends Component{


    render(){
        return(
            <div>
            <Segment className="navbar">
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/createbev/base">Create</Link>
                </li>
                <li>
                <Link to="/ambience">Ambience</Link>
                </li>
            </ul>
            <div>
                {this.props.user.name ? <Label as='a' image></Label> : <button>Login</button> }
            </div>
            </Segment>
            </div>
        )
    }
}