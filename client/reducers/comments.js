function postComments(state = [], action) {
	switch(action.type) {
		case 'ADD_COMMENT':
			// return existing state with the new comment
			return [...state, {
				user: action.author,
				text: action.comment
			}];
		case 'REMOVE_COMMENT':
			return state;
		default:
			return state;
	}
	return state;
}
function comments(state = [], action) {
	console.log('post comment');
	if(typeof action.restaurantId !== 'undefined') {
		return {
			// take the current state
			...state,
			// overwrite this post with the new one
			[action.restaurantId]: postComments(state[action.restaurantId], action)
		}
	}
	return state;
}

export default comments;