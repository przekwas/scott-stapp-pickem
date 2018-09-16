import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import mockTeamGenerator from '../utilities/mockTeamGenerator';
import { TeamCard } from '../components/TeamCard';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        margin: '1em'
    },
});

class PurePickemScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homeTeam: {},
            awayTeam: {}
        };
    }

    async componentWillMount() {
        try {
            let homeTeam = await mockTeamGenerator();
            let awayTeam = await mockTeamGenerator();
            this.setState({
                homeTeam,
                awayTeam
            });
        } catch (error) {
            console.log(`Error Fetching Team: ${error}`);
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <Paper className={classes.root} elevation={1}>
                    <TeamCard />
                </Paper>
            </Fragment>
        );
    }
};

PurePickemScreen.propTypes = {
    classes: PropTypes.object.isRequired,
};

const PickemScreen = withStyles(styles)(PurePickemScreen);

export { PickemScreen };