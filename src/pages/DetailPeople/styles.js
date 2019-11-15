import styled from 'styled-components';

export const Container = styled.div``;

export const Details = styled.div`
	padding: 20px;

	h1 {
		font-size: 18px;
		color: #000;
	}

	h3 {
		font-size: 15px;
		color: #5f5f5f;
		margin-top: 5px;
	}
`;

export const WrapperStarships = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 20px;

	h2 {
		margin-right: auto;
		padding: 0;
		margin-bottom: 0px;
		color: #717171;
	}
`;

export const Starships = styled.div`
	width: 100%;
	margin-top: 10px;

	@media screen and (min-width: 860px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 20px;
	}
`;
