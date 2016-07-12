// a reducer takes in two things

//1. the action (info about what happened)
//2. copy of the current state

export default function restaurants(state = [], action) {
	console.log('the restaurant will change');
	console.log(state, action);
	return state;
}