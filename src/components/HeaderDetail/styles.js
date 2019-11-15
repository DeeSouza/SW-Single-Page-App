import styled from 'styled-components';
import settings from '../../styles/variables';

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

	img {
		height: 70px;
	}
`;
