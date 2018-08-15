import React from 'react';
import NavBar from './NavBar.jsx';

const Container = (props) =>
<div>
	<NavBar />
	{props.children}
</div>;

export default Container;
