import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import restaurants from './restaurants';
import comments from './comments';
import reviews  from './reviews';

const rootReducer = combineReducers({restaurants, comments, reviews, routing: routerReducer});

export default rootReducer;