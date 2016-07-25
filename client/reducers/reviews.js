function postReview(state = [], action) {
	switch(action.type) {
		case 'ADD_REVIEW':
			// return existing state with the new comment
			return [...state, {
				author: action.author,
				rating: action.rating,
				text: action.text
			}];
		default:
			return state;
	}
	return state;
}
function reviews(state = [], action) {
	if(typeof action.restaurantId !== 'undefined') {
		return {
			// take the current state
			...state,
			// overwrite this post with the new one
			[action.restaurantId]: postReview(state[action.restaurantId], action)
		}
	}
	return state;
}

export default reviews;