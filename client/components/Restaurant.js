import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Restaurant = React.createClass({
	render() {
		// index of the post
		const i = this.props.restaurants.findIndex((restaurant) => restaurant.code === 
			this.props.params.restaurantId);
		const restaurant = this.props.restaurants[i];
		console.log(i, restaurant);
		// get us the post

		return (
			<div>
				<Photo i={i} restaurant={restaurant} {...this.props}/>
				<Comments />
			</div>
		)
	}
});

export default Restaurant;