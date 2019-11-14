import React from 'react';
import logo from '../../assets/r2d2-star-wars.svg';

import { Container } from './styles';

export default function Error() {
	return (
		<Container>
			<img src={logo} alt="Loading" />
		</Container>
	);
}
