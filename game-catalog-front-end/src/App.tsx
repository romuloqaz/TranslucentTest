import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalStyle from './styles/global';
import theme from './theme/theme';

const App: React.FC = () => (
  <>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  </>
);

export default App;
