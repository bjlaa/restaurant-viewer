import React from 'react';
import ReactDOM from 'react-dom';

import Photo from './Photo';
import Filter from './Filter';

const List = React.createClass({
	filterRestaurants(food, city) {
		const photo0 = this.refs.list.children[1];
		const photo1 = this.refs.list.children[2];
		const photo2 = this.refs.list.children[3];

		/*
			Food filter
		*/
		if(food==='all' && city==='all') {
			photo0.style.display = 'initial';
			photo1.style.display = 'initial';
			photo2.style.display = 'initial';
		}
		else if(food==='burgers' && city==='all') {
			photo0.style.display = 'initial';
			photo1.style.display = 'none';
			photo2.style.display = 'none';
		}
		else if(food==='burritos' && city==='all') {
			photo0.style.display = 'none';
			photo1.style.display = 'initial';
			photo2.style.display = 'none';
		}
		else if(food==='soups' && city==='all') {
			photo0.style.display = 'none';
			photo1.style.display = 'none';
			photo2.style.display = 'initial';
		}
		/*
			City filter
		*/
		else if(food==='all' && city==='orlando') {
			photo0.style.display = 'initial';
			photo1.style.display = 'none';
			photo2.style.display = 'none';
		}
		else if(food==='all' && city==='atlanta') {
			photo0.style.display = 'none';
			photo1.style.display = 'initial';
			photo2.style.display = 'none';
		}
		else if(food==='all' && city==='stlouis') {
			photo0.style.display = 'none';
			photo1.style.display = 'none';
			photo2.style.display = 'initial';
		}
		/*
			Both filters
		*/
		else if(food!=='burgers' && city==='orlando') {
			photo0.style.display = 'none';
			photo1.style.display = 'none';
			photo2.style.display = 'none';
		}		
		else if(food!=='burritos' && city==='atlanta') {
			photo0.style.display = 'none';
			photo1.style.display = 'none';
			photo2.style.display = 'none';
		}
		else if(food!=='soups' && city==='stlouis') {
			photo0.style.display = 'none';
			photo1.style.display = 'none';
			photo2.style.display = 'none';
		}
	},

	render() {
		return (
			<div ref='list' className='restaurant-list'>
				<Filter filterRestaurants={this.filterRestaurants} />
				{this.props.restaurants.map(
					(restaurant, i) => <Photo {...this.props} 
															ref={'photo'+i}
															key={i} 
															i={i} 
															restaurant={restaurant}/>)
				}
			</div>
		)
	}
});

export default List;