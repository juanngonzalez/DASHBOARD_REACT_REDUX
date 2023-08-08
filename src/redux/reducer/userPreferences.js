import { CHANGE_DRAWER_STATUS } from "../actions/userPreferences";

const INITIAL_STATE = {
  drawer: true,
};

const userPreferences = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_DRAWER_STATUS:
      return {
        ...state,
        drawer: action.payload.status,
      };

    default:
      return state;
  }
};

export default userPreferences;
