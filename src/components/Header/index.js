import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import Menu from '../Menu';

import logo from '../../assets/logo-star-wars.svg';

export default function Header() {
	return (
		<Container>
			<Link to="/">
				<img src={logo} alt="Star Wars" />
			</Link>

			<Menu />
		</Container>
	);
}
