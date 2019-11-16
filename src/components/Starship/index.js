import React from 'react';
import PropTypes from 'prop-types';
import { FaPlaceOfWorship } from 'react-icons/fa';
import { Container, ImageCover } from './styles';

export default function Starship({ item }) {
	return (
		<Container>
			<ImageCover
				image={`https://picsum.photos/300/150?random=${item.created}`}
			>
				<div className="info">
					<strong>
						<span>{item.name}</span>
						<FaPlaceOfWorship color="#FFF" size={22} />
					</strong>

					<small>{item.model}</small>
				</div>

				<button type="button" className="more-info">
					More Details
				</button>
			</ImageCover>
		</Container>
	);
}

Starship.propTypes = {
	item: PropTypes.shape({
		name: PropTypes.string,
		model: PropTypes.string,
		created: PropTypes.string,
	}).isRequired,
};
