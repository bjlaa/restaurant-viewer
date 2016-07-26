import React from 'react';

import Photo from './Photo';
import Filter from './Filter';

const List = React.createClass({
	filterRestaurants(food, city) {
		console.log(food, city);
	},
	render() {
		return (
			<div className='restaurant-list'>
				<Filter filterRestaurants={this.filterRestaurants} />
				{this.props.restaurants.map(
					(restaurant, i) => <Photo {...this.props} 
															key={i} 
															i={i} 
															restaurant={restaurant}/>)
				}
			</div>
		)
	}
});

export default List;