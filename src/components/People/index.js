import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';

import { Container, ImageCover, DetailPeople } from './styles';

export default function People({ item }) {
	return (
		<Container>
			<ImageCover
				image={`https://picsum.photos/300/150?grayscale&random=${item.created}`}
			/>

			<div className="main">
				<DetailPeople>
					<Link
						to={{
							pathname: '/people',
							state: {
								people: item,
							},
						}}
					>
						<FaArrowRight size={26} color="#FFF" />
					</Link>
				</DetailPeople>

				<strong>{item.name}</strong>

				<div className="footer">
					<div>
						<strong>Birth Year</strong>
						<span>{item.birth_year}</span>
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
		birth_year: PropTypes.string,
	}).isRequired,
};
