import React, {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useReducer,
} from "react";
import {
  createRegisterAction,
  deleteRegisterAction,
  getRegistersAction,
  updateRegisterAction,
  setRegisterToUpdateAction,
} from "./Finance-actions";
import { financeInitialState, financeReducer } from "./Finance-reducer";

const FinanceContext = createContext({});

export const FinanceProvider = (props) => {
  const { children } = props;

  const [state, dispatch] = useReducer(financeReducer, financeInitialState);

  const getRegisters = useCallback((params) => {
    getRegistersAction({ params }, dispatch);
  }, []);

  const createRegister = useCallback(
    async ({ title, type, category, value }) => {
      await createRegisterAction(
        { title, type, category, value },
        state,
        dispatch
      );
    },
    [state]
  );
  const updateRegister = useCallback(
    async ({ id, title, type, category, value }) => {
      await updateRegisterAction(
        {
          id,
          title,
          type,
          category,
          value,
        },
        state,
        dispatch
      );
    },
    [state]
  );
  const deleteRegister = useCallback(
    async ({ id }) => {
      await deleteRegisterAction({ id }, state, dispatch);
    },
    [state]
  );

  const setRegisterToUpdate = useCallback(
    ({ id }) => {
      setRegisterToUpdateAction({ id }, state, dispatch);
    },
    [state]
  );

  const value = useMemo(
    () => ({
      ...state,
      getRegisters,
      createRegister,
      updateRegister,
      deleteRegister,
      setRegisterToUpdate,
    }),
    [
      state,
      getRegisters,
      createRegister,
      updateRegister,
      deleteRegister,
      setRegisterToUpdate,
    ]
  );

  useLayoutEffect(() => {
    getRegisters();
  }, []);

  return (
    <FinanceContext.Provider value={value}>{children}</FinanceContext.Provider>
  );
};

export const useFinance = () => {
  const context = useContext(FinanceContext);
  if (!context) {
    throw new Error("Finance context must be used inside Finance Provider");
  }
  return context;
};

export const withFinanceProvider = (Component) => (props) => {
  return (
    <FinanceProvider>
      <Component {...props} />
    </FinanceProvider>
  );
};
