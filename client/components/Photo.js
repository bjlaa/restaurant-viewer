import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Photo = React.createClass({
	render() {
		const { restaurant, i, comments } = this.props;
		return (
			<Link className='restaurant-snippet' to={`/view/${restaurant.code}`} >
				<img className='restaurant-photo' src={restaurant.img} alt={restaurant.alt}/>
				<div className='restaurant-text'>
					<p className='restaurant-title'>{restaurant.title}</p>
					<p className='restaurant-desc'>{restaurant.desc}</p>						
				</div>
			</Link>
		)
	}
});

export default Photo;