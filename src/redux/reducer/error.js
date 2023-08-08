import { SET_ERROR_MESSAGE } from "../actions/error";

const INITIAL_STATE = {
  code: "",
  message: "",
};

const error = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        code: action.payload.code,
        message: action.payload.message,
      };
    default:
      return state;
  }
};

export default error;
