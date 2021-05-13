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
        baseType: '',
        base: '',
        creamer: '',
        addins: [],
        iced: false,
        vegan: true,
        description: '',
    }

    setBase = (base)=>{
        this.setState({
            base: base.name,
            baseType: base.type
        })
    }

    setIced = () => {
        this.setState({
            iced: !this.state.iced
        })
    }


    setCreamer = (creamer)=>{
        this.setState({
            creamer: creamer.name
        },() => {this.veganChecker()})
    }
    
    setAddins = (addins)=>{
        if (!this.state.addins.some(element => element === addins)){
            this.setState({
                addins: [...this.state.addins, addins.name]
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
        .then(newBeverage => {
            this.props.handleNewBeverage(newBeverage)
            this.setState({
                name: '',
                base: '',
                creamer: '',
                addins: [],
                iced: false,
                vegan: true,
                description: '',
            })
        })
        
    }

    render(){
        let base = this.props.ingredients.filter(ingredient => ingredient.type === 'coffee' || ingredient.type === 'tea' )
        let creamer = this.props.ingredients.filter(ingredient => ingredient.type === 'cream')
        let addins = this.props.ingredients.filter(ingredient => ingredient.type === 'addin')
        return(
            // <div className="ui grid cards centered columns" >
                <Router>
                    <Switch>
                            <Route exact path="/createbev/base">
                                <BeverageBase base={base} setBase={this.setBase} beverageCurrent={this.state} setIced={this.setIced}/>
                            </Route>
                            <Route exact path="/createbev/creamer" >
                                <Creamer creamer={creamer} setCreamer={this.setCreamer} beverageCurrent={this.state}/>
                            </Route>
                            <Route exact path="/createbev/addins" >
                                <Addin addins={addins} setAddins={this.setAddins} beverageCurrent={this.state}/>
                            </Route>
                            <Route exact path="/createbev/review" >
                                <BeverageReview beverageCurrent={this.state} setName={this.setName} setDescription={this.setDescription} handleSubmit={this.handleSubmit} />
                            </Route>
                    </Switch>
                </Router>
        //    </div>
        )
    }
}