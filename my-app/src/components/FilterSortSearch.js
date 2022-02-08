import React, {Component} from 'react'
import icecube from '../assets/icecube.svg'
import notIced from '../assets/not_iced.svg'
import hot from '../assets/hot.svg'
import notHot from '../assets/not_hot.svg'
import vegan from '../assets/vegan.svg'
import notVegan from '../assets/not_vegan.svg'
import onStar from '../assets/on_star.svg'
import offStar from '../assets/off_star.svg'

export default class FilterSortSearch extends Component{

    render(){
        return(
            <div className="ui grid centered" style={{"margin": "20px 0px"}}>
                <select onChange={(e) =>this.props.handleFilter(e)}>
                    <option value="">All</option>
                    <option value="coffee">Coffee</option>
                    <option value="tea">Tea</option>
                </select>
                <img className="ui image tiny" src={this.props.filterState.icedFilter ? icecube : notIced} onClick={this.props.handleIcedFilter} />
                <img className="ui image tiny" src={this.props.filterState.hotFilter ? hot : notHot} onClick={this.props.handleHotFilter} />
                <img className="ui image tiny" src={this.props.filterState.veganFilter ? vegan : notVegan} onClick={this.props.handleVeganFilter} />
                {this.props.favorites ? <img className="ui image tiny" src={this.props.filterState.favoriteFilter ? onStar : offStar} 
                onClick={this.props.handleFavFilter} /> : null
                }
            </div>
        )
    }
}