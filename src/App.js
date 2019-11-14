import React from 'react';
import GlobalStyle from './styles/global';
import Routes from './routes';

import Container from './components/Container';

function App() {
	return (
		<Container>
			<GlobalStyle />
			<Routes />
		</Container>
	);
}

export default App;
