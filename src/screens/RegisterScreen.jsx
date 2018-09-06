import React, { Component, Fragment } from 'react';

class RegisterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    }

    handleRegisterFormSubmit(e) {
        e.preventDefault();

        //fetch POST request logic here

        //clear form
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        })
    }

    render() {
        return (
            <Fragment>
                <div>
                    <h3>Register Form</h3>
                    <form>
                        <div>
                            <label>First Name: </label>
                            <input value={this.state.firstName} onChange={(e) => this.setState({ firstName: e.target.value })} />
                        </div>
                        <div>
                            <label>Last Name: </label>
                            <input value={this.state.lastName} onChange={(e) => this.setState({ lastName: e.target.value })} />
                        </div>
                        <div>
                            <label>Email: </label>
                            <input value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} type='email' />
                        </div>
                        <div>
                            <label>Password: </label>
                            <input value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} type='password' />
                        </div>
                        <div>
                            <button type='submit' onClick={(e) => this.handleRegisterFormSubmit(e)}>Register</button>
                        </div>
                    </form>
                </div>
            </Fragment>
        );
    }
};

export { RegisterScreen };