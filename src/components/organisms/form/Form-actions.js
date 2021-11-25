import { formReducerConstants, formSwitchFieldsTypes } from "./Form-constants";

export function setInitialState(fields, dispatch) {
  const { values, initialValues } = fields.reduce(
    (accumulated, current) => {
      if (current.formFieldType !== formSwitchFieldsTypes.SUBMIT) {
        accumulated.values[current.name] = current.initialValue;
        accumulated.initialValues[current.name] = current.initialValue;
      }
      return accumulated;
    },
    { values: {}, initialValues: {} }
  );
  dispatch({
    type: formReducerConstants.INIT,
    payload: { values, initialValues },
  });
}

export function setFieldValue({ name, value }, dispatch) {
  dispatch({
    type: formReducerConstants.UPDATE_VALUE,
    payload: { stateKey: name, value },
  });
}

export function handleIsSubmiting({ isSubmiting }, dispatch) {
  dispatch({
    type: formReducerConstants.IS_SUBMITING,
    payload: { isSubmiting },
  });
}
