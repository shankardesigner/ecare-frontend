import React, { Component } from "react";

class Notification extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <span className="d-flex align-items-center purchase-popup">
            <p>Welcome shankardesigner! </p>
            <a href="#" target="_blank" className="btn ml-auto download-button">
              Edit your profile
            </a>
            <a href="#" target="_blank" className="btn purchase-button">
              Activate your Account
            </a>
            <i className="mdi mdi-close popup-dismiss" />
          </span>
        </div>
      </div>
    );
  }
}

export default Notification;
