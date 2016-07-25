import React from 'react';

const Reviews = React.createClass({
	renderReviews(review, i) {
		return (
			<div key={i} className='review'>
				<div className='review-author'>{review.author}:</div>
				<div className='review-rating'>{review.rating}/5</div>
				<div className='review-text'>{review.text}</div>
			</div>			
		)
	},
	handleSubmit(event) {
		event.preventDefault();
		const { restaurantId } = this.props.params;
		const author = this.refs.author.value;
		const rating = this.refs.rating.value;
		const text = this.refs.text.value;
		this.props.addReview(restaurantId, author, rating, text);


		this.refs.author.value = '';
		this.refs.rating.value = '';
		this.refs.text.value = '';
	},
	render() {
		return(
			<div className='reviews'>
				<p className='reviews-title'>Restaurant reviews:</p>
				{this.props.restaurantReviews.map(this.renderReviews)}
				<form className='reviews-form' onSubmit={this.handleSubmit} ref='reviewForm'>
					<p className='reviews-form-message'>Post your own review:</p>
					<input className='reviews-form-author' type="text" ref='author' placeholder='author'/>
					<input className='reviews-form-rating' type="text" ref='rating' placeholder='rating'/>
					<input className='reviews-form-text' type="text" ref='text' placeholder='text'/>
					<input type="submit" hidden/>
				</form>				
			</div>

		)
	}
});

export default Reviews;