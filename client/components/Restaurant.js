import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Restaurant = React.createClass({
	render() {

		const { restaurantId } = this.props.params
		
		const i = this.props.restaurants.findIndex((restaurant) => restaurant.code === 
							restaurantId);

		const restaurant = this.props.restaurants[i];
		console.log(i, restaurant);
		
		const restaurantComments = this.props.comments[restaurantId] || [];

		return (
			<div>
				<Photo i={i} restaurant={restaurant} {...this.props}/>
				<Comments restaurantComments={restaurantComments} />
			</div>
		)
	}
});

export default Restaurant;