import axios from "axios";
export const GET_ALL_CONTRATOS = "GET_ALL_CONTRATOS";
export const DOWNLOAD_PDF_CONTRATO = "DOWNLOAD_CONTRATO";
export const SEND_CONTRATO_BY_EMAIL = "SEND_CONTRATO_BY_EMAIL";

export const getAllContratos = () => (dispatch) => {
  return dispatch({
    type: GET_ALL_CONTRATOS,
    payload: axios
      .get("contratos/tiposContrato")
      .then((response) => ({ data: response.data }))
      .catch((error) => Promise.reject(error)),
  });
};

export const downloadPDFContrato = (codigoUnificado) => (dispatch) => {
  return dispatch({
    type: DOWNLOAD_PDF_CONTRATO,
    payload: axios
      .get(`contratos/descargar?cuTipoContratoPortal=${codigoUnificado}`, {
        responseType: "blob",
      })
      .then((response) => ({ data: response.data }))
      .catch((error) => Promise.reject(error)),
  });
};

export const sendContratoByEmail = (codigoUnificado, email) => (dispatch) => {
  return dispatch({
    type: SEND_CONTRATO_BY_EMAIL,
    payload: axios
      .post(
        `contratos/enviarMail?cuTipoContratoPortal=${codigoUnificado}&emailDestinatario=${email}`
      )
      .then((response) => ({ data: response.data }))
      .catch((error) => Promise.reject(error)),
  });
};
