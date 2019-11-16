import styled from 'styled-components';

export const Container = styled.div`
	.no-records {
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;

		img {
			width: 40px;
		}

		small {
			font-size: 16px;
			margin-top: 10px;
			font-weight: lighter;

			@media screen and (min-width: 768px) {
				font-size: 18px;
			}
		}
	}
`;

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

	.details {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-top: 20px;
		max-width: 600px;

		div {
			display: flex;
			flex-direction: column;

			strong {
				font-size: 14px;
				color: #006fff;
			}

			small {
				font-size: 12px;
				font-weight: lighter;
			}
		}
	}

	@media screen and (min-width: 768px) {
		h1 {
			font-size: 22px;
		}

		h3 {
			font-size: 18px;
		}

		.details {
			div {
				strong {
					font-size: 18px;
				}

				small {
					font-size: 15px;
				}
			}
		}
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
