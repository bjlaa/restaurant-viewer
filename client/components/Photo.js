import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Photo = React.createClass({
	render() {
		const { restaurant, i, comments } = this.props;
		return (
			<figure>
				<div>
					<Link to={`/view/${restaurant.code}`} >
						<img src={restaurant.img} alt={restaurant.title}/>
					</Link>
						<span key={restaurant.title} >{restaurant.title}</span>

				</div>
				<figcaption>
					<p>{restaurant.title}</p>
					<div className=''>
						<button className='rating'>
							<div onClick={this.props.addNote.bind(null, i, 1)} className='star1'>&#9734;</div>
							<div onClick={this.props.addNote.bind(null, i, 2)} className='star2'>&#9734;</div>
							<div onClick={this.props.addNote.bind(null, i, 3)} className='star3'>&#9734;</div>
							<div onClick={this.props.addNote.bind(null, i, 4)} className='star4'>&#9734;</div>
							<div onClick={this.props.addNote.bind(null, i, 5)} className='star5'>&#9734;</div>							
						</button>
						<Link to={`/view/${restaurant.code}`}>
							<span className='comments-count'>
								<span className='speech-bubble' ></span>
								{comments[restaurant.code] ? comments[restaurant.code].length : 0}
							</span>
						</Link>
					</div>
				</figcaption>
			</figure>
		)
	}
});

export default Photo;