import React, {Component} from 'react'


export default class IngredientCard extends Component{

  
  render(){
    
    const ingredient = this.props.ingredient
    
      // switch(ingredient.type){
      //   case
    
      // }
      return(

      <div className="ui card">
          <div className="ui small centered image">
                  {/* <img src={imageMap[`${this.props.beverage.baseType}`]}/> */}
          </div>
          <div className="content">
                  <div className="header">{ingredient.name}</div>
                  <div className="meta">{ingredient.description},{ingredient.type}</div>
          </div>              
      </div>

      )
  }
}