import React from 'react';

const Comments = React.createClass({
	renderComment(comment, i) {
		return (
			<div key={i}>
				<p>
					<strong>{comment.user}</strong>
					{comment.text}
					<button onClick={this.props.removeComment.bind(null, this.props.params.restaurantId, i)}>&times;</button>
				</p>
			</div>			
		);
	},
	handleSubmit(event) {
		event.preventDefault();
		const { restaurantId } = this.props.params;
		const author = this.refs.author.value;
		const comment = this.refs.comment.value;
		this.props.addComment(restaurantId, author, comment);
	},
	render() {
		return(
			<div>
				{this.props.restaurantComments.map(this.renderComment)}
				<form onSubmit={this.handleSubmit} ref='commentForm' action="">
					<input type="text" ref='author' placeholder='author'/>
					<input type="text" ref='comment' placeholder='comment'/>
					<input type="submit" hidden/>
				</form>
			</div>
		)
	}
});

export default Comments;