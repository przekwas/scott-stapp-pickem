import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
    HomeScreen,
    RegisterScreen,
    LoginScreen,
    ProfileScreen,
    PickemScreen,
    StandingsScreen
} from './screens';
import {
    Navbar,
    Footer
} from './components';

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
                        <Route path='/profile' component={ProfileScreen} /> {/* will make this a private route later */}
                        <Route path='/pickem' component={PickemScreen} />
                        <Route path='/standings' component={StandingsScreen} />
                    </Switch>

                    <Footer />

                </Fragment>
            </Router>
        );
    }
};

export default App;