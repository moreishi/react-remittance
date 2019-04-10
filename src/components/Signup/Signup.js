import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Signup extends Component {

    render() {
        return (
            <div>
                <div className="container">

                    <h1 className="mt-3">Sign Up</h1>
                    <small>Already have an account? <NavLink to="/login">Log In</NavLink></small>

                    <form className="mt-3">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="firstname">Your first name</label>
                                            <input type="text" className="form-control"
                                                   autoComplete="off"
                                                   id="firstname" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="lastname">Your last name</label>
                                            <input type="text" className="form-control"
                                                   id="lastname" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="email">Your email address</label>
                                            <input type="email" className="form-control"
                                                   id="email" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="confirm_email">Re-enter email address</label>
                                            <input type="email" className="form-control"
                                                   id="confirm_email" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="password">Create password</label>
                                            <input type="password" className="form-control"
                                                   autoComplete="off"
                                                   id="password" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="confirm_password">Re-enter password</label>
                                            <input type="password" className="form-control"
                                                   id="confirm_password" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button  type="button" className="btn btn-primary">I agree, create free account</button>
                    </form>
                    <div className="row">
                        <div className="col-md-12 mt-3">
                            <small>By clicking on "I agree" you are agreeing to <NavLink to="/user-agreement">User Agreement</NavLink> and confirming you have read the <NavLink to="/">Privacy Policy</NavLink>. You permit us to share your profile information and stored payment methods with our system to open your account.</small>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Signup;