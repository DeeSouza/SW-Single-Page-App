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

	.info {
		display: flex;
		flex-direction: column;
		padding: 20px;
		text-align: right;
	}
`;
