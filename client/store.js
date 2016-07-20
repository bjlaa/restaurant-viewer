import { createStore, compose } from 'redux';
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

const enhancers = compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);



export const history = syncHistoryWithStore(browserHistory, store);
if(module.hot) {
	module.hot.accept('./reducers/', () => {
		const nextRootReducer = require('./reducers/index').default;
		store.replaceReducer(nextRootReducer);
	});
}
export default store;