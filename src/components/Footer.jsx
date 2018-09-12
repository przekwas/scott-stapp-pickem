import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    footer: {
        backgroundColor: '#6573c3',
        marginTop: theme.spacing.unit * 8,
        padding: `${theme.spacing.unit * 6}px 0`,
    }
});

const PureFooter = (props) => {
    const { classes } = props
    return (
        <footer className={classes.footer}>
            <Typography variant="title" align="center" gutterBottom>
                Footer
        </Typography>
            <Typography variant="subheading" align="center" color="textSecondary" component="p">
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