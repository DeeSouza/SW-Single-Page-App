import styled from 'styled-components';

export const Container = styled.div`
	margin-top: 20px;

	img {
		width: 40px;
		animation: loading 2s infinite alternate;
	}

	@keyframes loading {
		0% {
			transform: translateY(0px);
		}

		50% {
			transform: translateY(10px);
		}

		100% {
			transform: translateY(-10px);
		}
	}
`;
