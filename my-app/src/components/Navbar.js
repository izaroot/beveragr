import React, {Component, Fragment} from 'react'
import {Segment, Label, Form} from 'semantic-ui-react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class Navbar extends Component{

    state = {
        loginDisplay: false,
        registerDisplay: false
    }



    render(){
        let welcome
        if (this.props.user.name){
            welcome = <Label as='a' image>{this.props.user.name}</Label>
        }else{
            if (!this.state.loginDisplay && !this.state.registerDisplay){
                welcome = (<Fragment><button>Login</button> <button>Register</button></Fragment>)
            }else if (this.state.loginDisplay){
                welcome =
                <Form>
                    <input type="text" name='login' placeholder='Username' />
                    <input type="submit" value='Login' />
                </Form>
            } else if (this.state.registerDisplay){
                welcome =                 
                <Form>
                    <input type="text" name='register'placeholder='New User' />
                    <input type="submit" value='Register' />
                </Form>
            }
        }

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
            {welcome}
            </Segment>
            </div>
        )
    }
}