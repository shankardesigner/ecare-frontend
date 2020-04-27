import axios from "axios";
import { GET_ERRORS, GET_REGISTER } from './types';

export const registerUser = (newUser,history) => async dispatch => {
    try {
        const res = await axios.post("/ecare/users/register", newUser);        
        history.push("/ecare/users/login");
        dispatch({
            type: GET_ERRORS,
            payload: {}
          });
    } catch (err) {       
        dispatch({
            type: GET_ERRORS,
            payload:err.response.data
        });        
    }
};