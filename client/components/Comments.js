import React from 'react';

const Comments = React.createClass({
	renderComment(comment, i) {
		<div key={i}>
			<p>
				<strong>{comment.user}</strong>
				{comment.text}
				<button>&times;</button>
			</p>
		</div>
	},
	render() {
		return(
			<div>
				{this.props.postComments.map(this.renderComment)}
				<form ref='commentForm'action="">
					<input type="text" ref='author' placeholder='author'/>
					<input type="text" ref='comment' placeholder='comment'/>
					<input type="submit" hidden/>
				</form>
			</div>
		)
	}
});

export default Comments;