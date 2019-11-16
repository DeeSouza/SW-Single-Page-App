import React from 'react';
import PropTypes from 'prop-types';

import { Container, Line } from './styles';

export default function LineData({ children, item }) {
	return (
		<Container>
			{children}

			<Line value={item} />
		</Container>
	);
}

LineData.propTypes = {
	item: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};
