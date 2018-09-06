import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Router>
                    <Switch>
                        <Route exact path="/" component={HomeScreen} />
                        <Route path="/register" component={RegisterScreen} />
                    </Switch>
                </Router>
            </Fragment>
        );
    }
};

export default App;