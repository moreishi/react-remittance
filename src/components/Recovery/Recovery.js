import React, {Component} from 'react';

class Login extends Component {

    render() {
        return (
            <div className="container">
                <h1>Forgot your password?</h1>
                <p>We'll send you an email with password reset instructions.</p>
                <form>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="email">Registered Email Address</label>
                                <input type="email" className="form-control"
                                       autoComplete="off"
                                       id="email"
                                       aria-describedby="emailHelp" />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <button  type="button" className="btn btn-primary">Send email</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;