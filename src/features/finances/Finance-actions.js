import { financeReducerTypes } from "./Finance-constants";
import { handleFinanceBalance } from "./Finance-utils";
import {
  createFinanceRegister,
  listAllFinanceRegisters,
  removeFinanceRegister,
  updateFinanceRegister,
} from "./services/api";

export async function getRegistersAction({ params }, dispatch) {
  try {
    dispatch({
      type: financeReducerTypes.LOADING_FINANCES,
    });
    const data = await listAllFinanceRegisters({ params });
    dispatch({
      type: financeReducerTypes.SET_FINANCES,
      payload: { finances: [...data], ...handleFinanceBalance(data) },
    });
  } catch (e) {
    console.log(e);
  }
}

export async function createRegisterAction(
  { title, type, category, value },
  state,
  dispatch
) {
  try {
    const data = await createFinanceRegister({ title, type, category, value });
    const { totalEntries, totalExpenditure, balance } = state;
    dispatch({
      type: financeReducerTypes.SET_FINANCES,
      payload: {
        finances: [data, ...state.finances],
        ...handleFinanceBalance([data], {
          totalEntries,
          totalExpenditure,
          balance,
        }),
      },
    });
  } catch (e) {
    console.log(e);
  }
}

export async function updateRegisterAction(
  { id, title, type, category, value },
  state,
  dispatch
) {
  try {
    const data = await updateFinanceRegister({
      id,
      title,
      type,
      category,
      value,
    });
    const { totalEntries, totalExpenditure, balance } = state;
    const newFinancesState = [...state.finances];
    const financeId = newFinancesState.findIndex(
      (finance) => finance.id === id
    );
    const oldFinance = newFinancesState[financeId];
    const result = handleFinanceBalance(
      [{ ...oldFinance, remove: true }, data],
      {
        totalEntries,
        totalExpenditure,
        balance,
      }
    );
    newFinancesState[financeId] = data;
    dispatch({
      type: financeReducerTypes.SET_FINANCES,
      payload: {
        finances: newFinancesState,
        ...result,
      },
    });
  } catch (e) {
    console.log(e);
  }
}

export async function deleteRegisterAction({ id }, state, dispatch) {
  try {
    await removeFinanceRegister({ id });
    const data = state.finances.find((finance) => finance.id === id);
    const { totalEntries, totalExpenditure, balance } = state;
    dispatch({
      type: financeReducerTypes.SET_FINANCES,
      payload: {
        finances: state.finances.filter((finance) => finance.id !== id),
        ...handleFinanceBalance([{ ...data, remove: true }], {
          totalEntries,
          totalExpenditure,
          balance,
        }),
      },
    });
  } catch (e) {
    console.log(e);
  }
}

export function setRegisterToUpdateAction({ id }, state, dispatch) {
  try {
    if (state.registerToUpdate !== null && state.registerToUpdate.id === id) {
      dispatch({
        type: financeReducerTypes.SET_REGISTER_TO_UPDATE,
        payload: { registerToUpdate: null },
      });
      return;
    }
    const registerToUpdate = state.finances.find(
      (finance) => finance.id === id
    );
    if (!registerToUpdate) {
      throw new Error("Invalid register");
    }
    dispatch({
      type: financeReducerTypes.SET_REGISTER_TO_UPDATE,
      payload: { registerToUpdate },
    });
  } catch (e) {
    console.log(e);
  }
}
