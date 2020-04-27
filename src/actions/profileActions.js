import axios from "axios";
import { GET_ERRORS, GET_USERS, GET_USER } from './types';

export const createUser = (newUser, role, history) => async dispatch => {
    try {        
        const res = await axios.post
        (`ecare/api/${role}/`, newUser);
        history.push(`/${role}/dashboard`);
        dispatch({
            type: GET_ERRORS,
            payload:{}
        });
    } catch (err) {        
        dispatch({
            type: GET_ERRORS,
            payload:err.response.data
        });
    }
}

export const getUserByRole = (role, userId) => async dispatch => {
    const res = await axios.get(`ecare/api/${role}/${userId}`);
    dispatch({
        type: GET_USER,
        payload: res.data
    });
}

// export const getUsers = () => async dispatch => {
//     const res = await axios.get("ecare/api/doctor/");
//     dispatch({
//         type: GET_USERS,
//         payload: res.data
//     });
// }

export const getUser = (id, history) => async dispatch => {
    const res = await axios.get(`ecare/api/doctor/${id}`);
    dispatch({
        type: GET_USER,
        payload: res.data
    })
}