import axios from "axios";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const GET_ACTIVE_TOKEN = "GET_ACTIVE_TOKEN";
export const CREATE_USER = "CREATE_USER";
export const login = (values) => (dispatch) => {
  return dispatch({
    type: LOGIN,
    payload: axios
      .post("login", {mail: values.mail, contraseña: values.password})
      .then((response) => ({ data: response.data }))
      .catch((error) => Promise.reject(error)),
  });
};

export const createUser = (values) => (dispatch) => {
  return dispatch({
    type: CREATE_USER,
    payload: axios
      .post("user", {mail: values.mail, contraseña: values.contraseña})
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
