import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function HeaderDetail({ item }) {
	const id = useMemo(() => item.url.match(/\d+/g)[0], [item.url]);

	return <Container id={id} />;
}

HeaderDetail.propTypes = {
	item: PropTypes.shape({
		url: PropTypes.string,
	}).isRequired,
};
