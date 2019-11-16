import styled from 'styled-components';

export const Container = styled.div`
	position: fixed;
	z-index: 1;
	top: 0px;
	right: 0;
	height: 100%;
	background-color: #fff;
	width: 100%;
	max-width: 320px;
	transform: ${props => (props.show ? 'translateX(0%)' : 'translateX(100%)')};

	.info {
		padding: 20px;

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
