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
	display: inline-flex;
	flex-direction: column;
	border-radius: 25px;
	background-color: #fff;
	height: 100px;
	min-width: 100px;
	justify-content: center;
	align-items: center;
	margin: 10px;
	box-shadow: rgba(0, 0, 0, 0.28) 0px 0px 14px -2px;

	&:first-child {
		margin-left: 0;
	}

	&:last-child {
		margin-right: 10px;
	}

	strong {
		font-size: 13px;
		color: #006fff;
	}

	small {
		font-size: 14px;
		font-weight: lighter;
		color: #616161;
	}
`;

export const Details = styled.div`
	padding: 20px;
	margin: auto;
	margin-top: 0;
	background-color: #fff;
	border-top-left-radius: 30px;
	border-top-right-radius: 30px;
	position: relative;
	top: -50px;

	.details {
		margin-top: -60px;
		width: 100%;
		overflow: auto;
		padding: 0px 20px 5px;
		white-space: nowrap;
	}
`;

export const WrapperStarships = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 0px 20px 20px;

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

export const Profile = styled.div`
	padding: 20px;
	position: relative;
	bottom: 70px;
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	justify-content: flex-start;

	@media screen and (min-width: 768px) {
		bottom: 100px;
	}

	.info {
		margin-left: 10px;

		h1 {
			font-size: 18px;
			color: #000;
		}

		h3 {
			font-size: 15px;
			color: #5f5f5f;
			margin-top: 0px;
		}
	}
`;

export const ProfileImage = styled.div`
	background-image: ${props =>
		`url(https://starwars-visualguide.com/assets/img/characters/${props.personid}.jpg)`};
	width: 100px;
	height: 100px;
	border-radius: 30px;
	background-size: cover;
	background-position: center center;
	border: 5px solid #fff;

	@media screen and (min-width: 768px) {
		width: 150px;
		height: 150px;
	}
`;
