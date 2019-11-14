import React from 'react';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from './styles/global';
import Routes from './routes';

function App() {
	return (
		<>
			<GlobalStyle />
			<Routes />

			<ToastContainer autoClose={3000} />
		</>
	);
}

export default App;
