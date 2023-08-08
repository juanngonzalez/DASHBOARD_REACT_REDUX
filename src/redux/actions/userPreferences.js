export const CHANGE_DRAWER_STATUS = "CHANGE_DRAWER_STATUS";

export const changeDrawerStatus = (status) => (dispatch) => {
  dispatch({
    type: CHANGE_DRAWER_STATUS,
    payload: { status },
  });
};
