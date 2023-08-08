import {
  GET_ALL_CONTRATOS,
  DOWNLOAD_PDF_CONTRATO,
  SEND_CONTRATO_BY_EMAIL,
} from "../actions/contrato";

const INITIAL_STATE = {
  contratos: {
    loading: false,
    error: false,
    data: [],
  },
  contratoPDF: {
    loading: false,
    error: false,
    data: {},
  },
  contratoEmail: {
    loading: false,
    error: false,
    data: {},
  },
};

const contrato = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${GET_ALL_CONTRATOS}_PENDING`:
      return {
        ...state,
        contratos: { ...state.contratos, error: false, loading: true },
      };
    case `${GET_ALL_CONTRATOS}_REJECTED`:
      return {
        ...state,
        contratos: { ...state.contratos, error: true, loading: false },
      };
    case `${GET_ALL_CONTRATOS}_FULFILLED`:
      return {
        ...state,
        contratos: {
          ...state.contratos,
          error: false,
          loading: false,
          data: action.payload.data,
        },
      };

    case `${DOWNLOAD_PDF_CONTRATO}_PENDING`:
      return {
        ...state,
        contratoPDF: { ...state.contratoPDF, error: false, loading: true },
      };
    case `${DOWNLOAD_PDF_CONTRATO}_REJECTED`:
      return {
        ...state,
        contratoPDFs: { ...state.contratoPDF, error: true, loading: false },
      };
    case `${DOWNLOAD_PDF_CONTRATO}_FULFILLED`:
      return {
        ...state,
        contratoPDF: {
          ...state.contratoPDF,
          error: false,
          loading: false,
          data: action.payload,
        },
      };

    case `${SEND_CONTRATO_BY_EMAIL}_PENDING`:
      return {
        ...state,
        contratoEmail: { ...state.contratoEmail, error: false, loading: true },
      };
    case `${SEND_CONTRATO_BY_EMAIL}_REJECTED`:
      return {
        ...state,
        contratoEmail: { ...state.contratoEmail, error: true, loading: false },
      };
    case `${SEND_CONTRATO_BY_EMAIL}_FULFILLED`:
      return {
        ...state,
        contratoEmail: {
          ...state.contratoEmail,
          error: false,
          loading: false,
          data: action.payload,
        },
      };

    default:
      return state;
  }
};

export default contrato;
