import React, {Component, Fragment} from 'react'
import FilterSortSearch from './FilterSortSearch'
import BeverageCard from './BeverageCard'

export default class BeveragesContainer extends Component{

    state={
        filterText: "",
        icedFilter: false,
        hotFilter: false,
        veganFilter: false
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
    // (beverage => this.state.filterText.includes(beverage.baseType))
    render(){
        const typeFilter = this.props.beverages.filter(beverage => beverage.baseType.includes(this.state.filterText))
        const icedFilter = typeFilter.filter(beverage => this.state.icedFilter ? beverage.iced === this.state.icedFilter : beverage)
        const hotFilter = icedFilter.filter(beverage => this.state.hotFilter ? beverage.iced === this.state.icedFilter : beverage)
        const veganFilter = hotFilter.filter(beverage => this.state.veganFilter ? beverage.vegan === this.state.veganFilter : beverage)
        console.log(hotFilter)
        return(
            <div>
                <FilterSortSearch handleFilter={this.handleFilter} filterState={this.state} handleHotFilter={this.handleHotFilter} handleIcedFilter={this.handleIcedFilter} handleVeganFilter={this.handleVeganFilter} />            
                <div className="ui grid cards centered columns three">
                {veganFilter.map(beverage => <BeverageCard beverage={beverage}/> )}
                </div>
            </div>
        )
    }
}