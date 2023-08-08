import axios from "axios";
export const IMPORTAR_NOMINA = "IMPORTAR_NOMINA";

export const importarNomina = (body) => (dispatch) => {
  return dispatch({
    type: IMPORTAR_NOMINA,
    payload: axios
      .post("nomina/importar", body)
      .then((response) => ({ data: response.data }))
      .catch((error) => Promise.reject(error)),
  });
};
