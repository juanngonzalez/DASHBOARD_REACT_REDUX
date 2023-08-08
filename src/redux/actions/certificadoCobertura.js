import axios from "axios";
export const GET_TIPOS_CLAUSULAS_CERTIFICADO =
  "GET_TIPOS_CLAUSULAS_CERTIFICADO";
export const GET_NOMINAS_ACTIVAS = "GET_NOMINAS_ACTIVAS";
export const DOWNLOAD_CERTIFICADO_COBERTURA = "DOWNLOAD_CERTIFICADO_COBERTURA";
export const ENVIAR_CERTIFICADO_COBERTURA = "ENVIAR_CERTIFICADO_COBERTURA";
export const VALIDAR_IMPORTACION_NOMINAS = "VALIDAR_IMPORTACION_NOMINAS";

export const getTiposClausulasCertificado = () => (dispatch) => {
  return dispatch({
    type: GET_TIPOS_CLAUSULAS_CERTIFICADO,
    payload: axios
      .get("certificadoCobertura/tiposClausulaCertificado")
      .then((response) => ({ data: response.data }))
      .catch((error) => Promise.reject(error)),
  });
};

export const getNominasActivas = () => (dispatch) => {
  return dispatch({
    type: GET_NOMINAS_ACTIVAS,
    payload: axios
      .get("nomina/activas")
      .then((response) => ({ data: response.data }))
      .catch((error) => Promise.reject(error)),
  });
};

export const downloadCertificadoCobertura = (body) => (dispatch) => {
  return dispatch({
    type: DOWNLOAD_CERTIFICADO_COBERTURA,
    payload: axios
      .post("certificadoCobertura/descargar", body, {
        responseType: "blob",
      })
      .then((response) => ({ data: response.data }))
      .catch((error) => Promise.reject(error)),
  });
};

export const enviarCertificadoCobertura = (body) => (dispatch) => {
  return dispatch({
    type: ENVIAR_CERTIFICADO_COBERTURA,
    payload: axios
      .post("certificadoCobertura/enviarMail", body)
      .then((response) => ({ data: response.data }))
      .catch((error) => Promise.reject(error)),
  });
};

export const validarImportacionNominas = (body) => (dispatch) => {
  return dispatch({
    type: VALIDAR_IMPORTACION_NOMINAS,
    payload: axios
      .post("certificadoCobertura/validarImportacionNominas", body)
      .then((response) => ({ data: response.data }))
      .catch((error) => Promise.reject(error)),
  });
};
