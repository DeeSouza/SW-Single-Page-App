import styled from 'styled-components';

export const Container = styled.div`
	border-radius: 50%;
	width: 35px;
	height: 35px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	border: none;
	cursor: pointer;

	.lightsaber {
		width: 75%;
		height: 3px;
		position: relative;
		display: block;

		&:before {
			content: '';
			position: absolute;
			top: 0;
			height: 3px;
			background-color: #212b38;
			width: 25%;
		}

		&.red {
			position: relative;
			top: -4px;
			align-self: flex-start;
			background-color: red;

			&:before {
				right: -30%;
			}
		}

		&.green {
			align-self: flex-end;
			background-color: green;

			&:before {
				left: -30%;
			}
		}

		&.blue {
			position: relative;
			top: 4px;
			align-self: flex-start;
			background-color: blue;

			&:before {
				right: -30%;
			}
		}
	}
`;
