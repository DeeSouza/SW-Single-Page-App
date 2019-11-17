import styled from 'styled-components';
import { lighten } from 'polished';
import settings from '../../styles/variables';

export const Container = styled.div`
	width: 35px;
	height: 35px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	border: none;
	cursor: pointer;
	overflow: hidden;
	padding: 10px 10px;
	box-sizing: content-box;

	&:hover {
		.lightsaber {
			&.red {
				box-shadow: ${settings.lightsaber.red} 0px 0px 10px 2px;
				background-color: ${lighten(0.1, settings.lightsaber.red)};
				top: 4px;
				transform: rotate(45deg);
				transition: transform 0.15s ease-out 1.95s,
					box-shadow 0.15s ease-out, top 0.15s ease-out 0.95s;
			}

			&.green {
				box-shadow: ${settings.lightsaber.green} 0px 0px 10px 2px;
				background-color: ${lighten(0.1, settings.lightsaber.green)};
				right: -200px;
			}

			&.blue {
				box-shadow: ${settings.lightsaber.blue} 0px 0px 10px 2px;
				background-color: ${lighten(0.1, settings.lightsaber.blue)};
				top: -4px;
				transform: rotate(135deg);
				transition: transform 0.15s ease-out 1.95s,
					box-shadow 0.15s ease-out, top 0.15s ease-out 0.95s;
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
			transform: rotate(0deg);

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

			transition: right 0.95s ease-out 0.35s, box-shadow 0.95s ease-out;
			right: 0px;

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
			transform: rotate(0deg);

			&:before {
				background-color: #000;
				right: -50%;
			}
		}
	}
`;
