import React, {Component} from 'react'
import {Link} from "react-router-dom";
import {TextArea, Label, Form, Button} from 'semantic-ui-react'


export default class Creamer extends Component{
    render(){
        return(
            <div>
               I am Review
               <div>Base: {this.props.beverageCurrent.base}</div><br/>
               <div>Creamer: {this.props.beverageCurrent.creamer}</div><br/>
               <div>Addins: {this.props.beverageCurrent.addins.join(', ')} </div><br/>
               <label>Name: <input onChange={(e)=> this.props.setName(e)} type='text' value={this.props.beverageCurrent.name} placeholder='Name your beverage'></input></label><br/>
               <Form><TextArea onChange={(e)=> this.props.setDescription(e)} placeholder='Describe your beverage' value={this.props.beverageCurrent.description}></TextArea></Form><br/>
               <Link to="/createbev/base">Back to Base</Link>
               <Link to="/createbev/creamer">Back to Creamer</Link>
               <Link to="/createbev/addins">Back to Addins</Link>
              <button onClick={this.props.handleSubmit}>Submit</button>
           </div>
        )
    }
}