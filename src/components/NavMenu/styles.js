import styled from 'styled-components';

export const Container = styled.nav`
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	max-width: 250px;
	background-color: #fff;
	transform: ${props =>
		props.open ? 'translateX(0%)' : 'translateX(-100%)'};
	box-shadow: ${props =>
		props.open ? '#252424 0px 0px 12px -4px' : '#252424 0px 0px 0px 0px'};
	padding: 20px;
	transition: all 0.45s ease-out;
	z-index: 1;

	ul {
		margin: 0;
		list-style: none;
		padding: 20px;

		li {
			padding: 15px 0px;
			border-top: 1px solid #efefef;
			transition: all 0.25s ease-out;
			border-left: 0px solid #efefef;
			padding-left: 0px;

			&:hover {
				border-left: 10px solid #efefef;
				padding-left: 10px;
			}

			&:first-child {
				border-top: 0;
			}

			a {
				color: #8c8c8c;
				display: block;
				font-weight: lighter;
				text-decoration: none;
				font-size: 16px;
			}
		}
	}
`;
