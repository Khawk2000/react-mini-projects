import React, { Component } from 'react'
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { createTheme } from '@mui/material/styles';
import { AppBar, List, Button, Toolbar, IconButton, Typography, ListItem, ListItemText } from '@mui/material';
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

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values } = this.props;

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
                                Confirm User Data
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <List>
                        <ListItem>
                            <ListItemText 
                                primary='First Name'
                                secondary={values.firstName}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText 
                                primary='Last Name'
                                secondary={values.lastName}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText 
                                primary='Email'
                                secondary={values.email}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText 
                                primary='Occupation'
                                secondary={values.occupation}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText 
                                primary='City'
                                secondary={values.city}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText 
                                primary='Bio'
                                secondary={values.bio}
                            />
                        </ListItem>
                    </List>
                    <br />
                    <Button color='primary' variant='contained' onClick={this.continue}>Confirm & Continue</Button>
                    <Button color='secondary' variant='contained' onClick={this.back}>Back</Button>
                </React.Fragment>
            </ThemeProvider>
        )
    }
}

Confirm.propTypes = {
    values: PropTypes.object,
    nextStep: PropTypes.func,
    prevStep: PropTypes.func,
    handleChange: PropTypes.func
}

export default Confirm
