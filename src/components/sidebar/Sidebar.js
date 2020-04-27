import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

class Sidebar extends Component {
  constructor() {
    super();
  }

  render() {
    const { currentUser } = this.props;

    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item nav-profile">
            <a href="#" className="nav-link">
              <div className="nav-profile-image">
                <img src="../images/faces/face1.jpg" alt="profile" />
                <span className="login-status online" />
              </div>
              <div className="nav-profile-text d-flex flex-column">
                <span className="font-weight-bold mb-2">{currentUser.fullName}</span>
                <span className="text-secondary text-small">
                  {currentUser.role.toLowerCase()}
                </span>
              </div>
              <i className="mdi mdi-bookmark-check text-success nav-profile-badge" />
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`/${currentUser.role.toLowerCase()}/dashboard`}>
              <span className="menu-title">Dashboard</span>
              <i className="mdi mdi-home menu-icon" />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`/${currentUser.role.toLowerCase()}/profile`}>
              <span className="menu-title">profile</span>
              <i className="mdi mdi-account-box menu-icon" />
            </Link>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="collapse"
              href="#ui-basic"
              aria-expanded="false"
              aria-controls="ui-basic"
            >
              <span className="menu-title">UI Elements</span>
              <i className="menu-arrow" />
              <i className="mdi mdi-crosshairs-gps menu-icon" />
            </a>
            <div className="collapse" id="ui-basic">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="pages/ui-features/buttons.html">
                    Buttons
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a
                    className="nav-link"
                    href="pages/ui-features/typography.html"
                  >
                    Typography
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}

Sidebar.propTypes = {
  currentUser: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  currentUser: state.security.currentUser
});

export default connect(mapStateToProps, null)(Sidebar);
