function postComments(state = [], action) {
	switch(action.type) {
		case 'ADD_COMMENT':
			// return existing state with the new comment
			return [...state, {
				user: action.author,
				text: action.comment
			}];
		case 'REMOVE_COMMENT':
			// we need to return the state without the deleted comment
			return [
				...state.slice(0, action.i),
				...state.slice(action.i+1)
			];
		default:
			return state;
	}
	return state;
}

function comments(state = [], action) {
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