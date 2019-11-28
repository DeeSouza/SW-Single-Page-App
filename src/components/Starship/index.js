import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { FaPlaceOfWorship } from 'react-icons/fa';
import { Container, ImageCover } from './styles';

export default function Starship({ item, onClick }) {
	const id = useMemo(() => item.url.match(/\d+/g)[0], [item.url]);

	return (
		<Container>
			<ImageCover
				image={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
			>
				<div className="info">
					<strong>
						<span>{item.name}</span>
						<FaPlaceOfWorship color="#FFF" size={22} />
					</strong>

					<small>{item.model}</small>
				</div>

				<button type="button" className="more-info" onClick={onClick}>
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
		url: PropTypes.string,
	}).isRequired,
	onClick: PropTypes.func.isRequired,
};
