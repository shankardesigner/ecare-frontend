import React, { Component } from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../actions/registerActions";
import PropTypes from "prop-types";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      fullName: "",
      password: "",
      confirmPassword: "",
      roles: "",
      errors: {}
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  onChangeHandler(e) {
    //e.target.classList.remove('is-invalid');
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitHandler(e) {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
      fullName: this.state.fullName,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      roles: this.state.roles
    };
    
    console.log(newUser);
    
    
    if(newUser.roles === "Choose Account Type" || newUser.roles === "") {
      newUser.roles = null;
    } else {
      newUser.roles = [{
        roleName: newUser.roles.toUpperCase()
      }];
    }
    
    console.log(newUser);
    
    this.props.registerUser(newUser, this.props.history);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      errors: nextProps.errors
    });
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
                  {/* <div className="brand-logo">
                    <strong>Ecare</strong>
                  </div> */}
                  <h4>New here?</h4>
                  <h6 className="font-weight-light">
                    Signing up is easy. It only takes a few steps
                  </h6>
                  <form
                    className="pt-3"
                    action="#"
                    onSubmit={this.submitHandler}
                  >
                    <div className="form-group">
                      <input
                        type="text"
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errors.fullName
                        })}
                        name="fullName"
                        value={this.state.fullName}
                        placeholder="Full Name"
                        onChange={this.onChangeHandler}
                      />
                      {errors.fullName && (
                        <p className="invalid-feedback">{errors.fullName}</p>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errors.username
                        })}
                        name="username"
                        value={this.state.username}
                        placeholder="Email"
                        onChange={this.onChangeHandler}
                      />
                      {errors.username && (
                        <p className="invalid-feedback">{errors.username}</p>
                      )}
                    </div>
                    <div className="form-group">
                      <select
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errors.roles
                        })}
                        name="roles"
                        onChange={this.onChangeHandler}
                      >
                        <option>Choose Account Type</option>
                        <option>Patient</option>
                        <option>Doctor</option>
                      </select>
                      {errors.roles && (
                        <p className="invalid-feedback">{errors.roles}</p>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errors.password
                        })}
                        name="password"
                        value={this.state.password}
                        placeholder="Password"
                        onChange={this.onChangeHandler}
                      />
                      {errors.password && (
                        <p className="invalid-feedback">{errors.password}</p>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errors.confirmPassword
                        })}
                        name="confirmPassword"
                        value={this.state.confirmPassword}
                        placeholder="Re-Password"
                        onChange={this.onChangeHandler}
                      />
                      {errors.confirmPassword && (
                        <p className="invalid-feedback">
                          {errors.confirmPassword}
                        </p>
                      )}
                    </div>
                    <div className="mb-4">
                      <div className="form-check">
                        <label className="form-check-label text-muted">
                          <input type="checkbox" className="form-check-input" />
                          I agree to all Terms & Conditions
                          <i className="input-helper"></i>
                        </label>
                      </div>
                    </div>
                    <div className="mt-3">
                      <button
                        type="submit"
                        className="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn"
                      >
                        SIGN UP
                      </button>
                    </div>
                    <div className="text-center mt-4 font-weight-light">
                      Already have an account?{" "}
                      <Link to="/ecare/users/login" className="text-primary">
                        Login
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

Register.propTypes = {
  errors: PropTypes.object.isRequired,
  registerUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);
