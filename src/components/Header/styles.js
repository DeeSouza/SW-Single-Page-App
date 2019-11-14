import styled from 'styled-components';
import settings from '../../styles/variables';

export const Container = styled.div`
	height: 80px;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	padding: 0px 15px;
	justify-content: space-between;
	background-color: ${settings.backgroundColor};
	box-shadow: #626262 0px 0px 20px -10px;
	z-index: 1;

	img {
		height: 70px;
	}
`;
