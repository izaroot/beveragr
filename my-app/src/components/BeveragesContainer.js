import React, {Component} from 'react'
import FilterSortSearch from './FilterSortSearch'
import BeverageCard from './BeverageCard'

export default class BeveragesContainer extends Component{

    state={
        filterText: "",
        icedFilter: false,
        hotFilter: false,
        veganFilter: false,
        favoriteFilter: false
    }

    handleFilter = (event) => {
        this.setState({
            filterText: event.target.value
        })
    }

    handleIcedFilter = () => {
        this.setState({
            icedFilter: !this.state.icedFilter,
            hotFilter: false
        })
    }

    handleHotFilter = () => {
        this.setState({
            icedFilter: false,
            hotFilter:  !this.state.hotFilter
        })
    }

    handleVeganFilter = () => {
        this.setState({
            veganFilter: !this.state.veganFilter
        })
    }

    handleFavFilter = () => {
        this.setState({
            favoriteFilter: !this.state.favoriteFilter
        })
    }

    render(){
        const typeFilter = this.props.beverages.filter(beverage => beverage.baseType.includes(this.state.filterText))
        const icedFilter = typeFilter.filter(beverage => this.state.icedFilter ? beverage.iced === this.state.icedFilter : beverage)
        const hotFilter = icedFilter.filter(beverage => this.state.hotFilter ? beverage.iced !== this.state.hotFilter : beverage)
        const veganFilter = hotFilter.filter(beverage => this.state.veganFilter ? beverage.vegan === this.state.veganFilter : beverage)
        const favFilter = this.state.favoriteFilter ?  veganFilter.filter(beverage => this.props.user.favorites.includes(beverage.id) ) : veganFilter
        return(
            <div>
                <FilterSortSearch favorites={this.props.user.favorites} handleFavFilter={this.handleFavFilter} handleFilter={this.handleFilter} filterState={this.state} handleHotFilter={this.handleHotFilter} handleIcedFilter={this.handleIcedFilter} handleVeganFilter={this.handleVeganFilter} />            
                <div className="ui grid cards centered columns three">
                {favFilter.map(beverage => <BeverageCard beverage={beverage} favorites={this.props.user.favorites} handleFavButton={this.props.handleFavButton} /> )}
                </div>
            </div>
        )
    }
}