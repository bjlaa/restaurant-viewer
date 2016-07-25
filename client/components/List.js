import React from 'react';

import Photo from './Photo';
import Filter from './Filter';

const List = React.createClass({
	render() {
		return (
			<div className='restaurant-list'>
				<Filter />
				{this.props.restaurants.map(
					(restaurant, i) => <Photo {...this.props} 
															key={i} 
															i={i} 
															restaurant={restaurant}/>)
				}
			</div>
		)
	}
});

export default List;