import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import DetailPeople from './pages/DetailPeople';

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/people" component={DetailPeople} />
			</Switch>
		</BrowserRouter>
	);
}
