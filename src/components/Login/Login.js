import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.emailHandleChange = this.emailHandleChange.bind(this);
        this.passwordHandleChange = this.passwordHandleChange.bind(this);
        this.submitFormHandle = this.submitFormHandle.bind(this);
    }

    emailHandleChange(event) {
        this.setState({
            email: event.target.value
        });
    }

    passwordHandleChange(event) {
        this.setState({
            password: event.target.value
        });
    }

    submitFormHandle() {
        console.log(this.state);
    }


    render() {
        return (
                <div className="container">
                    <h1>Log In</h1>
                    <form>
                        <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control"
                                       onChange={this.emailHandleChange}
                                       autoComplete="off"
                                       value={this.state.email}
                                       id="exampleInputEmail1"
                                       aria-describedby="emailHelp" />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control"
                                       onChange={this.passwordHandleChange}
                                       value={this.state.password}
                                       id="exampleInputPassword1" />
                                <small><NavLink to="/password-recovery">Forgot password</NavLink></small>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <button  onClick={this.submitFormHandle} type="button" className="btn btn-primary">Log In</button>
                        </div>
                        <div className="col-md-12">
                            <small>New to Remittance? <NavLink to="/signup">Sign Up</NavLink></small>
                        </div>
                        <div className="col-md-12">
                            <small>By Logging In, you accept the  <NavLink to="/user-agreement">User Agreement</NavLink>.</small>
                        </div>
                        </div>
                    </form>
                </div>
        );
    }
}

export default Login;