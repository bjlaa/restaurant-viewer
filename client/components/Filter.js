import React from 'react';

const Filter = React.createClass({
	handleChange() {
		const food = this.refs.filterFood.value;
		const city = this.refs.filterCity.value;
		this.props.filterRestaurants.bind(null,food, city)();
	},
	render() {
		return(
			<section className='filter-restaurants' >
				<h2 className='filter-title'>Filters:</h2>
				<div className='filter-food-field' >
					<label htmlFor="filter-food">Food: </label>
					<select 
					ref='filterFood'
					defaultValue='all' 
					onChange={this.handleChange} 
					id='filter-food' 
					name="filter-food"
					>
						<option value="all">All</option>
						<option value="burgers">Burgers</option>
						<option value="burritos">Burritos</option>
						<option value="soups">Soups</option>
					</select>
				</div>
				<div className='filter-city-field' >
					<label htmlFor="filter-city">City: </label>
					<select  
					ref='filterCity'
					defaultValue='all'
					onChange={this.handleChange}
					id='filter-city' 
					name="filter-city"
					>
						<option value="all">All</option>
						<option value="orlando">Orlando</option>
						<option value="atlanta">Atlanta</option>
						<option value="stlouis">St. Louis</option>
					</select>
				</div>
			</section>
		)
	}
});

export default Filter;