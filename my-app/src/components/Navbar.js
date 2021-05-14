import React, {Component, Fragment} from 'react'
import {Label, Form, Button, Input} from 'semantic-ui-react'
import {
    NavLink,
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
                favorites: []
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
                        <Label style={{"font-size": "16px", "padding": "15px 10px"}} className="ui">{this.props.user.username}</Label>
                        <Button onClick={() => {this.props.logout(); this.handleBackDisplay();}}>Logout</Button>
                    </Fragment>
        }else{
            if (!this.state.loginDisplay && !this.state.registerDisplay){
                welcome = (<Fragment><Button onClick={this.handleLoginDisplay}>Login</Button> <Button onClick={this.handleRegisterDisplay}>Register</Button></Fragment>)
            }else if (this.state.loginDisplay){
                welcome =
                <Form onChange={(e) => this.handleFormChange(e)} onSubmit={(e) => this.props.login(e, this.state.login)} >
                    <Input type="text" name='login' value={this.state.login} placeholder='Username' /><br/>
                    <Input type="submit" value='Login' />
                    <Button onClick={this.handleBackDisplay}>Back</Button>
                </Form>
            } else if (this.state.registerDisplay){
                welcome =                 
                <Form onChange={(e) => this.handleFormChange(e)} onSubmit={(e) => this.handleRegister(e)} >
                    <Input type="text" name='register' value={this.state.register} placeholder='New User' /><br/>
                    <Input type="submit" value='Register' />
                    <Button onClick={this.handleBackDisplay}>Back</Button>
                </Form>
            }
        }

        return(
            
            <div className="ui huge menu navbar">
                <div className="ui container grid">
                    <div className="computer only row">
                        <a className="header item">Beveragr</a>
                        <NavLink to="/" activeClassName="active"><a className="item">Home</a></NavLink>
                        <NavLink to="/createbev/base" activeClassName="active"><a className="item">Create</a></NavLink>
                        <NavLink to="/ambience" activeClassName="active"><a className="item">Ambience</a></NavLink>
                    </div>                    
                </div>
                {welcome}       
            </div>
          
        )
    }
}