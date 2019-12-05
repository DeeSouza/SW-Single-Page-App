import styled from 'styled-components';

export const Container = styled.div`
	height: 250px;
	width: 100%;
	position: relative;
	display: flex;
	align-items: flex-end;
	padding: 0px 15px;
	justify-content: flex-start;
	background-color: #5a55cb;
	background-size: cover;
	background-position: center center;

	@media screen and (min-width: 768px) {
		height: 250px;
	}

	@media screen and (min-width: 1024px) {
		height: 350px;
	}
`;
