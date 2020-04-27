import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from 'classnames';
import { createUser, getUserByRole } from "../../../actions/profileActions";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      mname: "",
      lname: "",
      email: "",
      dateOfBirth: "",
      fatherName: "",
      motherName: "",
      grandFatherName: "",
      grandMotherName: "",
      gender: "",
      country: "",
      state: "",
      zone: "",
      district: "",
      wardNo: "",
      village: "",
      tole: "",
      mobileNo: "",
      telephone: "",
      loadUser: false,
      errors: {},
      user: {}
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  //lifecyclehooks
  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      })
    }
  }

  componentDidMount() {
    const userId = this.props.match.params.id;
    
    // if(userId != null) {
    //   this.props.getUserByRole(userId, this.props.history);
    //   this.setState({
    //     loadUser: true
    //   });
    // }
  }

  // componentWillMount() {
  //   user: this.props.getUsers();
  // }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmitHandler(e) {
    e.preventDefault();
    const newUser = {
      fname: this.state.fname,
      mname: this.state.mname,
      lname: this.state.lname,
      email: this.state.email,
      dateOfBirth: this.state.dateOfBirth,
      fatherName: this.state.fatherName,
      motherName: this.state.motherName,
      grandFatherName: this.state.grandFatherName,
      grandMotherName: this.state.grandMotherName,
      gender: this.state.gender,
      address: {
        country: this.state.country,
        state: this.state.state,
        zone: this.state.zone,
        district: this.state.district,
        wardNo: this.state.wardNo,
        village: this.state.village,
        tole: this.state.tole,
        mobileNo: this.state.mobileNo,
        telephone: this.state.telephone
      }
    };
    this.props.createUser(newUser, this.props.currentUser.role.toLowerCase(), this.props.history);
  }

  render() {
    const { errors } = this.state;
    
    return (
      <div className="row">
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Personal Details</h4>
              <p className="card-description">Your personal info</p>
              <form
                className="forms-sample user-form"
                onSubmit={this.onSubmitHandler}
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="fname">First Name</label>
                      <input
                        type="text"
                        className={classnames("form-control", {"is-invalid" : errors.fname})}
                        id="fname"
                        name="fname"
                        placeholder="First Name"
                        value={this.state.fname}
                        onChange={this.onChangeHandler}
                      />
                      {
                        errors.fname && (
                          <p className="invalid-feedback">{errors.fname}</p>
                        )
                      }
                    </div>
                    <div className="form-group">
                      <label htmlFor="mname">Middle Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="mname"
                        name="mname"
                        placeholder="Middle Name"
                        value={this.state.mname}
                        onChange={this.onChangeHandler}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lname">Last Name</label>
                      <input
                        type="text"
                        className={classnames("form-control",{"is-invalid": errors.lname})}
                        id="lname"
                        name="lname"
                        placeholder="Last Name"
                        value={this.state.lname}
                        onChange={this.onChangeHandler}
                      />
                      {
                        errors.lname && (
                          <p className="invalid-feedback">{errors.lname}</p>
                        )
                      }
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email address</label>
                      <input
                        type="email"
                        className={classnames("form-control", {"is-invalid": errors.email})}
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.onChangeHandler}
                      />
                      {
                        errors.email && (
                          <p className="invalid-feedback">{errors.email}</p>
                        )
                      }
                    </div>
                    <div className="form-group">
                      <label htmlFor="dateOfBirth">Date Of Birth</label>
                      <input
                        type="date"
                        className={classnames("form-control",{"is-invalid": errors.dateOfBirth})}
                        id="dateOfBirth"
                        name="dateOfBirth"
                        placeholder="Date of birth"
                        value={this.state.dateOfBirth}
                        onChange={this.onChangeHandler}
                      />
                      {
                        errors.dateOfBirth && (
                          <p className="invalid-feedback">{errors.dateOfBirth}</p>
                        )
                      }
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="fatherName">Father Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="fatherName"
                        name="fatherName"
                        placeholder="Father Name"
                        value={this.state.fatherName}
                        onChange={this.onChangeHandler}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="motherName">Mother Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="motherName"
                        name="motherName"
                        placeholder="Mother Name"
                        value={this.state.motherName}
                        onChange={this.onChangeHandler}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="grandFatherName">Grand Father Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="grandFatherName"
                        name="grandFatherName"
                        placeholder="Grand Father Name"
                        value={this.state.grandFatherName}
                        onChange={this.onChangeHandler}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="grandMotherName">Grand Mother Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="grandMotherName"
                        name="grandMotherName"
                        placeholder="Grand Mother Name"
                        value={this.state.grandMotherName}
                        onChange={this.onChangeHandler}
                      />
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">Gender</label>
                      <div className="col-sm-3">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              type="radio"
                              className="form-check-input"
                              name="gender"
                              id="membershipRadios1"
                              value="Male"
                              onChange={this.onChangeHandler}
                            />
                            Male
                            <i className="input-helper" />
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              type="radio"
                              className="form-check-input"
                              name="gender"
                              id="membershipRadios2"
                              value="Female"
                              onChange={this.onChangeHandler}
                            />
                            Female
                            <i className="input-helper" />
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              type="radio"
                              className="form-check-input"
                              name="gender"
                              id="membershipRadios3"
                              value="Other"
                              onChange={this.onChangeHandler}
                            />
                            Other
                            <i className="input-helper" />
                          </label>
                        </div>
                      </div>
                      {
                        errors.gender && (
                          <p className="invalid-feedback">{errors.gender}</p>
                        )
                      }
                    </div>
                  </div>
                </div>
                <h4 className="card-title">Address Details</h4>
                <p className="card-description">Your address info</p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="country">Country Name</label>
                      <input
                        type="text"
                        className={classnames("form-control", {"is-invalid" : errors['address.country']})}
                        id="country"
                        name="country"
                        placeholder="Country Name"
                        value={this.state.country}
                        onChange={this.onChangeHandler}
                      />
                      {
                        errors['address.country'] && (
                          <p className="invalid-feedback">{errors['address.country']}</p>
                        )
                      }
                    </div>
                    <div className="form-group">
                      <label htmlFor="state">State Name</label>
                      <input
                        type="text"
                        className={classnames("form-control",{"is-invalid" : errors['address.state']})}
                        id="state"
                        name="state"
                        placeholder="State Name"
                        value={this.state.state}
                        onChange={this.onChangeHandler}
                      />
                      {
                        errors['address.state'] && (
                          <p className="invalid-feedback">{errors['address.state']}</p>
                        )
                      }
                    </div>
                    <div className="form-group">
                      <label htmlFor="zone">zone Name</label>
                      <input
                        type="text"
                        className={classnames("form-control",{"is-invalid" : errors['address.zone']})}
                        id="zone"
                        name="zone"
                        placeholder="zone Name"
                        value={this.state.zone}
                        onChange={this.onChangeHandler}
                      />
                      {
                        errors['address.zone'] && (
                          <p className="invalid-feedback">{errors['address.zone']}</p>
                        )
                      }
                    </div>
                    <div className="form-group">
                      <label htmlFor="district">district Name</label>
                      <input
                        type="text"
                        className={classnames("form-control",{"is-invalid" : errors['address.district']})}
                        id="district"
                        name="district"
                        placeholder="district Name"
                        value={this.state.district}
                        onChange={this.onChangeHandler}
                      />
                      {
                        errors['address.district'] && (
                          <p className="invalid-feedback">{errors['address.district']}</p>
                        )
                      }
                    </div>
                    <div className="form-group">
                      <label htmlFor="wardNo">ward No</label>
                      <input
                        type="text"
                        className={classnames("form-control", {
                          "is-invalid" : errors['address.wardNo']
                        })}
                        id="wardNo"
                        name="wardNo"
                        placeholder="ward No"
                        value={this.state.wardNo}
                        onChange={this.onChangeHandler}
                      />
                      {
                        errors['address.wardNo'] && (
                          <p className="invalid-feedback">{errors['address.wardNo']}</p>
                        )
                      }
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="village">Village Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="village"
                        name="village"
                        placeholder="Village Name"
                        value={this.state.village}
                        onChange={this.onChangeHandler}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="tole">tole Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="tole"
                        name="tole"
                        placeholder="tole Name"
                        value={this.state.tole}
                        onChange={this.onChangeHandler}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="mobileNo">Mobile Number</label>
                      <input
                        type="text"
                        className={classnames("form-control",{"is-invalid":errors['address.mobileNo']})}
                        id="mobileNo"
                        name="mobileNo"
                        placeholder="mobile number"
                        value={this.state.mobileNo}
                        onChange={this.onChangeHandler}
                      />
                      {
                        errors['address.mobileNo'] && (
                          <p className="invalid-feedback">{errors['address.mobileNo']}</p>
                        )
                      }
                    </div>
                    <div className="form-group">
                      <label htmlFor="telephone">telephone</label>
                      <input
                        type="text"
                        className={classnames("form-control", {
                          "is-error": errors['address.telephone']
                        })}
                        id="telephone"
                        name="telephone"
                        placeholder="telephone"
                        value={this.state.telephone}
                        onChange={this.onChangeHandler}
                      />
                      <p>{errors['address.telephone']}</p>
                    </div>
                  </div>
                </div>
                <input
                  type="submit"
                  value="Save Account"
                  className="btn btn-success"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  createUser: PropTypes.func.isRequired,
  getUserByRole: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  user: state.user,
  currentUser : state.security.currentUser
});

const mapDispatchToProps = { createUser, getUserByRole };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
