import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MenuContext } from '../../context/MenuContext';

import { Container } from './styles';

export default function NavMenu() {
	const { open } = useContext(MenuContext);

	return (
		<Container open={open}>
			<ul>
				<li>
					<Link to="/">Persons</Link>
				</li>
				<li>
					<Link to="/">Planets</Link>
				</li>
				<li>
					<Link to="/">Starships</Link>
				</li>
				<li>
					<Link to="/">Vehicles</Link>
				</li>
			</ul>
		</Container>
	);
}
