import React, { useState, useEffect }  from 'react';

import HeaderDetail from '../../components/HeaderDetail';
import Starship from '../../components/Starship';

import { Container, Details, Starships } from './styles';
import SWApi from '../../services/api';
import axios from 'axios';

export default function DetailPeople({ location }) {
	const { people } = location.state;
	const [starships, setStarships] = useState([]);

	useEffect(
		() => {
			(async function getSWStarshipPeople() {
				const requests = people.starships.map(p => {
					return SWApi.get(p.replace('https://swapi.co/api/', ''));
				});

				const responses = await axios.all(requests);

				responses.map(response => {
					setStarships(starships => [
						...starships,
						response.data
					]);
				})
			})();
		}, []
	);

	return (
		<Container>
			<HeaderDetail />

			<Details>
				<h1>{people.name}</h1>
				<h3>{people.birth_year}</h3>
			</Details>


			<Starships>
				<h2>Starships</h2>
				{starships.map(ship => <Starship key={ship.created} item={ship} />)}
			</Starships>
		</Container>
	)
}