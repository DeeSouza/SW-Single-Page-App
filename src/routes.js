import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import DetailPeople from './pages/DetailPeople';

import Header from './components/Header';
import NavMenu from './components/NavMenu';

import { MenuContext } from './context/MenuContext';

export default function Routes() {
	const [open, setOpen] = useState(false);

	function handleOpenMenu() {
		setOpen(!open);
	}

	return (
		<BrowserRouter>
			<MenuContext.Provider
				value={{
					open,
					handleOpenMenu,
				}}
			>
				<Header />
				<NavMenu />
			</MenuContext.Provider>

			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/people" component={DetailPeople} />
			</Switch>
		</BrowserRouter>
	);
}
