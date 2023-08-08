import {
  GET_LOCALIDADES,
  GET_PROVINCIAS,
  GET_CALLE,
  GET_CODIGO_POSTAL,
} from "../actions/direccion";

const INITIAL_STATE = {
  codigoPostal: {
    loading: false,
    error: false,
    data: [],
  },
  provincias: {
    loading: false,
    error: false,
    data: [],
  },
  localidades: {
    loading: false,
    error: false,
    data: [],
  },
  calle: {
    loading: false,
    error: false,
    data: [],
  },
};

const direccion = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${GET_PROVINCIAS}_PENDING`:
      return {
        ...state,
        provincias: { ...state.provincias, error: false, loading: true },
      };
    case `${GET_PROVINCIAS}_REJECTED`:
      return {
        ...state,
        provincias: { ...state.provincias, error: true, loading: false },
      };
    case `${GET_PROVINCIAS}_FULFILLED`:
      return {
        ...state,
        provincias: {
          ...state.provincias,
          error: false,
          loading: false,
          data: action.payload.data,
        },
      };

    case `${GET_LOCALIDADES}_PENDING`:
      return {
        ...state,
        localidades: { ...state.localidades, error: false, loading: true },
      };
    case `${GET_LOCALIDADES}_REJECTED`:
      return {
        ...state,
        localidades: { ...state.localidades, error: true, loading: false },
      };
    case `${GET_LOCALIDADES}_FULFILLED`:
      return {
        ...state,
        localidades: {
          ...state.localidades,
          error: false,
          loading: false,
          data: action.payload.data,
        },
      };
    case `${GET_CALLE}_PENDING`:
      return {
        ...state,
        calle: { ...state.calle, error: false, loading: true },
      };
    case `${GET_CALLE}_REJECTED`:
      return {
        ...state,
        calle: { ...state.calle, error: true, loading: false },
      };
    case `${GET_CALLE}_FULFILLED`:
      return {
        ...state,
        calle: {
          ...state.calle,
          error: false,
          loading: false,
          data: action.payload.data,
        },
      };
    case `${GET_CODIGO_POSTAL}_PENDING`:
      return {
        ...state,
        codigoPostal: { ...state.codigoPostal, error: false, loading: true },
      };
    case `${GET_CODIGO_POSTAL}_REJECTED`:
      return {
        ...state,
        codigoPostal: { ...state.codigoPostal, error: true, loading: false },
      };
    case `${GET_CODIGO_POSTAL}_FULFILLED`:
      return {
        ...state,
        codigoPostal: {
          ...state.codigoPostal,
          error: false,
          loading: false,
          data: action.payload.data,
        },
      };
    default:
      return state;
  }
};

export default direccion;
