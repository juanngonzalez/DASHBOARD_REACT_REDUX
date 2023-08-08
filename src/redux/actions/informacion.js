import axios from "axios";

export const GET_DATOS_AFIP = "GET_DATOS_AFIP";
export const GET_DATOS_CONTRACTUALES = "GET_DATOS_CONTRACTUALES";
export const GET_DATOS_PRODUCTOR = "GET_DATOS_PRODUCTOR";
export const GET_DOMICILIO_LEGAL = "GET_DOMICILIO_LEGAL";
export const GET_DOMICILIO_POSTAL = "GET_DOMICILIO_POSTAL";
export const GET_DATOS_CONTACTO = "GET_DATOS_CONTACTO";

export const getDatosGeneralesAfip = () => (dispatch) => {
  return dispatch({
    type: GET_DATOS_AFIP,
    payload: axios
      .get(`Empleador/datosAfip`)
      .then((response) => ({ data: response.data }))
      .catch((error) => Promise.reject(error)),
  });
};

export const getDatosContractuales = () => (dispatch) => {
  return dispatch({
    type: GET_DATOS_CONTRACTUALES,
    payload: axios
      .get(`Empleador/datosContractual`)
      .then((response) => ({ data: response.data }))
      .catch((error) => Promise.reject(error)),
  });
};
export const getDatosDelProductor = () => (dispatch) => {
  return dispatch({
    type: GET_DATOS_PRODUCTOR,
    payload: axios
      .get(`Empleador/datosProductor`)
      .then((response) => ({ data: response.data }))
      .catch((error) => Promise.reject(error)),
  });
};
export const getDomicilioLegal = () => (dispatch) => {
  return dispatch({
    type: GET_DOMICILIO_LEGAL,
    payload: axios
      .get(`Empleador/domicilioLegal`)
      .then((response) => ({ data: response.data }))
      .catch((error) => Promise.reject(error)),
  });
};
export const getDomicilioPostal = () => (dispatch) => {
  return dispatch({
    type: GET_DOMICILIO_POSTAL,
    payload: axios
      .get(`Empleador/domicilioPostal`)
      .then((response) => ({ data: response.data }))
      .catch((error) => Promise.reject(error)),
  });
};
export const getDatosDeContacto = () => (dispatch) => {
  return dispatch({
    type: GET_DATOS_CONTACTO,
    payload: axios
      .get(`Empleador/datosContacto`)
      .then((response) => ({ data: response.data }))
      .catch((error) => Promise.reject(error)),
  });
};
