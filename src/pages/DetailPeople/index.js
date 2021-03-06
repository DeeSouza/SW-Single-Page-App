import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import HeaderDetail from '../../components/HeaderDetail';
import Starship from '../../components/Starship';
import DetailStarship from '../../components/DetailStarship';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

import {
	Container,
	Details,
	Starships,
	WrapperStarships,
	Info,
	Profile,
	ProfileImage,
} from './styles';
import SWApi from '../../services/api';
import nothing from '../../assets/c3po-star-wars.svg';

export default function DetailPeople({ location }) {
	const { people } = location.state;
	const [starships, setStarships] = useState([]);
	const [starship, setStarship] = useState({});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [show, setShow] = useState(false);
	const all_starships = [];

	const id = useMemo(() => people.url.match(/\d+/g)[0], []); // eslint-disable-line

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
	}, []); // eslint-disable-line

	function handleDetailStarship(ship) {
		setShow(true);
		setStarship(ship);
	}

	function handleCloseDetail() {
		setShow(false);
	}

	return (
		<Container>
			<HeaderDetail item={people} />

			<DetailStarship
				onClose={handleCloseDetail}
				show={show}
				starship={starship}
			/>

			<Details>
				<Profile>
					<ProfileImage personid={id} />

					<div className="info">
						<h1>{people.name}</h1>
						<h3>{people.birth_year}</h3>
					</div>
				</Profile>

				<div className="details">
					<Info>
						<small>{people.hair_color}</small>
						<strong>Hair Color</strong>
					</Info>
					<Info>
						<small>{people.skin_color}</small>
						<strong>Skin Color</strong>
					</Info>
					<Info>
						<small>{people.eye_color}</small>
						<strong>Eyes Color</strong>
					</Info>
					<Info>
						<small>{people.height}</small>
						<strong>Height</strong>
					</Info>
					<Info>
						<small>{people.mass}</small>
						<strong>Mass</strong>
					</Info>
				</div>
			</Details>

			<WrapperStarships>
				<h2>Starships</h2>

				{loading ? (
					<Loading />
				) : error ? (
					<Error />
				) : (
					<Starships>
						{starships.length > 0 &&
							starships.map(ship => (
								<Starship
									key={ship.created}
									item={ship}
									onClick={() => handleDetailStarship(ship)}
								/>
							))}
					</Starships>
				)}
			</WrapperStarships>

			{!starships.length > 0 && !error && !loading && (
				<div className="no-records">
					<img src={nothing} alt="Nothing" />
					<small>
						<strong>No records found.</strong> R2D2! You know better
						than to trust a strange computer!
					</small>
				</div>
			)}
		</Container>
	);
}

DetailPeople.propTypes = {
	location: PropTypes.shape({
		state: PropTypes.shape({
			people: PropTypes.shape({
				name: PropTypes.string,
				birth_year: PropTypes.string,
				hair_color: PropTypes.string,
				skin_color: PropTypes.string,
				eye_color: PropTypes.string,
				mass: PropTypes.string,
				height: PropTypes.string,
				starships: PropTypes.array,
				url: PropTypes.string,
			}),
		}),
	}).isRequired,
};
