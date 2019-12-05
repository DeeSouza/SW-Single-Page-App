import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
	.no-records {
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		margin-bottom: 30px;

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

export const Info = styled(motion.div).attrs({
	animate: {
		scale: [0.5, 1],
		opacity: [0, 1],
		transition: {
			delay: [1, 2],
		},
	},
})`
	display: flex;
	flex-direction: column;
	border-radius: 5px;
	background-color: #fff;
	height: 100px;
	width: 100px;
	justify-content: center;
	align-items: center;
	margin: 10px 0px;

	strong {
		font-size: 14px;
		color: #006fff;
	}

	small {
		font-size: 12px;
		font-weight: lighter;
	}
`;

export const Details = styled.div`
	padding: 20px;
	margin: auto;
	margin-top: 40px;

	.details {
		display: grid;
		grid-template-columns: repeat(auto-fit, 100px);
		grid-column-gap: 20px;
		justify-content: space-between;
		max-width: 720px;
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
