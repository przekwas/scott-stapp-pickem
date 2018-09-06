import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import {
    HomeScreen,
    RegisterScreen,
    LoginScreen,
    ProfileScreen,
    PickemScreen,
    StandingsScreen
} from './screens';


class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>

                    <Navbar />

                    <Switch>
                        <Route exact path='/' component={HomeScreen} />
                        <Route path='/register' component={RegisterScreen} />
                        <Route path='/login' component={LoginScreen} />
                        {/* will make this a private route later */}
                        <Route path='/profile' component={ProfileScreen} />
                        <Route path='/pickem' component={PickemScreen} />
                        <Route path='/standings' component={StandingsScreen} />
                    </Switch>

                </Fragment>
            </Router>
        );
    }
};

export default App;