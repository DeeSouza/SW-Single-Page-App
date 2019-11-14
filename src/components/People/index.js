import React from 'react';
import PropTypes from 'prop-types';
import { FaRegEye, FaCloudsmith, FaFillDrip } from 'react-icons/fa';

import { Container, ImageCover } from './styles';

export default function People({ item }) {
	return (
		<Container>
			<ImageCover
				image={`https://picsum.photos/300/200?grayscale?random=${item.created}`}
			/>

			<div className="main">{item.name}</div>
			<div className="footer">
				<div>
					<FaCloudsmith size={28} />
					<strong>{item.hair_color}</strong>
				</div>
				<div>
					<FaFillDrip size={28} />
					<strong>{item.skin_color}</strong>
				</div>
				<div>
					<FaRegEye size={28} />
					<strong>{item.eye_color}</strong>
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
