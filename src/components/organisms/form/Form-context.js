import React, {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useReducer,
} from "react";
import {
  handleIsSubmiting,
  setFieldValue,
  setInitialState,
} from "./Form-actions";
import { formInitalState, formReducer } from "./Form-reducer";

const FormContext = createContext({});

export const FormProvider = (props) => {
  const { children, fields, onSubmit } = props;

  const [state, dispatch] = useReducer(formReducer, formInitalState);

  const updateField = useCallback((name, value) => {
    setFieldValue({ name, value }, dispatch);
  }, []);

  const formStartSubmited = useCallback(() => {
    handleIsSubmiting({ isSubmiting: true }, dispatch);
  }, []);
  const formEndSubmit = useCallback(() => {
    handleIsSubmiting({ isSubmiting: false }, dispatch);
  }, []);

  const handleOnSubmit = useCallback(() => {
    onSubmit(state, formStartSubmited, formEndSubmit);
  }, [onSubmit, state, formStartSubmited, formEndSubmit]);

  const value = useMemo(
    () => ({
      ...state,
      updateField,
      handleOnSubmit,
    }),
    [state, updateField, handleOnSubmit]
  );

  useLayoutEffect(() => {
    setInitialState(fields, dispatch);
  }, [fields]);

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useForm hook must be used inside form context");
  }
  return context;
};
