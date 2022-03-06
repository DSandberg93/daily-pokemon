import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from 'themes/default';
import './index.css';
import App from './containers/App';

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById('root'),
  );
