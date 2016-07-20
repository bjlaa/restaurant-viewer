import React from 'react';

const Reviews = React.createClass({
	renderReviews(review, i) {
		return (
			<div key={i} className='review'>
				<div className='author'>{review.author}</div>
				<div className='rating'>
					<p>{review.rating}</p>
				</div>
				<div className='text'>{review.text}</div>
			</div>			
		)
	},

	render() {
		return(
			<div>
				{this.props.restaurantReviews.map(this.renderReviews)}
				<form onSubmit={this.handleSubmit} ref='reviewForm'>
					<input type="text" ref='author' placeholder='author'/>
					<input type="text" ref='rating' placeholder='rating'/>
					<input type="text" ref='text' placeholder='text'/>
					<input type="submit" hidden/>
				</form>				
			</div>

		)
	}
});

export default Reviews;