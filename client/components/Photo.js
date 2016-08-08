import React from 'react';
import { Link } from 'react-router';

const Photo = React.createClass({

	render() {
		const { restaurant, i, comments } = this.props;
		return (
			<Link aria-labelledby={'restaurant'+ restaurant.id} role='article'className='restaurant-snippet' to={`/view/${restaurant.code}`} >
				<img className='restaurant-photo' src={restaurant.img} alt={restaurant.alt}/>
				<div className='restaurant-text'>
					<h2 id={'restaurant'+ restaurant.id} className='restaurant-title'>{restaurant.title}</h2>
					<p className='restaurant-desc'>{restaurant.address}</p>
					<p className='restaurant-desc'>{restaurant.hours}</p>
					<p className='restaurant-desc'>{restaurant.desc}</p>						
				</div>
			</Link>
		)
	}
});

export default Photo;