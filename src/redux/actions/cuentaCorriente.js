import axios from "axios";
export const GET_CUENTA_CORRIENTE = "GET_CUENTA_CORRIENTE";
export const getCuentaCorriente = () => (dispatch) => {
  return dispatch({
    type: GET_CUENTA_CORRIENTE,
    payload: axios
      .get(`Empleador/getCuentaCorriente?fechaDesde=${null}&fechaHasta=${null}`)
      .then((response) => ({ data: response.data }))
      .catch((error) => Promise.reject(error)),
  });
};

export const getCuentaCorrienteWithFilter =
  (fechaDesde, fechaHasta) => (dispatch) => {
    return dispatch({
      type: GET_CUENTA_CORRIENTE,
      payload: axios
        .get(
          `Empleador/getCuentaCorriente?fechaDesde=${fechaDesde}&fechaHasta=${fechaHasta}`
        )
        .then((response) => ({ data: response.data }))
        .catch((error) => Promise.reject(error)),
    });
  };
