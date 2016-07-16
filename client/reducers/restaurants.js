// a reducer takes in two things

//1. the action (info about what happened)
//2. copy of the current state

export default function restaurants(state = [], action) {
	console.log(action);
	switch(action.type) {
		case 'UPDATE_NOTE':
		// return the updated state
			const i = action.index;
			return [
				...state.slice(0, i), // before the one updating
				{...state[i], note: action.note},
				...state.slice(i+1), //after the one updating
			]
		default:
			return state;
	}
	
}