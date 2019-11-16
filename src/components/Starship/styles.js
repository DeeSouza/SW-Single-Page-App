import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	background-color: #fff;
	box-shadow: rgba(205, 205, 205, 0.4) 3px 3px 4px 3px;
	display: flex;
	flex-direction: column;
	border-radius: 5px;
	margin-bottom: 10px;
`;

export const ImageCover = styled.div`
	height: 150px;
	background-size: cover;
	background-image: linear-gradient(
			to bottom,
			rgba(255, 255, 255, 0.3),
			rgb(80, 80, 80) 100%
		),
		url(${props => props.image});
	overflow: hidden;
	border-radius: 5px;
	position: relative;
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;
	flex-direction: column;
	color: #fff;

	&:hover {
		.info {
			border-right: 3px solid white;
			padding-right: 20px;
			margin-bottom: 55px;
		}

		.more-info {
			bottom: 20px;
			opacity: 1;
			/* transition-delay: 0.75s; */
		}
	}

	.info {
		display: flex;
		flex-direction: column;
		margin: 20px;
		margin-bottom: 20px;
		text-align: right;
		padding-right: 0px;
		border-right: 0px solid transparent;
		transition: border-right 0.5s ease-out, padding 0.5s ease-out,
			margin-bottom 0.25s ease-in 0.5s;

		strong {
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			align-items: center;
			font-size: 16px;

			span {
				margin-right: 5px;
			}
		}

		small {
			font-size: 14px;
		}
	}

	.more-info {
		border: none;
		font-size: 13px;
		background-color: #fff;
		color: #867171;
		padding: 5px 15px;
		align-self: flex-end;
		border-radius: 4px;
		margin-top: 0px;
		cursor: pointer;
		opacity: 0;
		transition: color 0.5s ease-in-out, box-shadow 0.5s ease-in-out,
			background-color 0.5s ease-in-out, opacity 0.5s ease-in-out,
			bottom 0.5s ease-in-out 0.65s;
		position: absolute;
		bottom: -40px;
		right: 20px;
		box-shadow: #fff 0px 0px 0px 0px;

		&:hover {
			box-shadow: #fff 0px 0px 12px -1px;
			background-color: #52ce4e;
			color: #fff;
		}
	}
`;
