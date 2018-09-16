import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { QuoteGenerator } from './QuoteGenerator';

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
    quoteColor: {
        color: 'white'
    },
    authorText: {
        fontStyle: 'italic'
    }
});

const PureFooter = (props) => {
    const { classes } = props;
    return (
        <footer className={classes.footer}>
            <Typography className={classes.metalFont} variant="title" align="center" gutterBottom>
                Scott Stapp Memorial Pick'em League
        </Typography>
            <Typography className={classes.quoteColor} variant="subheading" align="center" component="p">
                <QuoteGenerator />
                <p className={classes.authorText}>- Scott Stapp, Creed</p>
        </Typography>
        </footer>
    );
};

PureFooter.propTypes = {
    classes: PropTypes.object.isRequired
};

const Footer = withStyles(styles)(PureFooter);

export { Footer };