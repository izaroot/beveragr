import React, {Component} from 'react'
import {Link} from "react-router-dom";
import {TextArea, Label, Form, Button} from 'semantic-ui-react'


export default class Creamer extends Component{
    render(){
        return(
        <div className="ui grid centered columns">
            <div className="ui grid row cards centered">
               <div>Base: {this.props.beverageCurrent.base}</div><br/>
               <div>Creamer: {this.props.beverageCurrent.creamer}</div><br/>
               <div>Addins: {this.props.beverageCurrent.addins.join(', ')} </div><br/>
           </div>
           <div className="ui grid row centered">
               <label><input onChange={(e)=> this.props.setName(e)} type='text' value={this.props.beverageCurrent.name} placeholder='Name your beverage'></input></label><br/>
               <Form><TextArea onChange={(e)=> this.props.setDescription(e)} placeholder='Describe your beverage' value={this.props.beverageCurrent.description}></TextArea></Form><br/>
              <Button onClick={this.props.handleSubmit}>Submit</Button>
           </div>
           <div className="ui grid row centered">
               <Link to="/createbev/base"><Button>Change Base</Button></Link>
               <Link to="/createbev/creamer"><Button>Change Creamer</Button></Link>
               <Link to="/createbev/addins"><Button>Add Addins</Button></Link>
            </div>
        </div>
        )
    }
}