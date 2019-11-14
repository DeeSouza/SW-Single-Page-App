import styled from 'styled-components';

export const Container = styled.div``;

export const WrapperPeoples = styled.div`
	padding-top: 100px;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	padding-bottom: 30px;
`;

export const Peoples = styled.div`
	width: 90%;
	max-width: 1024px;
	display: grid;
	grid-template-columns: 100%;

	@media (min-width: 768px) {
		grid-template-columns: 1fr 1fr;
		grid-column-gap: 20px;
	}
`;
