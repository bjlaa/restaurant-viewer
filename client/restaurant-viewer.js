import React from 'react';
import { render } from 'react-dom';

// Import CSS
import css from './styles/style.scss';

// Import Components
import Main from './components/Main';
import List from './components/List';
import Restaurant from './components/Restaurant';

// Import React router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
	<Router history={browserHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={List} ></IndexRoute>
			<Route path='/view/:restaurantId' component={Restaurant}></Route>
		</Route>
	</Router>
);

render(router, document.getElementById('root'));

