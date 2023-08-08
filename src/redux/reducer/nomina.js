import { IMPORTAR_NOMINA } from "../actions/nomina";

const INITIAL_STATE = {
  nomina: {
    loading: false,
    error: false,
    data: {},
  },
};

const contrato = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${IMPORTAR_NOMINA}_PENDING`:
      return {
        ...state,
        nomina: { ...state.nomina, error: false, loading: true },
      };
    case `${IMPORTAR_NOMINA}_REJECTED`:
      return {
        ...state,
        nomina: { ...state.nomina, error: true, loading: false },
      };
    case `${IMPORTAR_NOMINA}_FULFILLED`:
      return {
        ...state,
        nomina: {
          ...state.nomina,
          error: false,
          loading: false,
          data: action.payload.data,
        },
      };
    default:
      return state;
  }
};

export default contrato;
