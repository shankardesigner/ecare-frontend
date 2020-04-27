import { GET_ERRORS, SET_CURRENTUSER, LOG_OUT } from "./types";
import axios from "axios";
import jwt_decode from "jwt-decode";
import setJWToken from "../securityUtils/setJWToken";

/*export const loginUser = (user, history) => async dispatch => {
  try {
    await axios.post("/ecare/users/login", user);
    history.push("/ecare/home");
    dispatch({
      type: GET_ERRORS,
      payload: {}
    })
  } catch (err) {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
  }
};*/

export const login = loginRequest => async dispatch => {
  try {
    //post => Login Request
    const res = await axios.post("/ecare/users/login", loginRequest);
    // extact the token from res.data
    const { token } = res.data;
    //store the token in local storage
    localStorage.setItem("ecareJWToken", token);
    // set our token in header
    setJWToken(token);
    //decode the token => npm i jwt-decode
    const decodedToken = jwt_decode(token);
    //dispath to security reducer
    dispatch({
      type: SET_CURRENTUSER,
      payload: decodedToken
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const logout = history => dispatch => {
  localStorage.removeItem("ecareJWToken");
  setJWToken(false);
  dispatch({
    type: LOG_OUT,
    payload: {}
  });
};
