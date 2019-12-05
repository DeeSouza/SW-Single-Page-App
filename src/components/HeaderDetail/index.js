import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { Container, Profile, ProfileImage } from './styles';

export default function HeaderDetail({ item }) {
	const id = useMemo(() => item.url.match(/\d+/g)[0], [item.url]);

	return (
		<Container>
			<Profile>
				<ProfileImage personid={id} />
				<div className="info">
					<h1>{item.name}</h1>
					<h3>{item.birth_year}</h3>
				</div>
			</Profile>
		</Container>
	);
}

HeaderDetail.propTypes = {
	item: PropTypes.shape({
		name: PropTypes.string,
		birth_year: PropTypes.string,
		url: PropTypes.string,
	}).isRequired,
};
