import React, { useState, useEffect } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { FaPlus, FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';

import People from '../../components/People';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

import { Container, WrapperPeoples, Peoples, LoadMore } from './styles';
import SWApi from '../../services/api';

export default function Home() {
	const [peoples, setPeoples] = useState([]);
	const [loading, setLoading] = useState(false);
	const [loadingMore, setLoadingMore] = useState(false);
	const [error, setError] = useState(false);
	const [page, setPage] = useState(1);
	const [next, setNext] = useState('');

	useEffect(() => {
		(async function getSWPersons() {
			if (!next) setLoading(true);
			else setLoadingMore(true);

			try {
				const { data } = await SWApi.get('people', {
					params: {
						page,
					},
				});

				setPeoples([...peoples, ...data.results]);
				setNext(data.next);
			} catch (e) {
				toast.error(
					'😓😓😓 Whoops! Aconteceu algo que não esperávamos. Volte novamente mais tarde.'
				);

				setError(true);
			} finally {
				setLoading(false);
				setLoadingMore(false);
			}
		})();
	}, [page]); // eslint-disable-line

	function handleMorePeople() {
		if (next) {
			setPage(page + 1);
		}
	}

	return (
		<Container>
			<h2>Personagens</h2>

			<WrapperPeoples>
				{loading ? (
					<Loading />
				) : error ? (
					<Error />
				) : (
					<Peoples>
						<PerfectScrollbar useBothWheelAxes>
							{peoples.map(people => (
								<People key={people.created} item={people} />
							))}

							{next && (
								<LoadMore>
									<button
										type="button"
										onClick={handleMorePeople}
									>
										{loadingMore ? (
											<FaSpinner
												className="loading"
												color="#FFFFFF"
												size={16}
											/>
										) : (
											<FaPlus color="#FFFFFF" size={16} />
										)}
									</button>
								</LoadMore>
							)}
						</PerfectScrollbar>
					</Peoples>
				)}
			</WrapperPeoples>
		</Container>
	);
}
