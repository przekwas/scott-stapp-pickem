import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import {
    HomeScreen,
    RegisterScreen,
    LoginScreen,
    ProfileScreen,
    PickemScreen,
    StandingsScreen
} from './screens/';
import { StappBar } from './components';
import { Container } from 'reactstrap';

const App = () => {
    return (
        <Router>
            <Fragment>

                <StappBar />
                <Container>
                    <Switch>
                        <Route exact path="/" component={HomeScreen} />
                        <Route path='/register' component={RegisterScreen} />
                        <Route path='/login' component={LoginScreen} />
                        <Route path='/profile' component={ProfileScreen} /> {/* will make this a private route later */}
                        <Route path='/pickem' component={PickemScreen} />
                        <Route path='/standings' component={StandingsScreen} />
                    </Switch>
                </Container>
            </Fragment>
        </Router>
    );
};

export default App;
