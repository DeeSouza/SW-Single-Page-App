import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaJedi } from 'react-icons/fa';

import { Container, ImageCover, DetailPeople } from './styles';

export default function People({ item }) {
	return (
		<Container>
			<ImageCover
				image={`https://picsum.photos/300/150?grayscale&random=${item.created}`}
			/>

			<div className="main">
				<DetailPeople>
					<Link to="/">
						<FaJedi size={26} color="#FFF" />
					</Link>
				</DetailPeople>

				<strong>{item.name}</strong>

				<div className="footer">
					<div>
						<strong>Hair Color</strong>
						<span>{item.hair_color}</span>
					</div>
					<div>
						<strong>Skin Color</strong>
						<span>{item.skin_color}</span>
					</div>
					<div>
						<strong>Eyes Color</strong>
						<span>{item.eye_color}</span>
					</div>
				</div>
			</div>
			
		</Container>
	);
}

People.propTypes = {
	item: PropTypes.shape({
		name: PropTypes.string,
		hair_color: PropTypes.string,
		skin_color: PropTypes.string,
		eye_color: PropTypes.string,
		created: PropTypes.string,
	}).isRequired,
};
