import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Register from "./components/Register";
import Login from "./components/Login";
import Routes from "./components/Routes";

function App() {
  const [checkAuth, setcheckAuth] = useState(false);

  useEffect(() => {
    const jwtToken = localStorage.ecareJWToken;
     jwtToken &&
     setcheckAuth(true);
  });
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/ecare/users/register" component={Register} />
        <Route exact path={`/ecare/users/login`} component={Login} />
        {!checkAuth && <Route exact path={`/`} component={Login} />}
        {checkAuth && (
          <Routes />
        )}
      </Router>
    </Provider>
  );
}

export default App;
