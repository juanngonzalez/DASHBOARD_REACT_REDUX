import {
  GET_DATOS_AFIP,
  GET_DATOS_CONTACTO,
  GET_DATOS_PRODUCTOR,
  GET_DATOS_CONTRACTUALES,
  GET_DOMICILIO_LEGAL,
  GET_DOMICILIO_POSTAL,
} from "../actions/informacion";

const INITIAL_STATE = {
  datosGeneralesAfip: {
    loading: false,
    error: false,
    data: {},
  },
  datosContractuales: {
    loading: false,
    error: false,
    data: {},
  },
  datosDelProductor: {
    loading: false,
    error: false,
    data: {},
  },
  domicilioLegal: {
    loading: false,
    error: false,
    data: {},
  },
  domicilioPostal: {
    loading: false,
    error: false,
    data: {},
  },
  datosDeContacto: {
    loading: false,
    error: false,
    data: {},
  },
};

const informacion = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${GET_DATOS_AFIP}_PENDING`:
      return {
        ...state,
        datosGeneralesAfip: {
          ...state.datosGeneralesAfip,
          loading: true,
          error: false,
        },
      };
    case `${GET_DATOS_AFIP}_REJECTED`:
      return {
        ...state,
        datosGeneralesAfip: {
          ...state.datosGeneralesAfip,
          loading: false,
          error: true,
        },
      };
    case `${GET_DATOS_AFIP}_FULFILLED`:
      return {
        ...state,
        datosGeneralesAfip: {
          ...state.datosGeneralesAfip,
          loading: false,
          error: false,
          data: action.payload.data,
        },
      };
    case `${GET_DATOS_CONTACTO}_PENDING`:
      return {
        ...state,
        datosDeContacto: {
          ...state.datosDeContacto,
          loading: true,
          error: false,
        },
      };
    case `${GET_DATOS_CONTACTO}_REJECTED`:
      return {
        ...state,
        datosDeContacto: {
          ...state.datosDeContacto,
          loading: false,
          error: true,
        },
      };
    case `${GET_DATOS_CONTACTO}_FULFILLED`:
      return {
        ...state,
        datosDeContacto: {
          ...state.datosDeContacto,
          loading: false,
          error: false,
          data: action.payload.data,
        },
      };
    case `${GET_DATOS_PRODUCTOR}_PENDING`:
      return {
        ...state,
        datosDelProductor: {
          ...state.datosDelProductor,
          loading: true,
          error: false,
        },
      };
    case `${GET_DATOS_PRODUCTOR}_REJECTED`:
      return {
        ...state,
        datosDelProductor: {
          ...state.datosDelProductor,
          loading: false,
          error: true,
        },
      };
    case `${GET_DATOS_PRODUCTOR}_FULFILLED`:
      return {
        ...state,
        datosDelProductor: {
          ...state.datosDelProductor,
          loading: false,
          error: false,
          data: action.payload.data,
        },
      };
    case `${GET_DATOS_CONTRACTUALES}_PENDING`:
      return {
        ...state,
        datosContractuales: {
          ...state.datosContractuales,
          loading: true,
          error: false,
        },
      };
    case `${GET_DATOS_CONTRACTUALES}_REJECTED`:
      return {
        ...state,
        datosContractuales: {
          ...state.datosContractuales,
          loading: false,
          error: true,
        },
      };
    case `${GET_DATOS_CONTRACTUALES}_FULFILLED`:
      return {
        ...state,
        datosContractuales: {
          ...state.datosContractuales,
          loading: false,
          error: false,
          data: action.payload.data,
        },
      };
    case `${GET_DOMICILIO_LEGAL}_PENDING`:
      return {
        ...state,
        domicilioLegal: {
          ...state.domicilioLegal,
          loading: true,
          error: false,
        },
      };
    case `${GET_DOMICILIO_LEGAL}_REJECTED`:
      return {
        ...state,
        domicilioLegal: {
          ...state.domicilioLegal,
          loading: false,
          error: true,
        },
      };
    case `${GET_DOMICILIO_LEGAL}_FULFILLED`:
      return {
        ...state,
        domicilioLegal: {
          ...state.domicilioLegal,
          loading: false,
          error: false,
          data: action.payload.data,
        },
      };
    case `${GET_DOMICILIO_POSTAL}_PENDING`:
      return {
        ...state,
        domicilioPostal: {
          ...state.domicilioPostal,
          loading: true,
          error: false,
        },
      };
    case `${GET_DOMICILIO_POSTAL}_REJECTED`:
      return {
        ...state,
        domicilioPostal: {
          ...state.domicilioPostal,
          loading: false,
          error: true,
        },
      };
    case `${GET_DOMICILIO_POSTAL}_FULFILLED`:
      return {
        ...state,
        domicilioPostal: {
          ...state.domicilioPostal,
          loading: false,
          error: false,
          data: action.payload.data,
        },
      };
    default:
      return state;
  }
};

export default informacion;
