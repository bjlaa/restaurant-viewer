// increment
export function addNote(index, note) {
	return {
		type: 'UPDATE_NOTE',
		index,
		note
	}
}

// add comment
export function addComment(restaurantId, author, comment) {
	console.log("dispatching add comment");
	return {
		type: 'ADD_COMMENT',
		restaurantId,
		author,
		comment
	}
}
// remove comment
export function removeComment(restaurantId, i) {
	return {
		type: 'REMOVE_COMMENT',
		restaurantId,
		i
	}
}