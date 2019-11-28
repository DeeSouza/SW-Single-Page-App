import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';

import { Container, ImageCover, GoDetail } from './styles';

export default function People({ item }) {
	const id = useMemo(() => item.url.match(/\d+/g)[0], [item.url]);

	return (
		<Container>
			<ImageCover
				image={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
			/>

			<div className="main">
				<GoDetail>
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
				</GoDetail>

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
		url: PropTypes.string,
	}).isRequired,
};
