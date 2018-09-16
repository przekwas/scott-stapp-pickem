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

class PureLoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleLoginFormSubmit(e) {
        e.preventDefault();

        //clear form
        this.setState({
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
                            Login
                        </Typography>
                        <form className={classes.container} noValidate autoComplete="off">
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
                                Login. With Arms Wide Open.
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </Fragment>
        );
    }
};

PureLoginScreen.propTypes = {
    classes: PropTypes.object.isRequired,
};

const LoginScreen = withStyles(styles)(PureLoginScreen);

export { LoginScreen };