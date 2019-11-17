import styled from 'styled-components';
import 'react-perfect-scrollbar/dist/css/styles.css';

export const Container = styled.div`
	position: fixed;
	overflow: auto;
	z-index: 1;
	top: 0px;
	right: 0;
	height: 100%;
	background-color: #fff;
	width: 100%;
	max-width: 320px;
	transform: ${props => (props.show ? 'translateX(0%)' : 'translateX(100%)')};
	box-shadow: ${props => (props.show ? '#252424 0px 0px 12px -4px' : 'none')};
	padding: 20px;
	transition: all 0.45s ease-out;

	.header {
		strong {
			display: block;
			color: #006fff;
			font-size: 17px;
		}

		small {
			font-weight: 400;
			font-size: 15px;
		}

		button {
			margin: 0px auto 20px auto;
			display: block;
			cursor: pointer;
			background-color: transparent;
			border: none;
		}
	}

	.info {
		div {
			display: flex;
			flex-direction: column;
			margin-top: 15px;

			strong {
				font-size: 16px;
				font-weight: 700;
			}

			small {
				font-size: 14px;
				font-weight: lighter;
			}
		}
	}
`;
