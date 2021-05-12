import React, {Component} from 'react'
import Navbar from './components/Navbar'
import BeveragesContainer from './components/BeveragesContainer'
import CreateBeverage from './components/CreateBeverage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default class App extends Component{
  state={
    beverages: [],
    user: {},
    ingredients: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/beverages')
    .then(resp => resp.json())
    .then(beverages => {
      this.setState({
        beverages
      })
    })
    fetch('http://localhost:3000/ingredients')
    .then(resp => resp.json())
    .then(ingredients => {
      this.setState({
        ingredients
      })
    })
  }

  handleLogin = (event, username) => {
      event.preventDefault()
      console.log(username)
      fetch(`http://localhost:3000/users?username=${username}`)
      .then(resp => resp.json())
      .then(userArr =>{
        if(userArr.length <= 0){
          alert('This user does not exist.')
        }else{
          let user = userArr[0]
          console.log(user)
          this.setState({
            user
          })
        }
      })
  }

  handeNewUserLogin = (user) => {
    this.setState({
      user
    })
  }

  handleLogout = () => {
    this.setState({
      user: {}
    })
  }

  handleNewBeverage = (newBeverage) => {
    this.setState({
      beverages: [...this.state.beverages, newBeverage]
    })
  }

  render(){
    return(
      <Router>
        <Navbar user={this.state.user} login={this.handleLogin} logout={this.handleLogout} newUser={this.handeNewUserLogin} />
        <Switch>
          <Route path="/createbev">
            <CreateBeverage ingredients={this.state.ingredients} handleNewBeverage={this.handleNewBeverage} />
          </Route>
          <Route exact path="/" >
            <BeveragesContainer beverages={this.state.beverages} />
          </Route>
          <Route>
            <div>404 No matching URL</div>
          </Route>
        </Switch>
      </Router>
    )
  }
}
