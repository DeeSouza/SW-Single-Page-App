import styled from 'styled-components';
import settings from '../../styles/variables';

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
		width: 65%;
		height: 4px;
		position: relative;
		display: block;

		&:before {
			content: '';
			position: absolute;
			top: 0;
			height: 4px;
			width: 40%;
		}

		&.red {
			position: relative;
			top: -4px;
			align-self: flex-start;
			background-color: #000;

			&:before {
				right: -50%;
				background-color: ${settings.lightsaber.red};
			}
		}

		&.green {
			align-self: flex-end;
			background-color: #000;

			&:before {
				left: -50%;
				background-color: ${settings.lightsaber.green};
			}
		}

		&.blue {
			position: relative;
			top: 4px;
			align-self: flex-start;
			background-color: #000;

			&:before {
				right: -50%;
				background-color: ${settings.lightsaber.blue};
			}
		}
	}
`;
