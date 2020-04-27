import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Content from "./content/Content";
import Profile from "./content/Profile/Profile";
import { SET_CURRENTUSER } from "../actions/types";
import store from "../store";
import setJWToken from "../securityUtils/setJWToken";
import { logout, login } from "../actions/LoginActions";
import Login from "./Login";
import Navbar from "./Navbar";
import Sidebar from "./sidebar/Sidebar";
import Notification from "./content/notification/Notification";

import jwt_decode from "jwt-decode";

const Routes = (props) => {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {  
    detectAuth();
    // setIsAuth(true);
  });

  function detectAuth() {
    const jwtToken = localStorage.ecareJWToken;

    if (jwtToken) {
      setJWToken(jwtToken);
      const decoded_jwtToken = jwt_decode(jwtToken);
      store.dispatch({
        type: SET_CURRENTUSER,
        payload: decoded_jwtToken
      });
      setIsAuth(true);

      const currentTime = Date.now() / 1000;

      if (decoded_jwtToken.exp < currentTime) {
        logOut();
      }
    } else {
      setIsAuth(false);
    }
  }

  function logOut() {
    store.dispatch(logout());
    setIsAuth(false);
    window.location.href = "/ecare/users/login";
  }

  return (
    <>
      {/* private routes */}
      {isAuth && (
        <div className="App container-scroller">
          <Navbar logoutHandler={logOut} />
          <div className="container-fluid page-body-wrapper">
            <Sidebar />
            <div className="main-panel">
              <div className="content-wrapper">
                <Notification />
                <Route exact path={`/:role/dashboard`} component={Content} />
                <Route exact path={`/:role/update/:id`} component={Profile} />
                <Route exact path={`/:role/profile`} component={Profile} />
              </div>
            </div>
          </div>
        </div>
      )}
      {/* </Switch> */}
    </>
  );
};

const mapStateToProps = state => ({
  user: state.security.currentUser
});

export default connect(
  mapStateToProps,
  null
)(Routes);
