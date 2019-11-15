import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	background-color: #fff;
	box-shadow: rgba(205, 205, 205, 0.4) 3px 3px 4px 3px;
	display: flex;
	flex-direction: column;
	border-radius: 5px;
	margin-bottom: 10px;

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

			> strong{
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
						font-size: 15px;
					}

					span {
						display: inline-block;
						font-weight: 400;
						font-size: 13px;
					}
				}
			}
		}
	}
`;

export const ImageCover = styled.div`
	height: 150px;
	background-size: cover;
	background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.52), rgb(80, 80, 80) 100%), url(${props => props.image});
	overflow: hidden;
	border-radius: 5px;
	position: relative;
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;
	flex-direction: column;
	color: #FFF;
	
	.info {
		display: flex;
		flex-direction: column;
		padding: 20px;
		text-align: right;
	}
`;