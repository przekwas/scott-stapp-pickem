import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        objectFit: 'cover',
    },
};

const PureTeamCard = (props) => {
    const { classes } = props;
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    className={classes.media}
                    image={props.team.logo}
                    title="Team Logo"
                />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {props.team.team_name}
                    </Typography>
                    <Typography component="p">
                        {props.team.home_city}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

PureTeamCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

const TeamCard = withStyles(styles)(PureTeamCard);

export { TeamCard };