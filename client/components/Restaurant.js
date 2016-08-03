import React from 'react';
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
				<div className='restaurant-snippet'>
					<img className='restaurant-photo' src={restaurant.img} alt={restaurant.alt}/>
					<div className='restaurant-text'>
						<h2 className='restaurant-title'>{restaurant.title}</h2>
						<p className='restaurant-desc'>{restaurant.address}</p>
						<p className='restaurant-desc'>{restaurant.hours}</p>
						<p className='restaurant-desc'>{restaurant.desc}</p>						
					</div>					
				</div>

				<Reviews restaurantReviews={restaurantReviews} {...this.props}/>
				<Comments restaurantComments={restaurantComments} {...this.props}/>
			</div>
		)
	}
});

export default Restaurant;