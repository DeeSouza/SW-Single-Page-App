import styled from 'styled-components';

export const Container = styled.div`
	min-width: 250px;
	background-color: #fff;
	margin-right: 15px;
	box-shadow: rgba(205, 205, 205, 0.4) 3px 3px 4px 3px;
	display: flex;
	flex-direction: column;
	border-radius: 5px;

	&:last-child {
		margin-bottom: 0;
	}

	div {
		&.main {
			display: flex;
			background-color: #ffffff;
			font-weight: bolder;
			padding: 12px 15px;
			justify-content: flex-start;
			flex-direction: column;
			position: relative;

			> strong {
				font-size: 15px;
				font-weight: 500;
			}

			.footer {
				color: #000;
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-top: 10px;
				flex-direction: column;

				div {
					display: flex;
					flex-direction: column;
					width: 100%;

					strong {
						color: #5f5f5f;
						font-size: 13px;
					}

					span {
						display: inline-block;
						font-weight: 400;
						font-size: 12px;
					}
				}
			}
		}
	}
`;

export const ImageCover = styled.div`
	height: 150px;
	background-size: cover;
	background-image: url(${props => props.image});
	overflow: hidden;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
`;

export const DetailPeople = styled.div`
	border-radius: 50%;
	width: 50px;
	height: 50px;
	background-color: #27ace8;
	box-shadow: rgba(39, 172, 232, 0.6901960784313725) 0px 0px 21px 1px;
	position: absolute;
	right: 25px;
	top: -25px;

	a {
		height: 100%;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
