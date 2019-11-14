import styled from 'styled-components';

export const Container = styled.div`
	background-color: #fff;
	border-radius: 50%;
	width: 50px;
	height: 50px;
	padding: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	border: none;

	.lightsaber {
		width: 75%;
		height: 3px;
		background-color: #212b38;
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

		&:first-child {
			position: relative;
			top: -4px;
			align-self: flex-start;

			&:before {
				right: -30%;
			}
		}

		&:nth-child(2) {
			align-self: flex-end;

			&:before {
				left: -30%;
			}
		}

		&:last-child {
			position: relative;
			top: 4px;
			align-self: flex-start;

			&:before {
				right: -30%;
			}
		}
	}
`;
