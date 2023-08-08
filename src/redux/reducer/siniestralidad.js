import {
  GET_DATOS_SINIESTRO,
  GET_GESTIONES_PARTICULARES,
  GET_DIAGNOSTICOS,
  GET_SECUENCIAS,
  GET_DOCUMENTACION_MEDICA,
  GET_DOCUMENTACION_MEDICA_WITH_FILTER,
} from "../actions/siniestralidad";

const INITIAL_STATE = {
  siniestros: {
    loading: false,
    error: false,
    data: {},
  },
  particulares: {
    loading: false,
    error: false,
    data: [],
  },
  secuencias: {
    loading: false,
    error: false,
    data: [],
  },
  diagnosticos: {
    loading: false,
    error: false,
    data: [],
  },
  documentacionMedica: {
    loading: false,
    error: false,
    data: [],
  },
};

const siniestralidad = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${GET_DATOS_SINIESTRO}_PENDING`:
      return {
        ...state,
        siniestros: { ...state.siniestros, error: false, loading: true },
      };
    case `${GET_DATOS_SINIESTRO}_REJECTED`:
      return {
        ...state,
        siniestros: { ...state.siniestros, error: true, loading: false },
      };
    case `${GET_DATOS_SINIESTRO}_FULFILLED`:
      return {
        ...state,
        siniestros: {
          ...state.siniestros,
          error: false,
          loading: false,
          data: action.payload.data,
        },
      };
    case `${GET_GESTIONES_PARTICULARES}_PENDING`:
      return {
        ...state,
        particulares: { ...state.particulares, error: false, loading: true },
      };
    case `${GET_GESTIONES_PARTICULARES}_REJECTED`:
      return {
        ...state,
        particulares: { ...state.particulares, error: true, loading: false },
      };
    case `${GET_GESTIONES_PARTICULARES}_FULFILLED`:
      return {
        ...state,
        particulares: {
          ...state.particulares,
          error: false,
          loading: false,
          data: action.payload.data,
        },
      };
    case `${GET_SECUENCIAS}_PENDING`:
      return {
        ...state,
        secuencias: { ...state.secuencias, error: false, loading: true },
      };
    case `${GET_SECUENCIAS}_REJECTED`:
      return {
        ...state,
        secuencias: { ...state.secuencias, error: true, loading: false },
      };
    case `${GET_SECUENCIAS}_FULFILLED`:
      return {
        ...state,
        secuencias: {
          ...state.secuencias,
          error: false,
          loading: false,
          data: action.payload.data,
        },
      };
    case `${GET_DIAGNOSTICOS}_PENDING`:
      return {
        ...state,
        diagnosticos: { ...state.diagnosticos, error: false, loading: true },
      };
    case `${GET_DIAGNOSTICOS}_REJECTED`:
      return {
        ...state,
        diagnosticos: { ...state.diagnosticos, error: true, loading: false },
      };
    case `${GET_DIAGNOSTICOS}_FULFILLED`:
      return {
        ...state,
        diagnosticos: {
          ...state.diagnosticos,
          error: false,
          loading: false,
          data: action.payload.data,
        },
      };
    case `${GET_DOCUMENTACION_MEDICA}_PENDING`:
      return {
        ...state,
        documentacionMedica: {
          ...state.documentacionMedica,
          error: false,
          loading: true,
        },
      };
    case `${GET_DOCUMENTACION_MEDICA}_REJECTED`:
      return {
        ...state,
        documentacionMedica: {
          ...state.documentacionMedica,
          error: true,
          loading: false,
        },
      };
    case `${GET_DOCUMENTACION_MEDICA}_FULFILLED`:
      return {
        ...state,
        documentacionMedica: {
          ...state.documentacionMedica,
          error: false,
          loading: false,
          data: action.payload.data,
        },
      };
    case `${GET_DOCUMENTACION_MEDICA_WITH_FILTER}_PENDING`:
      return {
        ...state,
        documentacionMedica: {
          ...state.documentacionMedica,
          error: false,
          loading: true,
        },
      };
    case `${GET_DOCUMENTACION_MEDICA_WITH_FILTER}_REJECTED`:
      return {
        ...state,
        documentacionMedica: {
          ...state.documentacionMedica,
          error: true,
          loading: false,
        },
      };
    case `${GET_DOCUMENTACION_MEDICA_WITH_FILTER}_FULFILLED`:
      return {
        ...state,
        documentacionMedica: {
          ...state.documentacionMedica,
          error: false,
          loading: false,
          data: action.payload.data,
        },
      };

    default:
      return state;
  }
};

export default siniestralidad;
