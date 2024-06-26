import React, { Component } from 'react'
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { createTheme } from '@mui/material/styles';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'

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

export class Success extends Component {


    render() {
        return (
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
                                Success
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <h1>Thank You For Your Submission</h1>
                    <h4>You will get an email with further instructions</h4>
                </React.Fragment>
            </ThemeProvider>
        )
    }
}



export default Success
