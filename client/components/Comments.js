import React from 'react';

const Comments = React.createClass({
	renderComment(comment, i) {
		return (
			<div key={i} className='comment-unit'>
					<strong className='comment-unit-author'>{comment.user}</strong>
					<button 
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
			<div className='comments-container'>
				<p className='comments-container-title'>Comments:</p>
				{this.props.restaurantComments.map(this.renderComment)}

				<form className='comment-form' onSubmit={this.handleSubmit} ref='commentForm' action="">
					<p className='comment-form-message'>Post your own comment:</p>
					<input className='comment-form-author' type="text" ref='author' placeholder='author'/>
					<input className='comment-form-text' type="text" ref='comment' placeholder='comment'/>
					<input type="submit" hidden/>
				</form>
			</div>
		)
	}
});

export default Comments;