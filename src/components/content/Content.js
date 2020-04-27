import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { getUserByRole } from "../../actions/profileActions";
import { Link } from 'react-router-dom';

class Content extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    const user  = this.props.currentUser;   
    if(user) {
      this.props.getUserByRole(user.role.toLowerCase(), user.id);      
    }
  };

  render() {
    // const { users } = this.props.users;
    
    // const doctorsList = users.map(user => (
    //   <tr key={user.doctorId}>
    //     <td>{`${user.fname} ${user.mname ? user.mname : ""} ${user.lname}`}</td>
    //     <td>{user.dateOfBirth}</td>
    //     <td>{user.gender}</td>
    //     <td>{user.address.country}</td>
    //     <td>{user.address.mobileNo}</td>
    //     <td>
    //       <div className="template-demo">
    //         <Link to={`/update/${user.doctorId}`} className="btn btn-md btn-outline-warning">
    //           Edit
    //         </Link>
    //         <button type="button" className="btn btn-md btn-outline-danger">
    //           Delete
    //         </button>
    //       </div>
    //     </td>
    //   </tr>
    // ));
    return (
      <>
        <div className="page-header">
          <h3 className="page-title">
            <span className="page-title-icon bg-gradient-primary text-white mr-2">
              <i className="mdi mdi-home" />
            </span>
            Dashboard
          </h3>
          <nav aria-label="breadcrumb">
            <ul className="breadcrumb">
              <li className="breadcrumb-item active" aria-current="page">
                <span />
                Overview
                <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle" />
              </li>
            </ul>
          </nav>
        </div>
        <div className="row">
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card bg-gradient-danger card-img-holder text-white">
              <div className="card-body">
                <img
                  src="../images/dashboard/circle.svg"
                  className="card-img-absolute"
                  alt="circle-image"
                />
                <h4 className="font-weight-normal mb-3">
                  Weekly Sales
                  <i className="mdi mdi-chart-line mdi-24px float-right" />
                </h4>
                <h2 className="mb-5">$ 15,0000</h2>
                <h6 className="card-text">Increased by 60%</h6>
              </div>
            </div>
          </div>
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card bg-gradient-info card-img-holder text-white">
              <div className="card-body">
                <img
                  src="../images/dashboard/circle.svg"
                  className="card-img-absolute"
                  alt="circle-image"
                />
                <h4 className="font-weight-normal mb-3">
                  Weekly Orders
                  <i className="mdi mdi-bookmark-outline mdi-24px float-right" />
                </h4>
                <h2 className="mb-5">45,6334</h2>
                <h6 className="card-text">Decreased by 10%</h6>
              </div>
            </div>
          </div>
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card bg-gradient-success card-img-holder text-white">
              <div className="card-body">
                <img
                  src="../images/dashboard/circle.svg"
                  className="card-img-absolute"
                  alt="circle-image"
                />
                <h4 className="font-weight-normal mb-3">
                  Visitors Online
                  <i className="mdi mdi-diamond mdi-24px float-right" />
                </h4>
                <h2 className="mb-5">95,5741</h2>
                <h6 className="card-text">Increased by 5%</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Users</h4>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Assignee</th>
                        <th>Date of birth</th>
                        <th>gender</th>
                        <th>Country</th>
                        <th>MobileNo</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    {/* <tbody>{doctorsList}</tbody> */}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

Content.propTypes = {
  user: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
  getUserByRole: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user,
  currentUser: state.security.currentUser
});

export default connect(
  mapStateToProps,
  {getUserByRole}
)(Content);
