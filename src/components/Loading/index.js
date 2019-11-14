import React from 'react';
import logo from '../../assets/bb8-star-wars.svg';

import { Container } from './styles';

export default function Loading() {
	return (
		<Container>
			<img src={logo} alt="Loading" />
		</Container>
	);
}
