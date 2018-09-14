import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    bodyColor: {
        backgroundColor: '#eeeeee'
    },
    card: {
        margin: '1em'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    menu: {
        width: 200,
    },
    metalFont: {
        fontFamily: 'Metal Mania',
    },
    button: {
        marginTop: theme.spacing.unit * 3,
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white',
        backgroundColor: '#f50057',
        '&:hover': {
            backgroundColor: '#C5B358'
        }
    }
});

class PureRegisterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    }

    handleRegisterFormSubmit(e) {
        e.preventDefault();

        //fetch POST request logic here

        //clear form
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        })
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.metalFont} gutterBottom variant='headline' component='h1'>
                            Registration
                        </Typography>
                        <form className={classes.container} noValidate autoComplete="off">
                            <TextField
                                id="firstName"
                                label="First Name"
                                className={classes.textField}
                                value={this.state.firstName}
                                onChange={this.handleChange('firstName')}
                                margin="normal"
                                fullWidth
                            />
                            <TextField
                                id="lastName"
                                label="Last Name"
                                className={classes.textField}
                                value={this.state.lastName}
                                onChange={this.handleChange('lastName')}
                                margin="normal"
                                fullWidth
                            />
                            <TextField
                                id="email"
                                label="Email"
                                className={classes.textField}
                                value={this.state.email}
                                onChange={this.handleChange('email')}
                                margin="normal"
                                fullWidth
                            />
                            <TextField
                                id="password-input"
                                label="Password"
                                className={classes.textField}
                                value={this.state.password}
                                onChange={this.handleChange('password')}
                                margin="normal"
                                fullWidth
                                type="password"
                                autoComplete="current-password"
                            />
                            <Button
                                variant="contained"
                                type="submit"
                                size="large"
                                className={classes.button}>
                                Your precious creation.  You will submit.  You will get it.
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </Fragment>
        );
    }
};

PureRegisterScreen.propTypes = {
    classes: PropTypes.object.isRequired,
};

const RegisterScreen = withStyles(styles)(PureRegisterScreen);

export { RegisterScreen };