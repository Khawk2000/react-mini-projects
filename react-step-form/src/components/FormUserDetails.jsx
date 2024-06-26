import React, { Component } from 'react'
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { createTheme } from '@mui/material/styles';
import { AppBar, TextField, Button, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import PropTypes from 'prop-types'

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

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;

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
                                Enter User Details
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <TextField
                        required
                        id='filled-required'
                        label='First Name'
                        defaultValue={values.firstName}
                        onChange={handleChange('firstName')}
                        variant='filled'
                    />
                    <br/>
                    <TextField
                        required
                        id='filled-required'
                        label='Last Name'
                        defaultValue={values.lastName}
                        onChange={handleChange('lastName')}
                        variant='filled'
                    />
                    <br/>
                    <TextField
                        required
                        id='filled-required'
                        label='Email'
                        defaultValue={values.email}
                        onChange={handleChange('email')}
                        variant='filled'
                    />
                    <br/>
                    <Button color='primary' variant='contained' onClick={this.continue}>Continue</Button>
                </React.Fragment>
            </ThemeProvider>
        )
    }
}

FormUserDetails.propTypes = {
    values: PropTypes.object,
    nextStep: PropTypes.func,
    handleChange: PropTypes.func
}

export default FormUserDetails
