import { GET_CUENTA_CORRIENTE } from "../actions/cuentaCorriente";

const INITIAL_STATE = {
  cuentaCorriente: {
    loading: false,
    error: false,
    data: [],
  },
};

const cuentaCorriente = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${GET_CUENTA_CORRIENTE}_PENDING`:
      return {
        ...state,
        cuentaCorriente: {
          loading: true,
          error: false,
        },
      };
    case `${GET_CUENTA_CORRIENTE}_REJECTED`:
      return {
        ...state,
        cuentaCorriente: {
          loading: false,
          error: true,
        },
      };
    case `${GET_CUENTA_CORRIENTE}_FULFILLED`:
      return {
        ...state,
        cuentaCorriente: {
          loading: false,
          error: false,
          data: action.payload.data,
        },
      };

    default:
      return state;
  }
};

export default cuentaCorriente;
