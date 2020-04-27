import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { logout } from "../actions/LoginActions";
import store from "../store";

class Navbar extends Component {
  constructor(props) {
    super(props);    
  }

  render() {
    const user = this.props.currentUser;
    
    return (
      <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <a className="navbar-brand brand-logo" href="index.html">
            <img src="../images/logo.svg" alt="logo" />
          </a>
          <a className="navbar-brand brand-logo-mini" href="index.html">
            <img src="../images/logo-mini.svg" alt="logo" />
          </a>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-stretch">
          <ul className="navbar-nav navbar-nav-right">
            <li className="nav-item nav-profile dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="profileDropdown"
                href="#"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="nav-profile-img">
                  <img src="../images/faces/face1.jpg" alt="image" />
                  <span className="availability-status online" />
                </div>
                <div className="nav-profile-text">
                  <p className="mb-1 text-black">{user.fullName}</p>
                </div>
              </a>
              <div
                className="dropdown-menu navbar-dropdown"
                aria-labelledby="profileDropdown"
              >
                <a className="dropdown-item" href="#">
                  <i className="mdi mdi-cached mr-2 text-success" />
                  Activity Log
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#" onClick={() => this.props.logoutHandler()}>
                  <i className="mdi mdi-logout mr-2 text-primary" />
                  Signout
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link count-indicator dropdown-toggle"
                id="messageDropdown"
                href="#"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="mdi mdi-email-outline" />
                <span className="count-symbol bg-warning" />
              </a>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                aria-labelledby="messageDropdown"
              >
                <h6 className="p-3 mb-0">Messages</h6>
                <div className="dropdown-divider" />
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img
                      src="../images/faces/face4.jpg"
                      alt="image"
                      className="profile-pic"
                    />
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject ellipsis mb-1 font-weight-normal">
                      Mark send you a message
                    </h6>
                    <p className="text-gray mb-0">1 Minutes ago</p>
                  </div>
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img
                      src="../images/faces/face2.jpg"
                      alt="image"
                      className="profile-pic"
                    />
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject ellipsis mb-1 font-weight-normal">
                      Cregh send you a message
                    </h6>
                    <p className="text-gray mb-0">15 Minutes ago</p>
                  </div>
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img
                      src="../images/faces/face3.jpg"
                      alt="image"
                      className="profile-pic"
                    />
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject ellipsis mb-1 font-weight-normal">
                      Profile picture updated
                    </h6>
                    <p className="text-gray mb-0">18 Minutes ago</p>
                  </div>
                </a>
                <div className="dropdown-divider" />
                <h6 className="p-3 mb-0 text-center">4 new messages</h6>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link count-indicator dropdown-toggle"
                id="notificationDropdown"
                href="#"
                data-toggle="dropdown"
              >
                <i className="mdi mdi-bell-outline" />
                <span className="count-symbol bg-danger" />
              </a>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                aria-labelledby="notificationDropdown"
              >
                <h6 className="p-3 mb-0">Notifications</h6>
                <div className="dropdown-divider" />
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-success">
                      <i className="mdi mdi-calendar" />
                    </div>
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject font-weight-normal mb-1">
                      Event today
                    </h6>
                    <p className="text-gray ellipsis mb-0">
                      Just a reminder that you have an event today
                    </p>
                  </div>
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-warning">
                      <i className="mdi mdi-settings" />
                    </div>
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject font-weight-normal mb-1">
                      Settings
                    </h6>
                    <p className="text-gray ellipsis mb-0">Update dashboard</p>
                  </div>
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-info">
                      <i className="mdi mdi-link-variant" />
                    </div>
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject font-weight-normal mb-1">
                      Launch Admin
                    </h6>
                    <p className="text-gray ellipsis mb-0">New admin wow!</p>
                  </div>
                </a>
                <div className="dropdown-divider" />
                <h6 className="p-3 mb-0 text-center">See all notifications</h6>
              </div>
            </li>
            <li className="nav-item nav-logout d-none d-lg-block">
              <a className="nav-link" href="#">
                <i className="mdi mdi-power" />
              </a>
            </li>
          </ul>
          <button
            className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
            type="button"
            data-toggle="offcanvas"
          >
            <span className="mdi mdi-menu" />
          </button>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  currentUser: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  currentUser: state.security.currentUser
});

export default connect(mapStateToProps, null)(Navbar);
