import React, { useCallback, useMemo } from "react";
import Modal from "../../components/molecules/modal/Modal";
import Form from "../../components/organisms/form/Form";
import { formSwitchFieldsTypes } from "../../components/organisms/form/Form-constants";
import { modalKeys } from "../../components/UI-constants";
import { useUI } from "../../components/UI-context";
import { useFinance } from "./Finance-context";
import { financeFormFields } from "./Finance-form";

function FinanceCreateEditForm() {
  const { setModal } = useUI();
  const {
    createRegister,
    registerToUpdate,
    setRegisterToUpdate,
    updateRegister,
  } = useFinance();

  const handleOnClose = useCallback(() => {
    if (registerToUpdate) {
      setRegisterToUpdate({ id: registerToUpdate.id });
    }
  }, [registerToUpdate, setRegisterToUpdate]);

  const handleSubmit = useCallback(
    async ({ values }, formStartSubmited, formEndSubmit) => {
      formStartSubmited();
      const payload = financeFormFields().reduce(
        (previousValue, currentValue) => {
          if (currentValue.formFieldType !== formSwitchFieldsTypes.SUBMIT) {
            previousValue[currentValue.name] = values[currentValue.name];
          }
          return previousValue;
        },
        {}
      );
      if (registerToUpdate) {
        await updateRegister({ id: registerToUpdate.id, ...payload });
        handleOnClose();
      } else {
        await createRegister(payload);
      }
      formEndSubmit();
      setModal(modalKeys.CREATE_EDIT_FINANCE_REGISTER_FORM);
    },
    [createRegister, setModal, updateRegister, registerToUpdate, handleOnClose]
  );

  const fields = useMemo(() => {
    return financeFormFields(registerToUpdate);
  }, [registerToUpdate]);

  return (
    <Modal
      onClose={handleOnClose}
      name={modalKeys.CREATE_EDIT_FINANCE_REGISTER_FORM}
    >
      <Form fields={fields} onSubmit={handleSubmit} />
    </Modal>
  );
}

export default FinanceCreateEditForm;
