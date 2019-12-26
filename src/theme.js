import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  status: {
    danger: 'red',
  },
});

const Provider = props => (
  <ThemeProvider theme={theme}>
    {props.children}
  </ThemeProvider>
)

export default Provider;