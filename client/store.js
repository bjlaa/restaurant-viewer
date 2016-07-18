import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Import the root reducer
import rootReducer from './reducers/index';

// Import our data
import restaurants from './data/restaurants';
import comments from './data/comments';
import reviews from './data/reviews';

// create an object for the default data
const defaultState = {
	restaurants,
	comments,
	reviews
};


const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);
export default store;