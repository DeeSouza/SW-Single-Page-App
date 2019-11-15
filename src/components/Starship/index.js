import React from 'react';
import PropTypes from 'prop-types';

import { Container, ImageCover } from './styles';

export default function Starship({ item }) {
	return (
		<Container>
			<ImageCover
				image={`https://picsum.photos/300/150?random=${item.created}`}
			>
				<div className="info">
					<strong>{item.name}</strong>
					<small>{item.model}</small>
				</div>
			</ImageCover>
		</Container>
	)
}