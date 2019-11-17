import styled from 'styled-components';
import { lighten } from 'polished';
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

	&:hover {
		.lightsaber {
			&.red {
				box-shadow: ${settings.lightsaber.red} 0px 0px 10px 2px;
				background-color: ${lighten(0.1, settings.lightsaber.red)};
			}

			&.green {
				box-shadow: ${settings.lightsaber.green} 0px 0px 10px 2px;
				background-color: ${lighten(0.1, settings.lightsaber.green)};
			}

			&.blue {
				box-shadow: ${settings.lightsaber.blue} 0px 0px 10px 2px;
				background-color: ${lighten(0.1, settings.lightsaber.blue)};
			}
		}
	}

	.lightsaber {
		width: 65%;
		height: 4px;
		position: relative;
		display: block;
		transition: all 0.5s ease-out;

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
			background-color: ${settings.lightsaber.red};
			box-shadow: ${settings.lightsaber.red} 0px 0px 0px 0px;

			&:before {
				background-color: #000;
				right: -50%;
			}
		}

		&.green {
			position: relative;
			align-self: flex-end;
			background-color: ${settings.lightsaber.green};
			box-shadow: ${settings.lightsaber.green} 0px 0px 0px 0px;

			&:before {
				background-color: #000;
				left: -50%;
			}
		}

		&.blue {
			position: relative;
			top: 4px;
			align-self: flex-start;
			background-color: ${settings.lightsaber.blue};
			box-shadow: ${settings.lightsaber.blue} 0px 0px 0px 0px;

			&:before {
				background-color: #000;
				right: -50%;
			}
		}
	}
`;
