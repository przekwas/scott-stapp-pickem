import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: 'black',
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    buttonHover: {
        '&:hover': {
            backgroundColor: '#C5B358'
        }
    },
    metalFont: {
        fontFamily: 'Metal Mania'
    }
});

const PureNavbar = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position='static'>
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" className={classNames(classes.flex, classes.metalFont)}>
                        Scott Stapp Memorial Pick'em League
                    </Typography>
                    <Button color='inherit' className={classes.buttonHover} component={Link} to='/'>Home</Button>
                    <Button color='inherit' className={classes.buttonHover} component={Link} to='/register'>Register</Button>
                    <Button color='inherit' className={classes.buttonHover} component={Link} to='/login'>Login</Button>
                    <Button color='inherit' className={classes.buttonHover} component={Link} to='/profile'>Profile</Button>
                    <Button color='inherit' className={classes.buttonHover} component={Link} to='/pickem'>Pick'em</Button>
                    <Button color='inherit' className={classes.buttonHover} component={Link} to='/standings'>Standings</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

PureNavbar.propTypes = {
    classes: PropTypes.object.isRequired
};

const Navbar = withStyles(styles)(PureNavbar);

export { Navbar };