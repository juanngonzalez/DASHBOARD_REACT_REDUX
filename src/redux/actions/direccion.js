import axios from "axios";
export const GET_PROVINCIAS = "GET_PROVINCIAS";
export const GET_LOCALIDADES = "GET_LOCALIDADES";
export const GET_CALLE = "GET_CALLE";
export const GET_CODIGO_POSTAL = "GET_CODIGO_POSTAL";

export const getCodigoPostal =
  (provincia, localidad, numero, calle) => (dispatch) => {
    return dispatch({
      type: GET_CODIGO_POSTAL,
      payload: axios
        .get(
          `contratos/codigoPostal?provincia=${provincia}&localidad=${localidad}&calle=${calle}&numero=${numero}`
        )
        .then((response) => ({ data: response.data }))
        .catch((error) => Promise.reject(error)),
    });
  };

export const getCalle = (provincia, localidad) => (dispatch) => {
  return dispatch({
    type: GET_CALLE,
    payload: axios
      .get(`contratos/calles?provincia=${provincia}&localidad=${localidad}`)
      .then((response) => ({ data: response.data }))
      .catch((error) => Promise.reject(error)),
  });
};
export const getProvincias = (pais) => (dispatch) => {
  return dispatch({
    type: GET_PROVINCIAS,
    payload: axios
      .get(`contratos/provincias`)
      .then((response) => ({ data: response.data }))
      .catch((error) => Promise.reject(error)),
  });
};

export const getLocalidades = (provincia) => (dispatch) => {
  return dispatch({
    type: GET_LOCALIDADES,
    payload: axios
      .get(`contratos/localidades?provincia=${provincia}`)
      .then((response) => ({ data: response.data }))
      .catch((error) => Promise.reject(error)),
  });
};
