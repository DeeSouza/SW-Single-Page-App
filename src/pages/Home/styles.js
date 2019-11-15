import styled from 'styled-components';

export const Container = styled.div`
	h2 {
		margin: 0;
		padding: 0;
		margin-bottom: 0px;
		padding: 20px 15px 0px;
		color: #717171;
	}
`;

export const WrapperPeoples = styled.div`
	padding: 20px 0px 0px 15px;
	margin-right: 15px;
	display: flex;
	justify-content: center;
	align-items: flex-start;
`;

export const Peoples = styled.div`
	width: 100%;
	display: flex;
	overflow: auto;
	padding: 0px 0px 10px;
`;

export const LoadMore = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	button {
		background-color: transparent;
		border: none;
		cursor: pointer;
		border-radius: 50%;
		width: 30px;
		height: 30px;
		background-color: green;
		display: flex;
		align-items: center;
		justify-content: center;

		.loading {
			animation: spinner 1s linear infinite;
		}

		@keyframes spinner {
			0% {
				transform: rotateZ(0deg);
			}

			100% {
				transform: rotateZ(360deg);
			}
		}
	}
`;
