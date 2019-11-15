import styled from 'styled-components';

export const Container = styled.div`
	height: 150px;
	width: 100%;
	position: relative;
	display: flex;
	align-items: center;
	padding: 0px 15px;
	justify-content: space-between;
	background-image: url(https://picsum.photos/300/150?grayscale);
	background-size: cover;
	background-position: center center;

	@media screen and (min-width: 768px) {
		height: 250px;
		background-image: url(https://picsum.photos/768/250?grayscale);
	}

	@media screen and (min-width: 1024px) {
		height: 350px;
		background-image: url(https://picsum.photos/1024/350?grayscale);
	}

	img {
		height: 70px;
	}
`;
