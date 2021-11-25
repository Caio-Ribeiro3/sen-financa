import { modalKeys, UIReducerConstants } from "./UI-constants";

export const setModalKey = ({ key }, state, dispatch) => {
  if (Object.keys(modalKeys).includes(key)) {
    return dispatch({
      type: UIReducerConstants.SET_MODAL,
      payload: { modalOpen: state.modalOpen === key ? null : key },
    });
  }
  console.log("Error when trying to open modal");
};

export const setScrollLocked = (dispatch) => {
  dispatch({
    type: UIReducerConstants.SET_SCROLL_LOCKED,
    payload: { isScrollLocked: true },
  });
};

export const setScrollUnlocked = (dispatch) => {
  dispatch({
    type: UIReducerConstants.SET_SCROLL_LOCKED,
    payload: { isScrollLocked: false },
  });
};
