import React from 'react';

const Filter = React.createClass({
	render() {
		return(
			<section className='filter-restaurants' >
				<h2 className='filter-title'>Filters:</h2>
				<div className='filter-field' >
					<label htmlFor="filter-food">Food: </label>
					<select id='filter-food' name="filter-food">
						<option value="burgers">Burgers</option>
						<option value="burritos">Burritos</option>
						<option value="soups">Soups</option>
					</select>
				</div>
				<div className='filter-field' >
					<label htmlFor="filter-city">City: </label>
					<select id='filter-city' name="filter-city">
						<option value="Orlando">Orlando</option>
						<option value="Atlanta">Atlanta</option>
						<option value="St. Louis">St. Louis</option>
					</select>
				</div>
			</section>
		)
	}
});

export default Filter;