import styled from 'styled-components';

export const Container = styled.div`
	height: 150px;
	width: 100%;
	position: relative;
	display: flex;
	align-items: center;
	padding: 0px 15px;
	justify-content: space-between;
	background-image: ${props =>
		`url(https://starwars-visualguide.com/assets/img/characters/${props.id}.jpg)`};
	background-size: cover;
	background-position: center center;

	@media screen and (min-width: 768px) {
		height: 250px;
		background-image: ${props =>
			`url(https://starwars-visualguide.com/assets/img/characters/${props.id}.jpg)`};
	}

	@media screen and (min-width: 1024px) {
		height: 350px;
		background-image: ${props =>
			`url(https://starwars-visualguide.com/assets/img/characters/${props.id}.jpg)`};
	}

	img {
		height: 70px;
	}
`;
