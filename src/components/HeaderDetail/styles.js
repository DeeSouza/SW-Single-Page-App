import styled from 'styled-components';

export const Container = styled.div`
	height: 150px;
	width: 100%;
	position: relative;
	display: flex;
	align-items: flex-end;
	padding: 0px 15px;
	justify-content: flex-start;
	background-image: url('https://picsum.photos/320/150/');
	background-size: cover;
	background-position: center center;

	@media screen and (min-width: 768px) {
		height: 250px;
		background-image: url('https://picsum.photos/768/250/');
	}

	@media screen and (min-width: 1024px) {
		height: 350px;
		background-image: url('https://picsum.photos/1024/350/');
	}
`;

export const Profile = styled.div`
	position: relative;
	bottom: -50px;
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	justify-content: flex-start;

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
	border-radius: 5px;
	background-size: cover;
	background-position: center center;
	border: 5px solid #fff;
`;
