import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    footer: {
        backgroundColor: 'black',
        marginTop: theme.spacing.unit * 3,
        padding: `${theme.spacing.unit * 6}px 0`,
    },
    metalFont: {
        fontFamily: 'Metal Mania',
        color: 'white'
    },
});

const PureFooter = (props) => {
    const { classes } = props;
    return (
        <footer className={classes.footer}>
            <Typography className={classes.metalFont} variant="display3" align="center" gutterBottom>
                Footer
        </Typography>
            <Typography className={classes.metalFont} variant="title" align="center" color="textSecondary" component="p">
                Something here to give the footer a purpose!
        </Typography>
        </footer>
    );
};

PureFooter.propTypes = {
    classes: PropTypes.object.isRequired
};

const Footer = withStyles(styles)(PureFooter);

export { Footer };