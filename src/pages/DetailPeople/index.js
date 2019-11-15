import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import HeaderDetail from '../../components/HeaderDetail';
import Starship from '../../components/Starship';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

import { Container, Details, Starships, WrapperStarships } from './styles';
import SWApi from '../../services/api';

export default function DetailPeople({ location }) {
	const { people } = location.state;
	const [starships, setStarships] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const all_starships = [];

	useEffect(() => {
		(async function getSWStarshipPeople() {
			try {
				setLoading(true);

				const requests = people.starships.map(p => {
					return SWApi.get(p.replace('https://swapi.co/api/', ''));
				});

				const responses = await axios.all(requests);
				responses.map(response => all_starships.push(response.data));

				setStarships([...starships, ...all_starships]);
				setLoading(false);
			} catch (e) {
				setLoading(false);
				setError(true);
			} finally {
				setLoading(false);
			}
		})();
	}, []);

	return (
		<Container>
			<HeaderDetail />

			<Details>
				<h1>{people.name}</h1>
				<h3>{people.birth_year}</h3>
			</Details>

			<WrapperStarships>
				<h2>Starships</h2>

				{loading ? (
					<Loading />
				) : error ? (
					<Error />
				) : (
					<Starships>
						{starships.map(ship => (
							<Starship key={ship.created} item={ship} />
						))}
					</Starships>
				)}
			</WrapperStarships>
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
