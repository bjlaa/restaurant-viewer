import React from 'react';
import Moment from 'moment';

const Reviews = React.createClass({
	renderReviews(review, i) {
		return (
			<div key={i} className='review'>
			  <div className='review-date' >{review.date}</div>
				<div className='review-author'>{review.author}:</div>
				<div aria-label='Rating'className='review-rating'>{review.rating}</div>
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
		Moment().locale();
		const date = Moment().format('l');
		console.log(date);
		this.props.addReview(restaurantId, author, rating, text, date);


		this.refs.author.value = '';
		this.refs.rating.value = '5';
		this.refs.text.value = '';
	},
	render() {
		return(
			<section className='reviews'>
				<h3 className='reviews-title'>Restaurant reviews:</h3>
				{this.props.restaurantReviews.map(this.renderReviews)}
				<form className='reviews-form' onSubmit={this.handleSubmit} ref='reviewForm'>
					<h4 className='reviews-form-message'>Post your own review:</h4>
					<div className='reviews-form-field' >
						<label htmlFor="reviews-form-author">Author:</label>
						<input 
						id='reviews-form-author'
						className='reviews-form-author' 
						type="text" ref='author' 
						placeholder='author'
						/>
					</div>
					<div className='reviews-form-field' >
						<label htmlFor="reviews-form-rating">Rating:</label>
						<select
						className='reviews-form-rating'
						id="reviews-form-rating"
						name='rating'
						ref='rating'
						defaultValue='5'
						>
							<option aria-label='one star' value="☆">☆</option>
							<option aria-label='two stars' value="☆☆">☆☆</option>
							<option aria-label='three stars' value="☆☆☆">☆☆☆</option>
							<option aria-label='four stars' value="☆☆☆☆">☆☆☆☆</option>
							<option aria-label='five stars' value="☆☆☆☆☆">☆☆☆☆☆</option>
						</select>
					</div>
					<div className='reviews-form-field' >
						<label htmlFor="reviews-form-textcomment">Text:</label>
						<textarea 
						name="reviews-form-textcomment" 
						id='reviews-form-textcomment'
						className='reviews-form-text'  
						ref='text' 
						placeholder='text'						 
						cols="30" 
						rows="10"
						></textarea>
					</div>
					<div className='reviews-form-field'>
						<input type="submit" value='Submit'/>
					</div>
					
				</form>				
			</section>

		)
	}
});

export default Reviews;