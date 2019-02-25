import React from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';

import '../assets/dependencies'
import 'typeface-roboto'

import Button from '@material-ui/core/Button';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart'


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    }
  },
});

export default props => (
    <MuiThemeProvider theme={theme}>
      <Button variant="contained" color={'primary'}>
        teste
    </Button>
    <AddShoppingCart />
    </MuiThemeProvider>
)