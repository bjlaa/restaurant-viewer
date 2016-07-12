import React from 'react';
import { render } from 'react-dom';

// Import CSS
import css from './styles/style.scss';

// Import Components
import App from './components/App';
import List from './components/List';
import Restaurant from './components/Restaurant';

// Import React router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';


const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path='/' component={App}>
				<IndexRoute component={List} ></IndexRoute>
				<Route path='/view/:restaurantId' component={Restaurant}></Route>
			</Route>
		</Router>		
	</Provider>

);

render(router, document.getElementById('root'));

