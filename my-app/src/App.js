import React, {Component} from 'react'
import Navbar from './components/Navbar'
import BeveragesContainer from './components/BeveragesContainer'
import CreateBeverage from './components/CreateBeverage'
import Ambience from './components/Ambience'
import {
  BrowserRouter as Router,
  Switch,
  Route
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

  handleFavButton = (id) => {
    if(!this.state.user.favorites.some(element => element === id)){
      fetch(`http://localhost:3000/users/${this.state.user.id}`,{
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          favorites: [...this.state.user.favorites, id]
        })
      })
      .then(resp => resp.json())
      .then(updatedUser => {
        this.setState({
          user: updatedUser
        })
      })
    }else{
      let newFavorites = [...this.state.user.favorites]
      fetch(`http://localhost:3000/users/${this.state.user.id}`,{
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          favorites: newFavorites.filter(element => element !== id)
        })
      })
      .then(resp => resp.json())
      .then(updatedUser => {
        this.setState({
          user: updatedUser
        })
      })
    }
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
          <Route path="/beveragr/createbev">
            <CreateBeverage ingredients={this.state.ingredients} handleNewBeverage={this.handleNewBeverage} />
          </Route>
          <Route exact path="/beveragr" >
            <BeveragesContainer beverages={this.state.beverages} user={this.state.user} handleFavButton={this.handleFavButton} />
          </Route>
          <Route exact path="/beveragr/ambience">
            <Ambience />
          </Route>
          <Route>
            <div>404 No matching URL</div>
          </Route>
        </Switch>
      </Router>
    )
  }
}
