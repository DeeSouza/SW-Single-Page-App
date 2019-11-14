import React from 'react';

import { Container } from './styles';
import Menu from '../Menu';

import logo from '../../assets/logo-star-wars.svg';

export default function Header() {
	return (
		<Container>
			<Menu />

			<img src={logo} alt="Star Wars" />
		</Container>
	);
}
