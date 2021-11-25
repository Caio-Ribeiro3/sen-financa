import { formReducerConstants } from "./Form-constants";

export const formInitalState = {
  values: {},
  initialValues: {},
  isSubmiting: false,
};

export const formReducer = (state = formInitalState, { type, payload }) => {
  switch (type) {
    case formReducerConstants.INIT:
      return {
        ...state,
        values: payload.values,
        initialValues: payload.initialValues,
      };
    case formReducerConstants.UPDATE_VALUE:
      return {
        ...state,
        values: {
          ...state.values,
          [payload.stateKey]: payload.value,
        },
      };
    case formReducerConstants.IS_SUBMITING:
      return {
        ...state,
        isSubmiting: payload.isSubmiting,
      };
    default:
      return state;
  }
};
