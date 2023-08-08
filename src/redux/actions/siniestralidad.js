import axios from "axios";

export const GET_DATOS_SINIESTRO = "GET_DATOS_SINIESTRO";
export const GET_GESTIONES_PARTICULARES = "GET_GESTIONES_PARTICULARES";
export const GET_SECUENCIAS = "GET_SECUENCIAS";
export const GET_DIAGNOSTICOS = "GET_DIAGNOSTICOS";
export const GET_DOCUMENTACION_MEDICA_WITH_FILTER =
  "GET_DOCUMENTACION_MEDICA_WITH_FILTER";
export const GET_DOCUMENTACION_MEDICA = "GET_DOCUMENTACION_MEDICA";
export const getDatosSiniestro = (selectedAccident) => (dispatch) => {
  return dispatch({
    type: GET_DATOS_SINIESTRO,
    payload: axios
      .get(
        `denuncia/datosSiniestro?idSiniestroCabecera=${selectedAccident.idSiniestroCabecera}`
      )
      .then((response) => ({ data: response.data }))
      .catch((error) => Promise.reject(error)),
  });
};

export const getGestionesParticulares = (selectedAccident) => (dispatch) => {
  return dispatch({
    type: GET_GESTIONES_PARTICULARES,
    payload: axios
      .get(
        `denuncia/gestionesParticulares?idSiniestroCabecera=${selectedAccident.idSiniestroCabecera}`
      )
      .then((response) => ({ data: response.data }))
      .catch((error) => Promise.reject(error)),
  });
};

export const getSecuencias = (selectedAccident) => (dispatch) => {
  return dispatch({
    type: GET_SECUENCIAS,
    payload: axios
      .get(
        `denuncia/datosSecuenciasSiniestro?idSiniestroCabecera=${selectedAccident.idSiniestroCabecera}`
      )
      .then((response) => ({ data: response.data }))
      .catch((error) => Promise.reject(error)),
  });
};

export const getDiagnosticos = (selectedAccident) => (dispatch) => {
  return dispatch({
    type: GET_DIAGNOSTICOS,
    payload: axios
      .get(
        `denuncia/diagnosticosSiniestro?idSiniestroCabecera=${selectedAccident.idSiniestroCabecera}`
      )
      .then((response) => ({ data: response.data }))
      .catch((error) => Promise.reject(error)),
  });
};

export const getDocumentacionMedicaWithFilter = (values) => (dispatch) => {
  return dispatch({
    type: GET_DOCUMENTACION_MEDICA_WITH_FILTER,
    payload: axios
      .post(`denuncia/documentacionMedicaSiniestro`, values)
      .then((response) => ({ data: response.data }))
      .catch((error) => Promise.reject(error)),
  });
};
