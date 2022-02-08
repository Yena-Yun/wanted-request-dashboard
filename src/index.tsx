import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { theme } from 'styles/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/globalStyles';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
