import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import CreedLogo from '../assets/creed-logo.png';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing.unit * 3
    },
});

class PureHomeScreen extends Component {

    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <div className={classes.root}>
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Grid item xs>
                            <img alt='Creed Logo' src={CreedLogo} />
                        </Grid>
                    </Grid>
                </div>
            </Fragment>
        );
    }
};

PureHomeScreen.propTypes = {
    classes: PropTypes.object.isRequired,
};

const HomeScreen = withStyles(styles)(PureHomeScreen);

export { HomeScreen };