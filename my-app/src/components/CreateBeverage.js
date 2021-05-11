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

    state = {
        name: '',
        base: '',
        creamer: '',
        addins: [],
        iced: false,
        vegan: false,
        description: '',
    }

    setBase = (base)=>{
        this.setState({
            base
        })
    }

    setCreamer = (creamer)=>{
        this.setState({
            creamer
        })
    }

    setAddins = (addins)=>{
        if (!this.state.addins.some(element => element === addins)){
            this.setState({
                addins: [...this.state.addins, addins]
            })
        }
    }

    render(){
        let base = this.props.ingredients.filter(ingredient => ingredient.type === 'coffee' || ingredient.type === 'tea' )
        let creamer = this.props.ingredients.filter(ingredient => ingredient.type === 'cream')
        let addins = this.props.ingredients.filter(ingredient => ingredient.type === 'addin')

        console.log(base)
        return(
           <Router>
               <Switch>
                    <Route exact path="/createbev/base">
                        <BeverageBase base={base} setBase={this.setBase} />
                    </Route>
                    <Route exact path="/createbev/creamer" >
                        <Creamer creamer={creamer} setCreamer={this.setCreamer} />
                    </Route>
                    <Route exact path="/createbev/addins" >
                        <Addin addins={addins} setAddins={this.setAddins} />
                    </Route>
                    <Route exact path="/createbev/review" >
                        <BeverageReview />
                    </Route>
               </Switch>
           </Router>
        )
    }
}