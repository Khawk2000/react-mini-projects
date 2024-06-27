import { AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { createTheme } from '@mui/material/styles';
import React, { Component } from 'react'


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

export class NavBar extends Component {
    render() {
        return (
            <div className='navbar-container'>
                <ThemeProvider theme={theme}>
                    <React.Fragment>
                        <AppBar>
                            <Toolbar>
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{ mr: 2 }}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    PixaBay Image Finder
                                </Typography>
                            </Toolbar>
                        </AppBar>
                    </React.Fragment>
                </ThemeProvider>
            </div>
        )
    }
}

export default NavBar