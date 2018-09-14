import React, { Component, Fragment } from 'react';

import { Spinner } from '../components/Spinner';

class StandingsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasLoaded: false
        };
    }

    render() {
        if (this.state.hasLoaded) {
            return (
                <h1>Hello from Standings Screen!</h1>
            );
        } else {
            return (
                <Fragment>
                    <Spinner />
                </Fragment>
            );
        }

    }
};

export { StandingsScreen };