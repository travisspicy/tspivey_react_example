import React from 'react';
import { Link } from 'react-router-dom';
import Home from './Home.jsx';

const NavBar = () => {
	return (

			<div>
				<ul>
					<li><Link to='/'>Home</Link></li>
					<li><Link to='/address'>Address</Link></li>
					<li><Link to='/counter'>Counter</Link></li>
					<li><Link to='/zipcode'>Zip Code Form</Link></li>
				</ul>
			<hr />
			</div>

	)
};

export default NavBar;
