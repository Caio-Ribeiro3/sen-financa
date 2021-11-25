import { financeReducerTypes } from "./Finance-constants";

export const financeInitialState = {
  finances: [],
  loading: false,
  registerToUpdate: null,
  totalEntries: null,
  totalExpenditure: null,
  balance: null,
};

export const financeReducer = (
  state = financeInitialState,
  { type, payload }
) => {
  switch (type) {
    case financeReducerTypes.LOADING_FINANCES:
      return {
        ...state,
        loading: true,
      };
    case financeReducerTypes.SET_FINANCES:
      return {
        ...state,
        loading: false,
        finances: [...payload.finances],
        totalEntries: payload.totalEntries,
        totalExpenditure: payload.totalExpenditure,
        balance: payload.balance,
      };
    case financeReducerTypes.SET_REGISTER_TO_UPDATE:
      return {
        ...state,
        registerToUpdate: payload.registerToUpdate,
      };
    default:
      return state;
  }
};
