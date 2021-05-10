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
    user: {}
  }

  componentDidMount(){
    fetch('http://localhost:3000/beverages')
    .then(resp => resp.json())
    .then(beverages => {
      this.setState({
        beverages
      })
    })
  }

  render(){
    return(
      <Router>
        <Navbar user={this.state.user} />
        <Switch>
          <Route exact path="/" >
              <BeveragesContainer beverages={this.state.beverages} />
          </Route>
          <Route path="/createbev">
              <CreateBeverage />
          </Route>
          <Route>
            <div>404 No matching URL</div>
          </Route>
        </Switch>
      </Router>
    )
  }
}
