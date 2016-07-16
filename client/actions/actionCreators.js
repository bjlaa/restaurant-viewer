// increment
export function addNote(note) {
	return {
		type: 'UPDATE_NOTE',
		note
	}
}

// add comment
export function addComment(postId, author, comment) {
	return {
		type: 'ADD_COMMENT',
		postId,
		author,
		comment
	}
}
// remove comment
export function removeComment(postId, i) {
	return {
		type: 'REMOVE_COMMENT',
		postId,
		i
	}
}