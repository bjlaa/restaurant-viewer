import React from 'react';
import { Link } from 'react-router';


const Main = React.createClass({
	render() {
		return (
			<div>
				<header>
					<h1 className='title-app'>
						<Link to='/'>Restaurant Viewer</Link>
					</h1>					
				</header>
				<main>
					{React.cloneElement(this.props.children, this.props)}					
				</main>
			</div>
		)
	}
});

export default Main;