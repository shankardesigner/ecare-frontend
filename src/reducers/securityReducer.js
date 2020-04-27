import { SET_CURRENTUSER, LOG_OUT } from "../actions/types";

const initialState = {
  currentUser: {},
  validToken: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENTUSER:
      return {
        ...state,
        validToken: action.payload ? true : false,
        currentUser: action.payload
      };
    case LOG_OUT:
      return (state = action.payload);
      
    default:
      return state;
  }
}
