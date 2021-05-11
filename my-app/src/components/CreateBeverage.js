import React, {Component, Fragment} from 'react'
import BeverageBase from './BeverageBase'
import Creamer from './Creamer'
import Addin from './Addin'
import BeverageReview from './BeverageReview'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class CreateBeverage extends Component{
    render(){
        return(
           <Router>
               <Switch>
                    <Route exact path="/createbev/base">
                        <BeverageBase />
                    </Route>
                    <Route exact path="/createbev/creamer" >
                        <Creamer />
                    </Route>
                    <Route exact path="/createbev/addins" >
                        <Addin />
                    </Route>
                    <Route exact path="/createbev/review" >
                        <BeverageReview />
                    </Route>
               </Switch>
           </Router>
        )
    }
}