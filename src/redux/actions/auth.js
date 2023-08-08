import axios from "axios";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const GET_ACTIVE_TOKEN = "GET_ACTIVE_TOKEN";

export const login = (values) => (dispatch) => {
  return dispatch({
    type: LOGIN,
    payload: axios
      .post("login", values)
      .then((response) => ({ data: response.data }))
      .catch((error) => Promise.reject(error)),
  });
};

export const isActiveToken = () => (dispatch) => {
  return dispatch({
    type: GET_ACTIVE_TOKEN,
    payload: axios
      .get("auth/activeToken")
      .then((response) => ({ data: response.data }))
      .catch((error) => Promise.reject(error)),
  });
};

export const logout = () => {
  delete axios.defaults.headers.common["Authorization"];
  return {
    type: LOGOUT,
  };
};
