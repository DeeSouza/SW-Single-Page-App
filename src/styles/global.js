import { createGlobalStyle } from 'styled-components';
import settings from './variables';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap');
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline: none;
	}

	body{
		background: ${settings.backgroundColor};
		-webkit-font-smoothing: antialiased;
		font-family: "Roboto";
	}

	html, body{
		height: 100%;
	}

	#root{
		position: relative;
		min-height: 100%;
	}
`;
