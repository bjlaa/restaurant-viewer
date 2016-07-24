import React from 'react';
import Photo from './Photo';
import Comments from './Comments';
import Reviews from './Reviews';

const Restaurant = React.createClass({
	render() {

		const { restaurantId } = this.props.params
		
		const i = this.props.restaurants.findIndex((restaurant) => restaurant.code === 
							restaurantId);

		const restaurant = this.props.restaurants[i];
		
		const restaurantComments = this.props.comments[restaurantId] || [];
		const restaurantReviews = this.props.reviews[restaurantId] || [];

		return (
			<div className='restaurant-details'>
				<Photo i={i} restaurant={restaurant} {...this.props}/>
				<Reviews restaurantReviews={restaurantReviews} {...this.props}/>
				<Comments restaurantComments={restaurantComments} {...this.props}/>
			</div>
		)
	}
});

export default Restaurant;