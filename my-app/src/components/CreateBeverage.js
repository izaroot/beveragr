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
        },() => {this.veganChecker()})
    }
    
    setAddins = (addins)=>{
        if (!this.state.addins.some(element => element === addins)){
            this.setState({
                addins: [...this.state.addins, addins]
            },() => {this.veganChecker()})
        }
    }
    veganChecker = () => {
        let array = [this.state.base, this.state.creamer, ...this.state.addins]
        let ingredientsObj = this.props.ingredients.filter(ingredient => array.includes(ingredient.name))
        if(ingredientsObj.some(ingredient => !ingredient.vegan)){
            this.setState({
                vegan: false
            })
        }else{
            this.setState({
                vegan:true
            })
        }
    }

    setName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    setDescription = (e) => {
        this.setState({
            description: e.target.value
        })
    }

    handleSubmit = ()=>{
        fetch('http://localhost:3000/beverages', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then( newBeverage => {
            this.setState({
                name: '',
                base: '',
                creamer: '',
                addins: [],
                iced: false,
                vegan: false,
                description: '',
        })})
        
    }

    render(){
        let base = this.props.ingredients.filter(ingredient => ingredient.type === 'coffee' || ingredient.type === 'tea' )
        let creamer = this.props.ingredients.filter(ingredient => ingredient.type === 'cream')
        let addins = this.props.ingredients.filter(ingredient => ingredient.type === 'addin')
        return(
           <Router>
               <Switch>
                    <Route exact path="/createbev/base">
                        <BeverageBase base={base} setBase={this.setBase} />
                    </Route>
                    <Route exact path="/createbev/creamer" >
                        <Creamer creamer={creamer} setCreamer={this.setCreamer} veganChecker={this.veganChecker} />
                    </Route>
                    <Route exact path="/createbev/addins" >
                        <Addin addins={addins} setAddins={this.setAddins} />
                    </Route>
                    <Route exact path="/createbev/review" >
                        <BeverageReview beverageCurrent={this.state} setName={this.setName} setDescription={this.setDescription} handleSubmit={this.handleSubmit} />
                    </Route>
               </Switch>
           </Router>
        )
    }
}