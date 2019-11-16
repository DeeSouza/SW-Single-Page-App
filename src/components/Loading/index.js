import React from 'react';
import logo from '../../assets/bb8-star-wars.svg';

import { Container } from './styles';

export default function Loading() {
	return (
		<Container>
			<img src={logo} alt="Loading" />
			<div>You don’t know the power of the dark side.</div>
		</Container>
	);
}
