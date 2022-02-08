import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	h1, h2 {
		margin: 0;
		padding: 0;
	}
	
	button {
		border: none;
		background: transparent;
		padding: 0;
	}
`;

export default GlobalStyle;
