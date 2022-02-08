import React, {Component} from 'react'
import {Link} from "react-router-dom";
import {TextArea, Form, Button} from 'semantic-ui-react'
import coffee from '../assets/coffee.png'
import tea from '../assets/tea.png'
import icedcoffee from '../assets/icedcoffee.png'
import icedtea from '../assets/icedtea.png'
//import Menu from '../assets/menu.png'

const imageMap = {
    'coffee' : coffee,
    'tea': tea,
    'icedcoffee': icedcoffee,
    'icedtea': icedtea
}


export default class Creamer extends Component{
    
    render(){
        const iced = this.props.beverageCurrent.iced ? "iced" : "" 
        return(
        <div className="ui grid centered cards" style={{"margin": "20px 0px"}}>
            <div className="ui card centered" style={{"padding": "15px", "font-size": "18px"}}>
                <div className="ui tiny centered image" style={{"background-color":"#fff"}}>
                        <img alt="" src={imageMap[`${iced}${this.props.beverageCurrent.baseType}`]}/>
                </div><br/>
               <div><b>Base:</b> {this.props.beverageCurrent.base}</div><br/>
               <div><b>Creamer:</b> {this.props.beverageCurrent.creamer}</div><br/>
               <div><b>Addins:</b> {this.props.beverageCurrent.addins.join(', ')} </div><br/>
           </div>
           <div className="ui grid row centered">
            <Form>
               <label>
                   <input onChange={(e)=> this.props.setName(e)} type='text' value={this.props.beverageCurrent.name} placeholder='Name your beverage'></input>
                </label><br/><br/>
               <TextArea onChange={(e)=> this.props.setDescription(e)} placeholder='Describe your beverage' value={this.props.beverageCurrent.description}></TextArea>
            </Form><br/>
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