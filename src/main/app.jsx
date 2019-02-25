import React from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';

import '../assets/dependencies'


import Head from '../common/head'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#1ED760',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    typography: {
      useNextVariants: true,
    },
    
  },
});

export default props => (
    <MuiThemeProvider theme={theme}>
      <div>
        <Head />
        {props.children}
      </div>
    </MuiThemeProvider>
)