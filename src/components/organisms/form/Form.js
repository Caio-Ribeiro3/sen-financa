import React from "react";
import { FormProvider } from "./Form-context";
import FormSwitchFields from "./FormSwitchFields";

function Form(props) {
  const { fields = [], classes, onSubmit } = props;
  return (
    <div className={"flex-column gap-2 p-1 ".concat(classes)}>
      <FormProvider fields={fields} onSubmit={onSubmit}>
        {fields.map((formField) => (
          <FormSwitchFields key={formField.name} {...formField} />
        ))}
      </FormProvider>
    </div>
  );
}

export default Form;
