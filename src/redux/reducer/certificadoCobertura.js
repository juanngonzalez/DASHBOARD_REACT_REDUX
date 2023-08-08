import {
  GET_TIPOS_CLAUSULAS_CERTIFICADO,
  GET_NOMINAS_ACTIVAS,
  DOWNLOAD_CERTIFICADO_COBERTURA,
  ENVIAR_CERTIFICADO_COBERTURA,
  VALIDAR_IMPORTACION_NOMINAS,
} from "../actions/certificadoCobertura";

const INITIAL_STATE = {
  clausulas: {
    loading: false,
    error: false,
    data: [],
  },
  nominaActiva: {
    loading: false,
    error: false,
    data: [],
  },
  descargar: { loading: false, error: false, data: {} },
  enviarMail: {
    loading: false,
    error: false,
    data: {},
  },
  validarNominas: {
    loading: false,
    error: false,
    data: {},
  },
};

const certificadoCobertura = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${GET_TIPOS_CLAUSULAS_CERTIFICADO}_PENDING`:
      return {
        ...state,
        clausulas: { ...state.clausulas, error: false, loading: true },
      };
    case `${GET_TIPOS_CLAUSULAS_CERTIFICADO}_REJECTED`:
      return {
        ...state,
        clausulas: { ...state.clausulas, error: true, loading: false },
      };
    case `${GET_TIPOS_CLAUSULAS_CERTIFICADO}_FULFILLED`:
      return {
        ...state,
        clausulas: {
          ...state.clausulas,
          error: false,
          loading: false,
          data: action.payload.data,
        },
      };
    case `${GET_NOMINAS_ACTIVAS}_PENDING`:
      return {
        ...state,
        nominaActiva: { ...state.nominaActiva, error: false, loading: true },
      };
    case `${GET_NOMINAS_ACTIVAS}_REJECTED`:
      return {
        ...state,
        nominaActiva: { ...state.nominaActiva, error: true, loading: false },
      };
    case `${GET_NOMINAS_ACTIVAS}_FULFILLED`:
      return {
        ...state,
        nominaActiva: {
          ...state.nominaActiva,
          error: false,
          loading: false,
          data: action.payload.data,
        },
      };
    case `${DOWNLOAD_CERTIFICADO_COBERTURA}_PENDING`:
      return {
        ...state,
        descargar: { ...state.descargar, error: false, loading: true },
      };
    case `${DOWNLOAD_CERTIFICADO_COBERTURA}_REJECTED`:
      return {
        ...state,
        descargar: { ...state.descargar, error: true, loading: false },
      };
    case `${DOWNLOAD_CERTIFICADO_COBERTURA}_FULFILLED`:
      return {
        ...state,
        descargar: {
          ...state.descargar,
          error: false,
          loading: false,
          data: action.payload.data,
        },
      };
    case `${ENVIAR_CERTIFICADO_COBERTURA}_PENDING`:
      return {
        ...state,
        enviarMail: { ...state.enviarMail, error: false, loading: true },
      };
    case `${ENVIAR_CERTIFICADO_COBERTURA}_REJECTED`:
      return {
        ...state,
        enviarMail: { ...state.enviarMail, error: true, loading: false },
      };
    case `${ENVIAR_CERTIFICADO_COBERTURA}_FULFILLED`:
      return {
        ...state,
        enviarMail: {
          ...state.enviarMail,
          error: false,
          loading: false,
          data: action.payload.data,
        },
      };
    case `${VALIDAR_IMPORTACION_NOMINAS}_PENDING`:
      return {
        ...state,
        validarNominas: {
          ...state.validarNominas,
          error: false,
          loading: true,
        },
      };
    case `${VALIDAR_IMPORTACION_NOMINAS}_REJECTED`:
      return {
        ...state,
        validarNominas: {
          ...state.validarNominas,
          error: true,
          loading: false,
        },
      };
    case `${VALIDAR_IMPORTACION_NOMINAS}_FULFILLED`:
      return {
        ...state,
        validarNominas: {
          ...state.validarNominas,
          error: false,
          loading: false,
          data: action.payload.data,
        },
      };
    default:
      return state;
  }
};

export default certificadoCobertura;
