import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home.jsx';
import Counter from './Counter.jsx';
import NotFound from './NotFound.jsx';
import Address from './Address.jsx';
import Container from "./Container.jsx";
import ZipCodeForm from './ZipCodeForm.jsx';


const Routes = () => {
	return (
		<div>
			<Route path='/' component={Container}/>
			<Switch>
				<Route exact path='/counter' component={Counter}/>
				<Route exact path='/' component={Home}/>
				<Route exact path='/address' component={Address}/>
				<Route exact path='/zipcode' component={ZipCodeForm}/>
				<Route component={NotFound}/>
			</Switch>
		</div>
)
};

export default Routes;
