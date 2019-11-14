import styled from 'styled-components';

export const Container = styled.div`
	background-color: #fff;
	height: 300px;
	margin-bottom: 15px;
	box-shadow: rgba(205, 205, 205, 0.4) 0px 0px 4px 3px;
	display: flex;
	flex-direction: column;

	&:last-child {
		margin-bottom: 0;
	}

	div {
		&.header {
			flex-grow: 3;
			display: flex;
			align-items: center;
			justify-content: center;

			img {
				border-radius: 50%;
				border-top-left-radius: 5px;
				border-top-right-radius: 5px;
			}
		}

		&.main {
			flex-grow: 2;
			display: flex;
			align-items: center;
			background-color: #ffffff;
			font-weight: bolder;
			padding: 0px 15px;
		}

		&.footer {
			height: 40px;
			color: #000;
			flex-grow: 1;
			padding: 0px 15px;
			display: flex;
			align-items: center;
			justify-content: space-around;

			div {
				strong {
					display: block;
				}
			}
		}
	}
`;

export const ImageCover = styled.div`
	height: 200px;
	background-size: cover;
	background-image: url(${props => props.image});
	overflow: hidden;
`;
