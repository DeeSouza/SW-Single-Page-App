import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import HeaderDetail from '../../components/HeaderDetail';
import Starship from '../../components/Starship';

import { Container, Details, Starships } from './styles';
import SWApi from '../../services/api';

export default function DetailPeople({ location }) {
	const { people } = location.state;
	const [starships, setStarships] = useState([]);
	const all_starships = [];

	useEffect(() => {
		(async function getSWStarshipPeople() {
			const requests = people.starships.map(p => {
				return SWApi.get(p.replace('https://swapi.co/api/', ''));
			});

			const responses = await axios.all(requests);
			responses.map(response => all_starships.push(response.data));

			setStarships([...starships, ...all_starships]);
		})();
	}, []);

	return (
		<Container>
			<HeaderDetail />

			<Details>
				<h1>{people.name}</h1>
				<h3>{people.birth_year}</h3>
			</Details>

			<Starships>
				<h2>Starships</h2>
				{starships.map(ship => (
					<Starship key={ship.created} item={ship} />
				))}
			</Starships>
		</Container>
	);
}

DetailPeople.propTypes = {
	location: PropTypes.shape({
		state: PropTypes.shape({
			people: PropTypes.shape({
				name: PropTypes.string,
				birth_year: PropTypes.string,
				starships: PropTypes.array,
			}),
		}),
	}).isRequired,
};
