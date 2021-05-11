import React, {Component, Fragment} from 'react'
import {Segment, Label, Form, Button} from 'semantic-ui-react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class Navbar extends Component{

    state = {
        loginDisplay: false,
        registerDisplay: false,
        login: "",
        register: "",
        registerName: ""
    }

    handleLoginDisplay = () => {
        this.setState({
            loginDisplay: true
        })
    }

    handleRegisterDisplay = () => {
        this.setState({
            registerDisplay: true
        })
    }

    handleBackDisplay = () => {
        this.setState({
            loginDisplay: false,
            registerDisplay: false,
            login: "",
            register: ""
        })
    }

    handleFormChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleRegister = () => {
        fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                username: this.state.register,
                drinks: []
            })
        })
        .then(resp => resp.json())
        .then(newUser => {
            this.props.newUser(newUser)
        })
    }

    render(){
        let welcome
        if (this.props.user.username){
            welcome = <Fragment>
                        <Label as='a' image>{this.props.user.username}</Label>
                        <Button onClick={() => {this.props.logout(); this.handleBackDisplay();}}>Logout</Button>
                    </Fragment>
        }else{
            if (!this.state.loginDisplay && !this.state.registerDisplay){
                welcome = (<Fragment><button onClick={this.handleLoginDisplay}>Login</button> <button onClick={this.handleRegisterDisplay}>Register</button></Fragment>)
            }else if (this.state.loginDisplay){
                welcome =
                <Form onChange={(e) => this.handleFormChange(e)} onSubmit={(e) => this.props.login(e, this.state.login)} >
                    <input type="text" name='login' value={this.state.login} placeholder='Username' />
                    <input type="submit" value='Login' />
                    <button onClick={this.handleBackDisplay}>Back</button>
                </Form>
            } else if (this.state.registerDisplay){
                welcome =                 
                <Form onChange={(e) => this.handleFormChange(e)} onSubmit={(e) => this.handleRegister(e)} >
                    <input type="text" name='register' value={this.state.register} placeholder='New User' />
                    <input type="submit" value='Register' />
                    <button onClick={this.handleBackDisplay}>Back</button>
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