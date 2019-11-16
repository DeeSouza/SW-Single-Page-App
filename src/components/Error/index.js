import React from 'react';
import logo from '../../assets/darth-vader-star-wars.svg';

import { Container } from './styles';

export default function Error() {
	return (
		<Container>
			<img src={logo} alt="Loading" />
			<div>I find your lack of faith disturbing.</div>
		</Container>
	);
}
