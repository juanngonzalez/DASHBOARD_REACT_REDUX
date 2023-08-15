import { LOGIN, LOGOUT, GET_ACTIVE_TOKEN, CREATE_USER } from "../actions/auth";

const INITIAL_STATE = {
  authenticated: false,
  loading: false,
  error: false,
  data: {},
  activeToken: {
    loading: false,
    error: false,
    data: {},
  },
  createUser: {
    loading: false,
    error: false,
    data: {},
  },
};

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${LOGIN}_PENDING`:
      return {
        ...state,
        error: false,
        loading: true,
      };
    case `${LOGIN}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true,
        authenticated: false,
      };
    case `${LOGIN}_FULFILLED`:
      return {
        ...state,
        error: false,
        loading: false,
        authenticated: true,
        data: action.payload.data,
      };
    case `${CREATE_USER}_PENDING`:
      return {
        ...state,
        createUser: { ...state.createUser, error: false, loading: true },
      };
    case `${CREATE_USER}_REJECTED`:
      return {
        ...state,
        createUser: { ...state.createUser, error: true, loading: false },
      };
    case `${CREATE_USER}_FULFILLED`:
      return {
        ...state,
        createUser: {
          ...state.createUser,
          error: false,
          loading: false,
          data: action.payload.data,
        },
      };
    case `${GET_ACTIVE_TOKEN}_PENDING`:
      return {
        ...state,
        activeToken: { ...state.activeToken, error: false, loading: true },
      };
    case `${GET_ACTIVE_TOKEN}_REJECTED`:
      return {
        ...state,
        activeToken: { ...state.activeToken, error: true, loading: false },
      };
    case `${GET_ACTIVE_TOKEN}_FULFILLED`:
      return {
        ...state,
        activeToken: {
          ...state.activeToken,
          error: false,
          loading: false,
          data: action.payload.data,
        },
      };
    case LOGOUT:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default auth;
