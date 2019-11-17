import React, { useContext } from 'react';
import { Container } from './styles';
import { MenuContext } from '../../context/MenuContext';

export default function Menu() {
	const { handleOpenMenu } = useContext(MenuContext);

	return (
		<Container onClick={handleOpenMenu}>
			<span className="lightsaber red" />
			<span className="lightsaber green" />
			<span className="lightsaber blue" />
		</Container>
	);
}
