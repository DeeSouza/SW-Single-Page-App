import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import Header from '../../components/Header';
import People from '../../components/People';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

import { Container, WrapperPeoples, Peoples } from './styles';
import SWApi from '../../services/api';

export default function Home() {
	const [peoples, setPeoples] = useState([]);
	const [totalPeoples, setTotalPeoples] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		const getSWPersons = async () => {
			setLoading(true);

			try {
				const { data } = await SWApi.get('pedople');

				setPeoples(data.results);
				setTotalPeoples(data.count);
			} catch (error) {
				toast.error(
					'Whoops! Aconteceu algo que não esperávamos. Volte novamente mais tarde.'
				);

				setError(true);
			} finally {
				setLoading(false);
			}
		};

		getSWPersons();
	}, []);

	return (
		<Container>
			<Header />

			<WrapperPeoples>
				{loading ? (
					<Loading />
				) : error ? (
					<Error />
				) : (
					<Peoples>
						{peoples.map(people => (
							<People key={people.created} item={people} />
						))}
					</Peoples>
				)}
			</WrapperPeoples>
		</Container>
	);
}
