import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import restaurants from './restaurants';
import comments from './comments';

const rootReducer = combineReducers({restaurants, comments, routing: routerReducer});

export default rootReducer;