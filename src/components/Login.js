import React, { Component } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import PropTypes from "prop-types";
import { login } from "../actions/LoginActions";
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errors: {}
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  componentWillReceiveProps(nextProps) {
      this.setState({
          errors: nextProps.errors
      })

      if(nextProps.security.validToken) {
        this.props.history.push(`/${nextProps.security.currentUser.role.toLowerCase()}/dashboard`);
      } 
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmitHandler(e) {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.login(user);
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper d-flex align-items-center auth">
            <div className="row w-100">
              <div className="col-lg-4 mx-auto">
                <div className="auth-form-light text-left p-5">
                  <h4>Hello! let's get started</h4>
                  <h6 className="font-weight-light">Sign in to continue.</h6>
                  <form
                    className="pt-3"
                    action="#"
                    onSubmit={this.onSubmitHandler}
                  >
                    <div className="form-group">
                      <input
                        type="email"
                        className={classnames("form-control form-control-lg",{"is-invalid":errors.username})}
                        name="username"
                        placeholder="Username"
                        onChange={this.onChangeHandler}
                      />
                      {errors.username && (
                        <p className="invalid-feedback">
                          {errors.username}
                        </p>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className={classnames("form-control form-control-lg",{"is-invalid":errors.password})}
                        name="password"
                        placeholder="Password"
                        onChange={this.onChangeHandler}
                      />
                      {errors.password && (
                        <p className="invalid-feedback">
                          {errors.password}
                        </p>
                      )}
                    </div>
                    <div className="mt-3">
                      <button
                        type="submit"
                        className="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn"
                      >
                        SIGN IN
                      </button>
                    </div>
                    <div className="my-2 d-flex justify-content-between align-items-center">
                      <div className="form-check">
                        <label className="form-check-label text-muted">
                          <input type="checkbox" className="form-check-input" />
                          Keep me signed in
                        </label>
                      </div>
                      <a href="#" className="auth-link text-black">
                        Forgot password?
                      </a>
                    </div>
                    <div className="mb-2">
                      <button
                        type="button"
                        className="btn btn-block btn-facebook auth-form-btn"
                      >
                        <i className="mdi mdi-facebook mr-2"></i>Connect using
                        facebook
                      </button>
                    </div>
                    <div className="text-center mt-4 font-weight-light">
                      Don't have an account?{" "}
                      <Link to="/ecare/users/register" className="text-primary">
                        Create
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  errors: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  security: state.security
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
