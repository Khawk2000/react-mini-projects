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

export class PersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
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
                                Enter Personal Details
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <TextField
                        required
                        id='filled-required'
                        label='Occupation'
                        defaultValue={values.occupation}
                        onChange={handleChange('occupation')}
                        variant='filled'
                    />
                    <br/>
                    <TextField
                        required
                        id='filled-required'
                        label='City'
                        defaultValue={values.city}
                        onChange={handleChange('city')}
                        variant='filled'
                    />
                    <br/>
                    <TextField
                        required
                        id='filled-required'
                        label='Bio'
                        defaultValue={values.bio}
                        onChange={handleChange('bio')}
                        variant='filled'
                    />
                    <br/>
                    <Button color='primary' variant='contained' onClick={this.continue}>Continue</Button>
                    <Button color='secondary' variant='contained' onClick={this.back}>Back</Button>
                </React.Fragment>
            </ThemeProvider>
        )
    }
}

PersonalDetails.propTypes = {
    values: PropTypes.object,
    nextStep: PropTypes.func,
    prevStep: PropTypes.func,
    handleChange: PropTypes.func
}


export default PersonalDetails
