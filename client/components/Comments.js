import React from 'react';

const Comments = React.createClass({
	renderComment(comment, i) {
		return (
			<div key={i} className='comment-unit'>
					<strong className='comment-unit-author'>{comment.user}</strong>
					<button 
					aria-label='delete'
					className='comment-unit-btn-delete'
					onClick={this.props.removeComment.bind(null, this.props.params.restaurantId, i)}
					>&times;</button>
					<p className='comment-unit-text'>{comment.text}</p>
			</div>			
		);
	},
	handleSubmit(event) {
		event.preventDefault();
		const { restaurantId } = this.props.params;
		const author = this.refs.author.value;
		const comment = this.refs.comment.value;
		this.props.addComment(restaurantId, author, comment);


		this.refs.author.value = '';
		this.refs.comment.value = '';
	},
	render() {
		return(
			<section className='comments-container'>
				<h3 className='comments-container-title'>Comments:</h3>
				{this.props.restaurantComments.map(this.renderComment)}

				<form className='comment-form' onSubmit={this.handleSubmit} ref='commentForm' action="">
					<h4 className='comment-form-message'>Post your own comment:</h4>
					<div className='comment-form-field'>
						<label htmlFor="comment-form-author">Author:</label>
						<input 
						id='comment-form-author'
						className='comment-form-author' 
						type="text" 
						ref='author' 
						placeholder='author'
						/>
					</div>
					<div className='comment-form-field'>
					<label htmlFor="comment-form-text">Text:</label>
						<textarea 
						id='comment-form-text'
						className='comment-form-text'
						name="comment" 
						placeholder='comment'
						ref='comment'
						id="" 
						cols="30" 
						rows="10"
						></textarea>
					</div>
					
					<input type="submit" value='Submit'/>
				</form>
			</section>
		)
	}
});

export default Comments;