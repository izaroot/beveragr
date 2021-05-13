import React, {Component} from 'react'
import veganPic from '../assets/vegan.svg'


export default class IngredientCard extends Component{

  
  render(){
    
    const ingredient = this.props.ingredient
    const vegan = ingredient.vegan ? <img style={{"width": "15%"}} src={veganPic}/> : null;
      return(

      <div className="ui card" onClick={() => this.props.setIngredient(ingredient)}>
          <div className="ui small centered image">
                  {/* <img src={imageMap[`${this.props.beverage.baseType}`]}/> */}
          </div>
          <div className="content">
                  <div className="header">{ingredient.name}</div>
                  <div className="meta">{ingredient.description}</div>
                  <div className="description">{vegan}</div>
          </div>              
      </div>

      )
  }
}