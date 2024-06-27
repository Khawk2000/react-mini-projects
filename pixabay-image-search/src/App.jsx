import './App.css'
import React, { Component } from 'react'
import NavBar from './components/navbar/NavBar'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import { createTheme } from '@mui/material/styles';
import Search from './components/search/Search';


const theme = createTheme({
  palette: {
    primary: {
      main: '#15c0e4',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

class App extends Component {

  render() {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <NavBar />
          <Search />
        </React.Fragment>
      </ThemeProvider>
    )
  }
}

export default App
