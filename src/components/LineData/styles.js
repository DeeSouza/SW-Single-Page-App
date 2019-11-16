import styled from 'styled-components';

export const Container = styled.div`
	margin-top: 20px;
	display: flex;
	flex-direction: column;

	strong {
		font-size: 14px;
		color: #006fff;
	}

	small {
		font-size: 12px;
		font-weight: lighter;
		margin-top: 4px;
	}

	@media screen and (min-width: 768px) {
		strong {
			font-size: 18px;
		}

		small {
			font-size: 15px;
		}
	}
`;

export const Line = styled.div`
	height: 5px;
	background-color: #c7c7c7;
	position: relative;
	width: 100%;
	border-radius: 4px;
	margin-top: 5px;
	overflow: hidden;

	&:before {
		position: absolute;
		height: 5px;
		top: 0;
		left: 0;
		border-radius: 4px;
		content: '';
		background-color: #3ca900;
		width: ${props => props.value}px;
	}
`;
