import { UIReducerConstants } from "./UI-constants";

export const UIInitialState = {
  modalOpen: false,
  isScrollLocked: false,
};

export const UIReducer = (state = UIInitialState, { type, payload }) => {
  switch (type) {
    case UIReducerConstants.SET_MODAL:
      return {
        ...state,
        modalOpen: payload.modalOpen,
      };
    case UIReducerConstants.SET_SCROLL_LOCKED:
      return {
        ...state,
        isScrollLocked: payload.isScrollLocked,
      };
    default:
      return state;
  }
};
