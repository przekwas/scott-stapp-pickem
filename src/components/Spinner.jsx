import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import StappHead from '../assets/stapp-it.jpg';

const styles = theme => ({
    root: {
        marginTop: theme.spacing.unit * 3,
        textAlign: 'center'
    },
    imageSize: {
        borderRadius: '10em',
        height: '200px',
        width: '200px'
    }
});

const PureSpinner = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <img id='stapp-it' className={classes.imageSize} src={StappHead} alt='Scott Stapp Headshot' />
        </div>
    );
};

PureSpinner.propTypes = {
    classes: PropTypes.object.isRequired
};

const Spinner = withStyles(styles)(PureSpinner);

export { Spinner };