export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";

export const setErrorMessage = (code, message) => {
  return {
    type: SET_ERROR_MESSAGE,
    payload: { code, message },
  };
};
